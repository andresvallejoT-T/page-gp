# Página del prácticum en el KBS

Sitio estático hecho con Astro. Todo el contenido está en `src/content/secciones/*.md`.

## Cómo editar
- Cambia el texto de cualquier `.md`.
- Para agregar una sección, crea un `.md` nuevo con `titulo` y `orden` en el encabezado.
- Para quitar una, borra su archivo.

## Probar en local
```bash
npm install
npm run dev
```

## Publicar en GitHub Pages
1. Edita `astro.config.mjs` (tu usuario y el nombre del repo).
2. Sube el proyecto a GitHub (rama `main`).
3. En Settings → Pages, elige **Source: GitHub Actions**.
