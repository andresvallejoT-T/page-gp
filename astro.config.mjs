import { defineConfig } from 'astro/config';

// Cambia TU-USUARIO por tu usuario de GitHub.
// Si el repositorio se llama TU-USUARIO.github.io, borra la línea "base".
// Si se llama distinto (ej. kbs-practicum), deja base con el nombre del repo.
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/kbs-practicum',
});
