# Kafka Pages

Aplicación comercial de Kafka Tech para mostrar proyectos reales, mockups por rubro y una demo de tienda online.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Rutas

- `/` muestra el showroom comercial con proyectos reales, mockups conceptuales y el nuevo servicio e-commerce.
- `/tiendas-prueba` muestra Kafka Commerce renderizado desde el paquete `@ecustodio123/kafka-commerce`.
- `/floreria-kafka` muestra el mockup maestro para florerías.
- `/veterinaria-kafka` muestra la primera plantilla para veterinarias.
- `/veterinaria-kafka-2` muestra la segunda plantilla para veterinarias.
- `/psicologa-kafka` muestra el mockup para psicología.
- `/centro-de-conciliacion-kafka` muestra el mockup para centro de conciliación.
- `/god-pack-store` muestra el mockup para tienda TCG.
- Cualquier slug inexistente muestra una página 404 simple.

## Kafka Commerce

El proyecto está preparado para instalar el paquete privado desde GitHub Packages:

```bash
npm config set //npm.pkg.github.com/:_authToken "tu_token_con_acceso"
npm install @ecustodio123/kafka-commerce@0.1.0
```

`.npmrc` configura el registry del scope y el token debe quedar en tu configuración local de npm, nunca versionado. La ruta `/tiendas-prueba` renderiza `CommerceStore` desde `@ecustodio123/kafka-commerce`.

Variables públicas usadas por la tienda:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_STORE_ID=
VITE_STORE_NAME=Kafka Commerce Demo
VITE_WHATSAPP_PHONE=51999999999
```

También se acepta `VITE_SUPABASE_PUBLISHABLE_KEY` como alternativa a `VITE_SUPABASE_ANON_KEY`.

## Agregar un nuevo cliente

1. Abre `src/data/mockups.js`.
2. Copia uno de los objetos dentro del array `mockups`.
3. Cambia `slug`, `clientName`, `industry`, `summary`, `theme`, `hero`, `about`, `services`, `optionalSections` y `contact`.
4. Publica el proyecto y comparte `/tu-nuevo-slug`.

## Vista previa al compartir el link

Al compilar (`npm run build`) se genera un `dist/<slug>.html` y un `dist/previews/<slug>.html` por mockup, con título, descripción e imagen propios (Open Graph). Así WhatsApp y las redes muestran la tarjeta del cliente y no la de Kafka.

- La descripción sale de `summary`.
- La imagen sale de `shareImage` o, si no existe, de `hero.image`. Usa una URL absoluta, idealmente de 1200 px de ancho.
- Define `SITE_URL` (ver `.env.example`) en el hosting para agregar `og:url` y aceptar imágenes locales como `/brand/logo.jpg`.

El sitio se publica en Cloudflare Pages. No hace falta un `_redirects` para el modo SPA: sin `404.html`, Pages envía las rutas desconocidas a `index.html`. No agregues `/* /index.html 200`, porque en Pages esa regla se aplica aunque exista el archivo y taparía los HTML de cada mockup.

Cada demo sale solo de configuración local. No hay backend, login, CMS ni base de datos.

## Estructura

```txt
src/
  data/mockups.js
  components/
    layout/
    sections/
    ui/
  pages/
  App.jsx
```

Los componentes de `sections` renderizan las partes comunes de cada mockup. Los componentes de `ui` mantienen botones, badges, contenedores y tarjetas reutilizables.
