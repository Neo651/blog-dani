# DECISIONS.md

# DanielMontesinos.com

Versión: 1.0
Estado: Documento vivo

---

# Objetivo

Este documento registra todas las decisiones importantes del proyecto.

No explica únicamente qué se decidió.

Explica por qué se tomó esa decisión.

Dentro de meses o años será la referencia oficial para comprender la evolución del producto.

Nunca borrar decisiones anteriores.

Si una decisión cambia, registrar una nueva entrada explicando el motivo.

---

# Formato

Cada decisión debe seguir esta estructura.

---

## Fecha

AAAA-MM-DD

## Decisión

Una frase corta.

## Contexto

¿Qué problema intentábamos resolver?

## Alternativas consideradas

Opción A

Ventajas

Desventajas

Opción B

Ventajas

Desventajas

## Decisión final

¿Qué elegimos?

## Justificación

¿Por qué?

## Consecuencias

¿Qué impacto tendrá?

## Estado

Activa

Reemplazada

Descartada

---

# Historial

---

## 2026-07-11

### Decisión

Supabase será la única fuente oficial de contenido.

### Contexto

El proyecto mezclaba contenido Markdown de AstroWind con contenido almacenado en Supabase.

Esto provocaba duplicación, inconsistencias y complejidad innecesaria.

### Alternativas

#### Mantener ambos sistemas

Ventajas

Compatible con AstroWind.

Desventajas

Dos fuentes de verdad.

Mayor mantenimiento.

Mayor probabilidad de errores.

#### Migrar completamente a Supabase

Ventajas

Una sola fuente de contenido.

CMS administrable.

Escalable.

Más simple.

Desventajas

Mayor dependencia de Supabase.

### Decisión final

Migrar completamente a Supabase.

### Justificación

El producto gira alrededor del panel administrador.

Mantener Markdown dejaría de aportar valor.

### Consecuencias

Toda nueva funcionalidad relacionada con contenido deberá desarrollarse sobre Supabase.

### Estado

Activa.

---

## 2026-07-11

### Decisión

Cloudflare Pages será el entorno oficial de despliegue.

### Contexto

Era necesario elegir una plataforma definitiva.

### Alternativas

Vercel

Netlify

Cloudflare Pages

### Decisión

Cloudflare Pages.

### Justificación

Excelente integración con Astro.

Buen rendimiento.

Costo adecuado.

Infraestructura moderna.

### Consecuencias

Las futuras decisiones técnicas deberán ser compatibles con Cloudflare.

### Estado

Activa.

---

## 2026-07-11

### Decisión

Mantener Astro como framework principal.

### Contexto

Existía la posibilidad de migrar a otro framework.

### Alternativas

Next.js

Nuxt

SvelteKit

Astro

### Decisión

Astro.

### Justificación

Excelente rendimiento.

Ideal para contenido.

Excelente SEO.

Muy bajo JavaScript.

### Estado

Activa.

---

## 2026-07-11

### Decisión

La experiencia de lectura tendrá prioridad sobre cualquier otra funcionalidad.

### Contexto

Durante el diseño surgieron muchas ideas nuevas.

Era necesario definir una prioridad permanente.

### Decisión

Toda funcionalidad deberá mejorar la experiencia del lector.

### Justificación

La lectura es el producto.

Todo lo demás existe únicamente para potenciarla.

### Estado

Activa.

---

## 2026-07-11

### Decisión

No construir funcionalidades únicamente porque son populares.

### Contexto

Existen muchas tendencias tecnológicas.

No todas aportan valor.

### Decisión

Cada funcionalidad deberá justificar claramente el beneficio para el lector.

### Estado

Activa.

---

## 2026-07-11

### Decisión

Utilizar componentes pequeños con responsabilidad única.

### Contexto

Los archivos demasiado grandes son difíciles de mantener.

### Decisión

Dividir la interfaz en componentes reutilizables.

### Justificación

Mayor mantenibilidad.

Mayor reutilización.

Mayor facilidad para evolucionar el producto.

### Estado

Activa.

---

# Reglas

Nunca modificar una decisión antigua.

Si cambia una decisión:

Crear una nueva entrada.

Explicar el motivo.

Relacionarla con la decisión anterior.

Nunca perder el historial.

---

# Cómo tomar decisiones nuevas

Antes de decidir algo importante responder:

¿Hace más fácil mantener el proyecto?

¿Hace más fácil leer?

¿Hace más fácil evolucionar?

¿Reduce complejidad?

¿Respeta PROJECT_MANIFEST?

Si alguna respuesta es negativa, reconsiderar la decisión.

---

# Qué debe registrarse

Registrar únicamente decisiones importantes.

Ejemplos:

Cambio de arquitectura.

Cambio de proveedor.

Nuevo sistema de autenticación.

Nuevo CMS.

Nuevo framework.

Cambios importantes de UX.

Cambio de estrategia de producto.

No registrar:

Cambios pequeños de CSS.

Corrección de errores.

Refactorizaciones menores.

Actualizaciones de dependencias.

---

# Principio final

La memoria del proyecto es tan importante como el código.

Las decisiones documentadas evitan repetir errores, facilitan incorporar nuevos desarrolladores y permiten comprender la evolución del producto incluso años después.

Un proyecto profesional no solo conserva su código.

También conserva el razonamiento detrás de ese código.