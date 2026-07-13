# Línea base de rendimiento

Fecha: 13 de julio de 2026

## Arquitectura observada

- Astro SSR sobre el Worker existente de Cloudflare.
- HTML y contenido editorial renderizados en servidor.
- Inter como única familia tipográfica, alojada en el bundle.
- Sin framework cliente ni SDK de Analytics adicional.
- Supabase como fuente canónica; columnas seleccionadas explícitamente y métricas sociales agrupadas en paralelo.
- Assets de `/_astro/` versionados e inmutables; Admin y Auth declarados `no-store` en `_headers`.

## Medición del build

Medición sobre `npm run build`, usando `gzip -c` sobre los assets versionados:

| Presupuesto | Línea base | Estado |
| --- | ---: | --- |
| CSS compartido | 20.8 KB gzip | Dentro del objetivo de 40 KB |
| JS inicial de Reading | ~64.6 KB gzip | Dentro del objetivo de 120 KB |
| JS inicial de Discover | ~7.8 KB gzip | Dentro del objetivo de 120 KB |
| Familias tipográficas | 1, Inter variable | Dentro del máximo de 2 |

El cálculo de Reading suma ClientRouter, navegación, Supabase cliente, Analytics, lectura, like, comentarios y compartir;
es una cota conservadora basada en los chunks referenciados por la ruta. No incluye el script remoto de GA4, que solo se
solicita cuando existe `PUBLIC_GA_MEASUREMENT_ID` y cuyo tamaño controla Google.

## Imágenes y riesgos

Las imágenes locales originales más pesadas son `daniel-montesinos.png` (1.8 MB) y `hero-image.png` (540 KB); la
fotografía pública configurada de Daniel pasa por Astro Image. El Hero de Home es CSS y no añade una imagen raster LCP.
Las imágenes remotas de reflexiones conservan compatibilidad con Supabase, prioridad correcta y dimensiones declaradas,
pero no tienen todavía variantes `srcset`: su peso depende del archivo editorial. Será el primer punto de escalamiento
cuando Storage incorpore transformaciones estables; no se alteraron imágenes antiguas que pueden contener texto.

Core Web Vitals deben observarse con datos de campo en Cloudflare/GA4: LCP <2.5 s, INP <200 ms y CLS <0.1. Lighthouse
local es una referencia de laboratorio, no sustituye datos reales ni debe justificar romper la experiencia.

Lighthouse no está instalado en el repositorio ni disponible sin añadir una dependencia, por lo que no se inventan
puntuaciones. Para medir un despliegue representativo:

```bash
npx lighthouse https://danielmontesinos.com/ --preset=desktop --view
npx lighthouse https://danielmontesinos.com/reflexiones --preset=desktop --view
npx lighthouse https://danielmontesinos.com/reflexiones/SLUG_REAL --view
npx lighthouse https://danielmontesinos.com/sobre-mi --view
```

Repetir en móvil sin `--preset=desktop`, en una ventana limpia y al menos tres veces por ruta; conservar la mediana y
contrastar LCP, INP y CLS con datos de campo de Cloudflare/GA4.

## Caché y observabilidad

RSS usa una hora con `stale-while-revalidate`; robots una hora; assets un año immutable. El HTML SSR público conserva
la política del Worker. El sitemap de reflexiones usa una hora y un día de revalidación tolerante. No se cachean
explícitamente Admin, Auth ni contenido personalizado.

Fallos de Supabase se registran en servidor sin datos personales; likes, comentarios y Analytics degradan sin ocultar
la reflexión. Revisar Worker Observability, Supabase Logs/Auth/Storage y GA4 DebugView según el dominio del fallo.
