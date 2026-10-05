# Kafka Pages

Aplicacion interna de Kafka para crear y compartir mockups simples de sitios web con clientes interesados.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Rutas

- `/` muestra el showroom interno con los mocks disponibles.
- `/floreria-paulina` muestra el mockup de Floreria Paulina.
- `/lex-vial` muestra el mockup corporativo de Lex Vial.
- `/lavado-de-muebles` muestra el mockup de servicio de lavado.
- Cualquier slug inexistente muestra una pagina 404 simple.

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

Cada demo sale solo de configuracion local. No hay backend, login, CMS ni base de datos.

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
