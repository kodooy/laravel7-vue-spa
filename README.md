# Single Page Application Boilerplate - Laravel7 & VueJs

This boilerplate is for SPA that exists **in the same repository** and is **on the same domain** as your Laravel application.

It includes Vue components for all default laravel auth views (eg. Login, Register, Password Reset, Password Confirmation). It preserves all authentication methods like MustVerifyEmail or PasswordConfirmation (the routes can be protected using Global Navigation Guards and Meta Fields - defaults routes are defined in ```resources\js\router\index.js```).

This boilerplate includes:

- Laravel 7
- Laravel Sanctum
- VueJs 2.5.*
- Vue Router
- Vuex

## Installation

Clone or download this repository

```git clone https://github.com/kodooy/laravel7-vue-spa.git```

Install Laravel and all dependencies

```composer install```

Copy .env file and fill it out (database, mail)

```cp .env.example .env```

**It is important** to set ```SANCTUM_STATEFUL_DOMAINS``` in .env

```SANCTUM_STATEFUL_DOMAINS="yourdomain.com"```

Generate key

```php artisan key:generate```

Create database and run migrations

```php artisan migrate```

Install Vue.js and all dependencies

```npm install```

When developing your SPA

```npm run watch```

When ready for production

```npm run production```
