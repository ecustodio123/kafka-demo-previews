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
