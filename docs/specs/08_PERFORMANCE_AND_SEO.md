# Performance & SEO Experience

Versión: 1.0

Estado: Pendiente

Prioridad: 🔴 Crítica

---

# Objetivo

Construir un sitio extremadamente rápido, accesible y optimizado para buscadores.

El rendimiento forma parte de la experiencia del usuario.

Un sitio lento nunca ofrecerá una experiencia premium.

El SEO no existe únicamente para conseguir visitas.

Existe para ayudar a que más personas encuentren contenido que realmente pueda aportarles valor.

---

# Filosofía

Cada milisegundo importa.

Cada kilobyte innecesario debe cuestionarse.

Cada dependencia debe justificarse.

Cada consulta debe aportar valor.

La velocidad forma parte del diseño.

---

# Objetivos

Lograr una experiencia excelente en:

Velocidad

Accesibilidad

SEO

Core Web Vitals

Mantenibilidad

Escalabilidad

---

# Objetivos de rendimiento

Tiempo de carga inicial muy bajo.

Interacciones fluidas.

Transiciones rápidas.

Excelente experiencia incluso en conexiones lentas.

Optimización progresiva.

---

# Lighthouse

Objetivo mínimo

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

Objetivos

Largest Contentful Paint (LCP)

< 2.5 s

Interaction to Next Paint (INP)

< 200 ms

Cumulative Layout Shift (CLS)

< 0.1

---

# Optimización de imágenes

Todas las imágenes deben:

Estar comprimidas.

Tener dimensiones adecuadas.

Mantener buena calidad.

Usar lazy loading cuando corresponda.

Mostrar placeholder elegante.

---

# JavaScript

Enviar únicamente el JavaScript necesario.

Evitar hidratar componentes que pueden renderizarse en servidor.

Preferir SSR cuando sea posible.

Evitar librerías pesadas.

---

# CSS

Eliminar CSS no utilizado.

Mantener estilos organizados.

Evitar reglas duplicadas.

---

# Tipografías

Cargar únicamente las necesarias.

Optimizar carga.

Evitar bloqueos del render.

---

# SEO

Toda página debe incluir:

Title

Meta Description

Canonical

Open Graph

Twitter Card

Favicon

Robots

Sitemap

RSS

---

# Reflexiones

Cada reflexión debe tener:

Slug amigable.

Metadata única.

Descripción única.

Imagen Open Graph.

Tiempo de lectura.

Fecha.

Autor.

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

cortas

legibles

estables

Evitar parámetros innecesarios.

---

# Indexación

Indexar:

Home

/reflexiones

/reflexiones/[slug]

Excluir:

Admin

Auth

Páginas internas.

---

# Accesibilidad

Contraste AA.

Texto alternativo.

Roles ARIA.

Navegación por teclado.

Focus visible.

Labels correctos.

---

# Responsive

Optimizar para:

Desktop

Tablet

Mobile

No esconder funcionalidad importante.

---

# Seguridad

Cabeceras de seguridad.

HTTPS obligatorio.

OAuth seguro.

RLS.

No exponer claves privadas.

---

# Analytics

Implementar:

Google Analytics.

Cloudflare Analytics (cuando aporte valor).

No rastrear información sensible.

Medir únicamente datos útiles para mejorar el producto.

---

# Métricas de producto

Priorizar:

Tiempo de lectura.

Usuarios recurrentes.

Reflexiones terminadas.

Compartidos.

Comentarios de calidad.

No obsesionarse con:

Page Views.

Clicks.

Bounce Rate aislado.

---

# Caché

Aprovechar:

Cloudflare CDN.

Cache-Control.

ETag cuando corresponda.

Preparar para futuras optimizaciones.

---

# Base de datos

Evitar consultas repetidas.

Seleccionar únicamente las columnas necesarias.

Preparar índices cuando el crecimiento lo requiera.

---

# Rendimiento del frontend

Reducir re-renderizados.

Lazy Loading cuando aporte valor.

Code Splitting.

Evitar dependencias innecesarias.

---

# Rendimiento del backend

Consultas optimizadas.

Storage eficiente.

No duplicar peticiones.

Manejo adecuado de errores.

---

# Fuera de alcance

No implementar:

AMP

Microfrontends

CDN personalizados

Optimización extrema prematura

Compresión personalizada

No optimizar antes de medir.

---

# Componentes afectados

Toda la aplicación.

Performance es una responsabilidad transversal.

---

# Archivos probablemente afectados

astro.config.ts

Cloudflare

Supabase

Layouts

Pages

Components

Assets

---

# Checklist

□ Lighthouse 95+

□ SEO 100

□ Accessibility 100

□ Best Practices 100

□ Core Web Vitals correctos

□ Sitemap

□ RSS

□ Robots

□ Metadata

□ Open Graph

□ Responsive

□ Excelente rendimiento

---

# Criterios de aceptación

La Feature estará terminada cuando:

El sitio cargue rápidamente.

La experiencia sea fluida.

Las páginas sean fácilmente indexables.

Las reflexiones compartidas se vean correctamente en redes sociales.

La arquitectura permita seguir creciendo sin degradar el rendimiento.

---

# Inspiración

Google Web.dev

Vercel

Astro

Cloudflare

No perseguir puntuaciones únicamente.

Perseguir una experiencia excelente.

---

# Principio final

La velocidad no es una optimización.

Es una característica del producto.

Cada mejora de rendimiento es una mejora directa en la experiencia del lector.

La mejor tecnología es aquella que el usuario nunca nota.