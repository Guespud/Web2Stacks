FROM php:8.3-cli-bookworm AS php_vendor

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
    zip \
    libzip-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install fileinfo mbstring pdo xml zip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY composer.json composer.lock ./

RUN composer install \
    --no-dev \
    --optimize-autoloader \
    --no-interaction \
    --no-scripts


FROM node:22-bookworm-slim AS node_assets

WORKDIR /app

COPY package.json package-lock.json ./
COPY webpack.mix.js ./
COPY scripts ./scripts
COPY resources ./resources

RUN npm ci
RUN npm run build


FROM php:8.3-cli-bookworm AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    unzip \
    zip \
    && docker-php-ext-install fileinfo mbstring pdo xml zip \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .
COPY --from=php_vendor /app/vendor ./vendor
COPY --from=node_assets /app/public/css ./public/css
COPY --from=node_assets /app/public/js ./public/js
COPY --from=node_assets /app/public/mix-manifest.json ./public/mix-manifest.json
COPY docker/start.sh /start.sh

RUN chmod +x /start.sh \
    && mkdir -p storage/framework/sessions storage/framework/views storage/framework/cache storage/framework/testing storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 8080

CMD ["/start.sh"]
