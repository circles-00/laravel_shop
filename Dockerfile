FROM php:8.3.11-fpm

RUN apt-get update && apt-get install -y \
    libzip-dev \
    libpng-dev \
    postgresql-client \
    libpq-dev \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN docker-php-ext-install pdo pgsql pdo_pgsql gd bcmath zip \
    && pecl install redis \
    && docker-php-ext-enable redis

WORKDIR /usr/share/nginx/html/

COPY . ./

ARG APP_NAME
ARG APP_ENV
ARG APP_DEBUG
ARG APP_URL
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD
ARG BROADCAST_DRIVER
ARG CACHE_DRIVER
ARG FILESYSTEM_DISK
ARG QUEUE_CONNECTION
ARG SESSION_DRIVER
ARG SESSION_LIFETIME
ARG REDIS_HOST
ARG REDIS_PORT

RUN echo "APP_NAME=${APP_NAME}" > .env && \
    echo "APP_ENV=${APP_ENV}" >> .env && \
    echo "APP_KEY=some_random_key" >> .env && \
    echo "APP_DEBUG=${APP_DEBUG}" >> .env && \
    echo "APP_URL=${APP_URL}" >> .env && \
    echo "DB_CONNECTION=pgsql" >> .env && \
    echo "DB_HOST=db" >> .env && \
    echo "DB_PORT=5432" >> .env && \
    echo "DB_DATABASE=${DB_DATABASE}" >> .env && \
    echo "DB_USERNAME=${DB_USERNAME}" >> .env && \
    echo "DB_PASSWORD=${DB_PASSWORD}" >> .env && \
    echo "BROADCAST_DRIVER=${BROADCAST_DRIVER}" >> .env && \
    echo "CACHE_DRIVER=${CACHE_DRIVER}" >> .env && \
    echo "FILESYSTEM_DISK=${FILESYSTEM_DISK}" >> .env && \
    echo "QUEUE_CONNECTION=${QUEUE_CONNECTION}" >> .env && \
    echo "SESSION_DRIVER=${SESSION_DRIVER}" >> .env && \
    echo "SESSION_LIFETIME=${SESSION_LIFETIME}" >> .env && \
    echo "REDIS_HOST=${REDIS_HOST}" >> .env && \
    echo "REDIS_PORT=${REDIS_PORT}" >> .env && \
    echo "LOG_CHANNEL=stack" >> .env

RUN sed 's_@php artisan package:discover_/bin/true_;' -i composer.json \
    && composer install --ignore-platform-req=php --ignore-platform-req=ext-intl --ignore-platform-req=ext-zip --no-dev --optimize-autoloader \
    && composer clear-cache \
    && php artisan package:discover --ansi \
    && chmod -R 775 storage \
    && chown -R www-data:www-data storage \
    && mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache

COPY ./entrypoint.sh /usr/local/bin/php-entrypoint.sh

RUN chmod a+x /usr/local/bin/*

ENTRYPOINT ["/usr/local/bin/php-entrypoint.sh"]

CMD ["php-fpm"]

