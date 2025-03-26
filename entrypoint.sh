#!/bin/bash

main() {
    if [ "$IS_WORKER" = "true" ]; then
        exec "$@"
    else
        prepare_file_permissions
        run_npm_build
        prepare_storage
        # wait_for_db
        run_migrations
        optimize_app
        run_server "$@"
    fi
}

prepare_file_permissions() {
    chmod a+x ./artisan
}

run_npm_build() {
    echo "Installing NPM dependencies"
    if [ -f "package.json" ]; then
        echo "Running yarn install"
        npm install -g yarn

        yarn install --frozen-lockfile

        echo "Running NPM build"
        yarn build
    else
        echo "No package.json found, skipping NPM build"
    fi
}

prepare_storage() {
    # Create required directories for Laravel
    mkdir -p /usr/share/nginx/html/storage/framework/cache/data
    mkdir -p /usr/share/nginx/html/storage/framework/sessions
    mkdir -p /usr/share/nginx/html/storage/framework/views

    # Set permissions for the storage directory
    chown -R www-data:www-data /usr/share/nginx/html/storage
    chmod -R 775 /usr/share/nginx/html/storage
}

wait_for_db() {
    echo "Waiting for DB to be ready"
    until ./artisan migrate:status 2>&1 | grep -q -E "(Migration table not found|Migration name)"; do
        sleep 1
    done
    echo "Database is ready!"
}

run_migrations() {
    ./artisan migrate
}

optimize_app() {
    echo "Optimizing application..."
    ./artisan optimize:clear
    ./artisan optimize
    echo "Application optimization completed!"
}

run_server() {
    echo "Starting PHP-FPM server..."
    exec /usr/local/bin/docker-php-entrypoint "$@"
}

main "$@"
