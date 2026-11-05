# Mapa de conocimiento de OLIVICE

## Cobertura del an?lisis

Graphify detect? 50 archivos: 9 archivos de c?digo, 6 documentos, 1 PDF y 34 im?genes. El grafo generado contiene 73 nodos, 81 relaciones y 10 comunidades. La extracci?n incluida es estructural y cubre los 9 archivos de c?digo; la extracci?n sem?ntica de documentos e im?genes no se ejecut? porque falta `references/extraction-spec.md` en la habilidad instalada. Por eso las relaciones de recursos anotadas abajo se contrastaron con las rutas escritas en el c?digo.

## Estructura Next.js

- **App Router:** `src/app/` contiene la ruta ra?z (`page.tsx`), el layout ra?z (`layout.tsx`), estilos globales (`globals.css`) y favicon. No hay directorio de componentes compartidos ni otras p?ginas.
- **P?gina principal:** `src/app/page.tsx` exporta `Home()` como Server Component por defecto. La p?gina concentra el encabezado, men? m?vil y de escritorio, secciones de inicio, concepto, marca, experiencia, colecci?n, contacto y pie.
- **Layout global:** `src/app/layout.tsx` carga fuentes Geist, `globals.css` y envuelve `children`. Declara metadatos de plantilla (?Create Next App?) y `lang="en"`, mientras el contenido de la p?gina est? en espa?ol.
- **Estilos:** `src/app/globals.css` importa Tailwind CSS v4; `postcss.config.mjs` activa `@tailwindcss/postcss`. Gran parte del dise?o se expresa con clases Tailwind en `page.tsx`.
- **Configuraci?n:** `next.config.ts` est? pr?cticamente vac?o. `tsconfig.json` activa modo estricto y el alias `@/*` hacia `src/*`. `package.json` define Next 16.3.4, React 19.2.8 y scripts `dev`, `build`, `start` y `lint`.

## Relaciones principales

```text
package.json ??declara??> Next.js + React
      ?
      ??? scripts ??> next dev / next build / next start / eslint
      ??? dependencias ??> src/app/layout.tsx y src/app/page.tsx

layout.tsx ??importa??> globals.css + fuentes Geist
      ??? envuelve??> page.tsx (ruta /)

page.tsx ??usa??> next/image + next/link
      ??? datos: departamentos[] + stickers[] (emparejados por ?ndice)
      ??? recursos: public/images/{logos, cartilla-sticker.png, stickers/*.png}
```

## P?ginas, componentes y recursos

- Solo est? implementada la p?gina `/`. No existen componentes extra?dos o reutilizables; el marcado y el contenido de las secciones viven en `Home()` dentro de `page.tsx`.
- `departamentos` y `stickers` contienen 24 elementos y se relacionan por posici?n para formar la cuadr?cula. Cada tarjeta carga `/images/stickers/<slug>.png`.
- `navLinks` alimenta tanto la navegaci?n de escritorio como el men? m?vil. La imagen `cartilla-sticker.png` se presenta en dos secciones; `logo-beige.png` se reutiliza en ?Sobre OLIVICE? y el pie.
- El encabezado utiliza `logo-azul-header.png`. `public/images` tambi?n contiene `logo-azul.png`, `logo-azul-old.png` y `Stickers.pdf`, que no aparecen referenciados en el c?digo de `src`. Los SVG gen?ricos de `public/` tampoco tienen referencias detectadas. No se encontraron archivos con hashes id?nticos dentro de `public/images`.

## Observaciones de organizaci?n

1. **P?gina monol?tica:** navegaci?n, datos, contenido y presentaci?n est?n juntos en `page.tsx`; es el principal punto de concentraci?n y candidato a separar por secciones si la p?gina sigue creciendo.
2. **Datos paralelos fr?giles:** los departamentos y slugs se corresponden por ?ndice. Un cambio de orden o longitud puede emparejar un nombre con el sticker incorrecto; un ?nico arreglo de objetos mantendr?a ambos valores juntos.
3. **Enlaces sin ruta observada:** las tarjetas apuntan a `/peru/<slug>`, pero no existe `src/app/peru/[slug]/page.tsx` ni otra ruta bajo `src/app/peru`; esos destinos no est?n implementados en este ?rbol.
4. **Restos y recursos sin uso:** tres variantes de logo, el PDF de stickers y SVG de plantilla no est?n referenciados desde `src`. Conviene confirmar si son materiales de trabajo antes de retirarlos.
5. **Metadatos iniciales:** el t?tulo/description del layout siguen los valores de Create Next App, y `lang="en"` no coincide con la p?gina en espa?ol.
6. **Sin duplicados binarios exactos:** los hashes de recursos son distintos. Algunos recursos se reutilizan intencionalmente en varios bloques.

## Integridad del grafo

La comprobaci?n de salud de Graphify se?al? 3 aristas con extremos ausentes y 3 pares de aristas colapsados por compartir extremos en la extracci?n. El grafo sigue siendo navegable, pero sus relaciones estructurales pueden omitir variantes de esas aristas; las relaciones de im?genes se documentaron adem?s mediante lectura del c?digo.
