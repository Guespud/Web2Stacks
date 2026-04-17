# ADIPA Laravel

Prueba técnica en Laravel que replica un catálogo de cursos con carrito en sesión y checkout básico.

## Stack

- PHP 8.3
- Laravel 13
- Blade
- Laravel Mix

## Instalación

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
```

## Desarrollo

```bash
php artisan serve
npm run dev
```

## Rutas

- `/`: catálogo
- `/checkout`: checkout
- `/checkout/success`: compra exitosa

## Notas

- El carrito se guarda en sesión
- Los datos del catálogo son estáticos
