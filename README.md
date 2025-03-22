# Laravel + React Project Setup

This guide will walk you through setting up a new Laravel project with React.

## Prerequisites

Before getting started, ensure that you have the following installed:

- [PHP](https://www.php.net/downloads.php) (version 8.0 or above)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (version 14.x or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [MySQL](https://dev.mysql.com/downloads/installer/) or any other database you're using for the Laravel app

## Steps

### 1. Create a New Laravel Project

Start by creating a new Laravel project:

```bash
composer create-project --prefer-dist laravel/laravel laravel-react
```

Navigate into the project directory:

```bash
cd laravel-react
```

### 2. Install Laravel UI for React

Laravel comes with the `laravel/ui` package to scaffold front-end code for React, Vue, or Bootstrap. Install it via Composer:

```bash
composer require laravel/ui
```

Then, generate the React scaffolding:

```bash
php artisan ui react
```

### 3. Install NPM Dependencies

Now, install the necessary JavaScript dependencies:

```bash
npm install
```

Or if you're using Yarn:

```bash
yarn install
```

### 4. Set Up the Database

Configure your database connection in the `.env` file:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

Run the migrations to set up your database tables:

```bash
php artisan migrate
```

### 5. Build Assets

Now, compile the front-end assets using the following command:

```bash
npm run dev
```

### 6. Start the Development Server

You can start the Laravel development server:

```bash
php artisan serve
```

