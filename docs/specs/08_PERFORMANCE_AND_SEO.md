# Feature 08 — Performance, SEO & Product Analytics

Versión: 2.0

Estado: 🟡 Implementada — pendiente activación GA4 y Lighthouse de campo

Fecha de implementación: 13 de julio de 2026

Prioridad: 🔴 Crítica

---

# Objetivo

Construir un sitio extremadamente rápido, accesible, medible y optimizado para buscadores, redes sociales y motores de IA.

La velocidad forma parte de la experiencia.

El SEO forma parte de la distribución.

La analítica forma parte de la toma de decisiones.

Cada una debe ayudar a que más personas encuentren, lean, compartan y regresen al contenido.

---

# Filosofía

Cada milisegundo importa.

Cada consulta debe justificarse.

Cada dependencia debe aportar valor.

Cada byte innecesario debe cuestionarse.

Cada decisión debe medirse.

No optimizar por intuición.

Optimizar con evidencia.

---

# Principios

El lector siempre está primero.

La simplicidad es una característica.

No perseguimos puntuaciones.

Perseguimos una experiencia excelente.

No optimizar prematuramente.

Primero medir.

Luego entender.

Finalmente optimizar.

---

# Objetivos

Lograr excelencia en:

- Performance
- SEO
- Accesibilidad
- Core Web Vitals
- Analytics
- Compartidos
- Mantenibilidad
- Escalabilidad

---

# Performance Budget

Antes de agregar nuevas dependencias evaluar su impacto.

Objetivos aproximados:

JavaScript inicial

< 120 KB comprimido

CSS inicial

< 40 KB

Hero principal

< 350 KB

Fuentes

Máximo dos familias.

Evitar dependencias pesadas si existe una solución nativa.

---

# Lighthouse

Objetivos mínimos

Performance

95+

Accessibility

100

Best Practices

100

SEO

100

---

# Core Web Vitals

Largest Contentful Paint (LCP)

< 2.5 s

Interaction to Next Paint (INP)

< 200 ms

Cumulative Layout Shift (CLS)

< 0.1

Mantener estos valores también en dispositivos móviles.

---

# Optimización de imágenes

Todas las imágenes deben:

- utilizar Astro Image
- estar optimizadas automáticamente
- servir WebP
- preparar AVIF cuando sea estable
- mantener excelente calidad
- respetar dimensiones reales
- usar lazy loading cuando corresponda
- evitar layout shift
- mostrar placeholder elegante

Las Hero Images:

16:9

1920x1080 mínimo

Sin texto incrustado

Sin logotipos

Sin firmas

Toda la información editorial debe renderizarse mediante HTML.

---

# JavaScript

Enviar únicamente el JavaScript necesario.

Priorizar SSR.

Evitar hidratar componentes innecesarios.

Usar islands solamente cuando realmente aporten valor.

Eliminar código muerto.

Evitar librerías grandes.

---

# CSS

Eliminar estilos no utilizados.

Mantener consistencia.

Reducir duplicación.

No introducir frameworks adicionales salvo necesidad justificada.

---

# Tipografías

Cargar únicamente las necesarias.

Optimizar carga.

Evitar bloqueos del render.

Mantener excelente legibilidad.

---

# SEO Técnico

Toda página debe incluir:

Title

Meta Description

Canonical

Open Graph

Twitter Card

Robots

Sitemap

RSS

Favicon

Metadata consistente.

---

# SEO Editorial

Cada artículo debe responder una intención clara.

Escribir primero para personas.

No utilizar clickbait.

Los títulos deben generar curiosidad sin engañar.

Las meta descripciones deben invitar a leer.

Cada reflexión debe tener personalidad propia.

---

# Reflexiones

Cada reflexión debe incluir:

Slug amigable

Título único

Descripción única

Open Graph propio

Tiempo de lectura

Fecha

Autor

Canonical

Imagen social

---

# Redes Sociales

Cada reflexión debe verse correctamente al compartirse en:

WhatsApp

LinkedIn

Facebook

X

Telegram

Discord

La metadata social debe incluir:

imagen

título

descripción

URL

autor

Nunca depender de JavaScript para generar metadata.

---

# AI Search Optimization

Preparar el contenido para buscadores basados en IA.

Mantener:

HTML semántico

Jerarquía H1-H2-H3

JSON-LD

Canonical

Metadata consistente

Contenido fácilmente interpretable por modelos de lenguaje.

---

# Structured Data

Preparar arquitectura para:

Article

Person

Breadcrumb

WebSite

SearchAction

Implementar únicamente cuando aporte valor.

---

# URLs

Siempre:

claras

legibles

cortas

estables

No cambiar URLs publicadas.

Evitar parámetros innecesarios.

---

# Indexación

Indexar:

/

reflexiones

reflexiones/[slug]

sobre-mi

Excluir:

admin

auth

páginas privadas

rutas internas

---

# Crawlabilidad

Ninguna reflexión debe quedar huérfana.

Toda reflexión debe poder encontrarse desde:

Home

Discover

Sitemap

RSS

Enlaces relacionados

---

# Accesibilidad

Cumplir WCAG AA.

Contraste correcto.

Texto alternativo.

Roles ARIA.

Focus visible.

Navegación por teclado.

Targets táctiles ≥44 px.

Mensajes accesibles.

---

# Responsive

Optimizar para:

Desktop

Tablet

Mobile

320 px

Nunca esconder funcionalidades importantes.

---

# Seguridad

HTTPS obligatorio.

OAuth seguro.

RLS.

No exponer claves.

Cabeceras de seguridad.

Sanitización de entradas.

---

# Product Analytics

La analítica debe servir para tomar decisiones.

Nunca recopilar información sensible.

Registrar únicamente información útil.

---

# Eventos mínimos

Reflection Open

Reflection Finish

Reflection Scroll 25%

Reflection Scroll 50%

Reflection Scroll 75%

Reflection Scroll 100%

Reading Time

Like

Comment

Share Click

Share Success

CTA Leer

CTA Conóceme

CTA Sobre mí

Newsletter (futuro)

Podcast (futuro)

Búsqueda (futuro)

---

# Métricas de producto

Medir:

Usuarios únicos

Usuarios recurrentes

Tiempo promedio de lectura

Tiempo real de permanencia

Artículos terminados

Artículos abandonados

Artículos más compartidos

Artículos con mayor engagement

Comentarios por artículo

Likes por artículo

Origen del tráfico

Dispositivo

Navegador

País

Ciudad (si Analytics lo permite)

Conversión:

Home → Reflexión

Reflexión → Sobre mí

Sobre mí → Redes

---

# Dashboard futuro

Preparar arquitectura para mostrar posteriormente:

Visitantes totales

Visitantes del día

Visitantes del mes

Lectores activos

Artículos publicados

Total de lecturas

Total de compartidos

Tiempo promedio de lectura

Top artículos

Top fuentes de tráfico

Top países

Top dispositivos

Estos indicadores podrán mostrarse tanto en el panel administrativo como, si se desea, algunos de forma pública (por ejemplo, contador de lectores o visitas).

---

# Analytics

Preparar integración con:

Google Analytics 4

Cloudflare Analytics

Cloudflare Web Analytics

Mantener desacoplada la implementación para poder cambiar de proveedor.

---

# Caché

Aprovechar:

Cloudflare CDN

Cache-Control

ETag

Immutable assets

Invalidación cuando corresponda.

---

# Base de datos

Seleccionar únicamente columnas necesarias.

Evitar consultas repetidas.

Evitar N+1.

Preparar índices cuando el crecimiento lo requiera.

Agrupar métricas cuando existan cientos de reflexiones.

---

# Observabilidad

Registrar:

Errores

Tiempo de respuesta

Consultas lentas

Fallos de Supabase

Fallos de Storage

Fallos de OAuth

Fallos de Share

Errores inesperados del Worker

---

# Calidad visual

No sacrificar experiencia por mejorar métricas.

Siempre priorizar:

Legibilidad

Jerarquía

Espacio en blanco

Consistencia

Velocidad percibida

---

# Feature Budget

Antes de implementar cualquier nueva funcionalidad responder:

¿Hace el producto más útil?

¿Hace el producto más simple?

¿Hace el producto más rápido?

Si la respuesta es no en las tres preguntas, reconsiderar su implementación.

---

# Error Budget

Ante cualquier fallo:

Mostrar contenido antes que errores.

Una métrica puede fallar.

Una imagen puede tardar.

Un contador puede no cargar.

Pero la reflexión debe seguir siendo legible.

La lectura tiene prioridad.

---

# Fuera de alcance

No implementar todavía:

AMP

Microfrontends

Optimización extrema prematura

Compresión personalizada

CDN adicionales

Renderizado complejo

A/B Testing

Heatmaps

Session Recording

No añadir complejidad antes de necesitarla.

---

# Componentes afectados

Toda la aplicación.

Performance, SEO y Analytics son responsabilidades transversales.

---

# Archivos probablemente afectados

astro.config.ts

Cloudflare

Workers

Supabase

Layouts

Pages

Components

Assets

Metadata

Analytics

---

# Checklist

□ Lighthouse ≥95

□ Accessibility 100

□ SEO 100

□ Best Practices 100

□ Core Web Vitals correctos

☑ Sitemap

☑ Robots

☑ RSS

☑ Metadata

☑ Open Graph

☑ JSON-LD

☑ Analytics funcionando con ID de prueba

☑ Eventos instrumentados

☑ Compartidos instrumentados sin falsos éxitos

☑ Responsive validado en superficies instrumentadas

□ Excelente rendimiento

---

# Criterios de aceptación

La Feature estará terminada cuando:

El sitio cargue rápidamente.

Toda página sea indexable.

Las reflexiones compartidas se visualicen correctamente.

Analytics permita tomar decisiones reales.

Existan métricas suficientes para comprender el comportamiento del lector.

La arquitectura permita crecer durante años sin degradar la experiencia.

---

# Principio final

La velocidad no es una optimización.

Es una característica del producto.

El SEO no es una técnica.

Es una forma de ayudar a que las personas adecuadas encuentren una buena reflexión.

La analítica no sirve para presumir números.

Sirve para comprender mejor a los lectores y construir un blog cada vez más útil para ellos.

---

# Estado de implementación

Implementado:

- capa central tipada de Product Analytics, desacoplada de GA4;
- activación opcional con `PUBLIC_GA_MEASUREMENT_ID` y degradación total sin proveedor;
- exclusión de Analytics y `noindex` en Admin/Auth;
- apertura, scroll 25/50/75/100, finalización y tiempo comprometido de lectura;
- eventos de likes, comentarios, compartir y CTA únicamente tras los resultados definidos;
- taxonomía, privacidad, configuración, interpretación y línea base documentadas;
- WebSite, Person y Article JSON-LD; author y fecha Open Graph de artículos;
- canonical, robots, RSS, 404 noindex y sitemaps público/dinámico validados;
- sitemaps sin Admin, Auth ni borradores;
- dimensiones explícitas en imágenes editoriales y preconexión al origen de la imagen social/LCP;
- caché inmutable para assets y no-store para Admin/Auth.

Pendiente externo, sin bloquear la experiencia:

- configurar un Measurement ID real y decidir consentimiento según jurisdicción/configuración final;
- confirmar que Cloudflare Web Analytics está habilitado una sola vez desde el dashboard;
- ejecutar Lighthouse y validar Core Web Vitals sobre el despliegue real;
- obtener datos de campo antes de optimizar las imágenes históricas de Supabase.

La Feature no se marca como completamente cerrada porque esas comprobaciones requieren credenciales y entorno de
producción. No se implementaron contador público, dashboard, Data API, GraphQL Analytics, heatmaps ni grabación de sesión.
