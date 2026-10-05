import fs from 'node:fs/promises'
import path from 'node:path'

import { getMockupMeta, mockups } from '../src/data/mockups.js'

// WhatsApp, Facebook y similares no ejecutan JavaScript: leen el HTML tal cual.
// Por eso, al compilar, generamos un HTML por mockup (`/<slug>.html` y `/previews/<slug>.html`)
// con su propio título, descripción e imagen. Cloudflare Pages sirve `/<slug>` desde `<slug>.html`
// y, como no hay 404.html, manda cualquier otra ruta a index.html (modo SPA).
// No agregar un `/* /index.html 200` en _redirects: en Pages las reglas ganan a los archivos
// y taparía estos HTML.

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function toAbsoluteUrl(url, siteUrl) {
  if (!url) return null
  if (/^https?:\/\//.test(url)) return url
  return siteUrl ? new URL(url, siteUrl).href : null
}

function withMeta(html, { title, description, image, url }) {
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="es_PE" />',
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    url && `<meta property="og:url" content="${escapeHtml(url)}" />`,
    image && `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
  ].filter(Boolean)

  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta\s+(?:name="(?:description|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/g, '')
    .replace(/\s*<\/head>/, `\n    ${tags.join('\n    ')}\n  </head>`)
}

export function previewMetaPlugin({ siteUrl } = {}) {
  let outDir

  return {
    name: 'kafka-preview-meta',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const indexHtml = await fs.readFile(path.join(outDir, 'index.html'), 'utf8')
      await fs.mkdir(path.join(outDir, 'previews'), { recursive: true })

      await Promise.all(
        mockups.flatMap((mockup) => {
          const meta = getMockupMeta(mockup)

          return [mockup.slug, `previews/${mockup.slug}`].map((route) =>
            fs.writeFile(
              path.join(outDir, `${route}.html`),
              withMeta(indexHtml, {
                ...meta,
                image: toAbsoluteUrl(meta.image, siteUrl),
                url: siteUrl ? new URL(route, siteUrl).href : null,
              }),
            ),
          )
        }),
      )
    },
  }
}
