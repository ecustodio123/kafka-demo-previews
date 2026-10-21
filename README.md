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
- `/kafka-store` y `/tiendas-prueba` muestran la tienda predeterminada (`VITE_STORE_ID`).
- `/kafka-store/:slug` resuelve el nombre público mediante `stores.slug` y entrega su ID a Kafka Commerce.
- `/kafka-store/:id` mantiene acceso por ID entero positivo.
- `/:slug/stores?id=:id` conserva los enlaces de las landings. El ID es obligatorio y nunca usa otra tienda como fallback.
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
export GITHUB_PACKAGES_TOKEN=tu_token_con_acceso
npm ci
```

`.npmrc` configura el registry del scope y lee el token desde `GITHUB_PACKAGES_TOKEN`. En Cloudflare Pages agrega esa variable como Environment Variable para Production y Preview. No escribas el valor real del token en `.npmrc` ni en archivos versionados.

Variables públicas usadas por la tienda:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_STORE_ID=
VITE_STORE_NAME=Kafka Store
VITE_WHATSAPP_PHONE=51999999999
VITE_STORE_WHATSAPP_PHONES={}
```

También se acepta `VITE_SUPABASE_PUBLISHABLE_KEY` como alternativa a `VITE_SUPABASE_ANON_KEY`.

Kafka Store consume la API pública de `@ecustodio123/kafka-commerce@0.3.0` y sus estilos, importados una sola vez en `src/main.jsx`. Usa navegación `standalone` y el bucket `product-images`, como la integración de referencia en Veterinaria Cueva, con un tema neutral propio.

El cliente Supabase público es único y no conserva sesiones. La lectura de `stores` solicita únicamente `id,name,slug`, con filtro por ID o slug y las RLS vigentes. El paquete consulta productos y categorías activos por el ID resuelto, y separa carrito y favoritos por tienda. Al cambiar de tienda se desmonta la anterior, incluyendo sus datos, filtros y checkout.

Para habilitar pedidos en varias tiendas, configura `VITE_STORE_WHATSAPP_PHONES` con JSON por ID, por ejemplo `{"3":"51999999999","6":"51888888888"}`. `VITE_WHATSAPP_PHONE` y `VITE_STORE_NAME` solo son valores predeterminados de `VITE_STORE_ID`; no se reutilizan para otros clientes. Si falta un teléfono válido, el catálogo sigue disponible y el paquete deshabilita el checkout. Los teléfonos son configuración pública, no credenciales.

**Antes de publicar:** la clave pública debe poder leer las filas necesarias de `stores` para resolver slugs. Si una fila no es visible, se muestra un error sin recurrir a `VITE_STORE_ID`. Los enlaces por ID pueden seguir mostrando su catálogo aunque su metadata no sea visible. No se modifican SQL, RLS ni infraestructura desde esta integración.

Validaciones de la integración:

```bash
npm run typecheck
npm test
npm run lint
npm run build
```

El typecheck está acotado a `src/lib/commerce` y comprueba las props contra los tipos públicos del paquete. Los tests verifican rutas, resolución pública, aislamiento, configuración de checkout y consultas del paquete sin escribir en Supabase ni enviar mensajes.

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

Las landings salen de configuración local; el catálogo de Kafka Commerce se lee desde Supabase usando la configuración pública del proyecto.

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
