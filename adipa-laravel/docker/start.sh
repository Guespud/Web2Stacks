#!/bin/sh
set -eu

mkdir -p \
  /app/storage/framework/sessions \
  /app/storage/framework/views \
  /app/storage/framework/cache \
  /app/storage/framework/testing \
  /app/storage/logs \
  /app/bootstrap/cache

php artisan optimize:clear
php artisan package:discover --ansi
php artisan config:cache
php artisan route:cache
php artisan view:cache

exec php artisan serve --host=0.0.0.0 --port="${PORT:-8080}"
