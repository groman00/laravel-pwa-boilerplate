# Laravel Progressive Web App Boilerplate

Replaces default Laravel frontend.  Includes [https://github.com/GoogleChrome/sw-precache](sw-precache) and [https://github.com/GoogleChrome/sw-toolbox](sw-toolbox).

## Requirements

- [PHP >= 5.7.0](https://github.com/Homebrew/homebrew-php#installation)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Composer](https://getcomposer.org/doc/00-intro.md#globally)

## Getting Started
```
// Install JS Dependencies
yarn

// Build dev app from /resources into /build
gulp

// Build prod app from /resources into /build
gulp deploy

// Install PHP Dependencies
composer install

// Setup environment settings
cp .env.example .env
<edit .env with your correct credentials>

// Start server
php artisan server
```

Serve app with [Laravel Valet](https://laravel.com/docs/5.3/valet):

```
cd folder-name
valet link folder-name
valet secure folder-name
```

Site should be available at: [https://folder-name.dev](https://folder-name.dev)