# ADIPA Next.js

Prueba técnica en Next.js que replica el catálogo de cursos, filtros, carrito local y flujo de checkout.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

`npm run dev` usa Webpack para un entorno de desarrollo más estable en este workspace.

Si quieres probar Turbopack de forma explícita:

```bash
npm run dev:turbo
```

## Rutas

- `/`: catálogo
- `/checkout`: checkout
- `/checkout/success`: compra exitosa

## Notas

- El carrito vive en estado local
- Los datos del catálogo son estáticos
