# Taxonomía de Product Analytics

Versión: 1.0 — 13 de julio de 2026

## Principios

Los eventos explican si una reflexión aporta valor; no identifican personas. Nunca se envían comentarios, correos,
nombres, ids de Google, texto editorial privado, datos del Admin, IP manual ni contenido escrito en formularios.

`page_view` no equivale a persona. `reflection_open` no equivale a lectura terminada. Abrir una opción de compartir no
demuestra que se publicó. Los usuarios únicos son estimaciones que cambian según proveedor, dispositivo y privacidad.

## Eventos

| Evento | Momento | Propiedades permitidas |
| --- | --- | --- |
| `page_view` | Página pública cargada o navegación Astro | ubicación, path y título públicos |
| `reflection_open` | Apertura de reflexión individual | `reflection_slug`, `reflection_title`, `published_date`, `reading_minutes`, `entry_source`, `referrer_type` |
| `reflection_scroll` | 25, 50, 75 y 100% del cuerpo, una vez | `reflection_slug`, `percent`, `reading_minutes` |
| `reflection_finish` | Fin del cuerpo más tiempo mínimo comprometido | `reflection_slug`, `expected_reading_minutes`, `engaged_seconds`, `completion_method` |
| `reading_engagement` | Salida o navegación, una vez | `reflection_slug`, `engaged_seconds`, `expected_seconds`, `completion_ratio` |
| `like_add` / `like_remove` | Persistencia confirmada | `reflection_slug`, `location` |
| `comment_submit` | Creación confirmada | `reflection_slug`, `authenticated`, `moderation_status` |
| `share_open` | Apertura nativa o popover | `reflection_slug`, `location`, `mechanism` |
| `share_click` | Elección de canal | `reflection_slug`, `channel`, `location` |
| `share_success` | Clipboard confirmado o Web Share resuelto | `reflection_slug`, `channel`, `location` |
| `share_cancel` | Cancelación normal de Web Share | `reflection_slug`, `channel`, `location` |
| `cta_click` | CTA editorial principal | `cta_name`, `source_page`, `destination` |

Fuentes de entrada: `home_featured`, `home_previous`, `discover`, `related`, `direct`, `search`, `social`,
`external_referral`, `unknown`. Solo se conserva la categoría, nunca la URL externa completa.

## Métricas

Primarias: aperturas, tasa de finalización, tiempo comprometido, shares iniciados, copias confirmadas, likes,
comentarios y retorno. Secundarias: páginas vistas, sesiones, país, dispositivo y navegador.

