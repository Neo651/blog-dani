# Discover Experience

Versión: 1.0

Estado: Pendiente

Prioridad: 🟠 Alta

---

# Objetivo

Facilitar que el lector descubra nuevas reflexiones de forma natural, sin sentirse perdido ni abrumado.

La exploración debe sentirse intuitiva, agradable y fluida.

El objetivo no es generar más clics.

El objetivo es ayudar al lector a encontrar la siguiente reflexión que más valor pueda aportarle.

---

# Problema actual

Actualmente el usuario puede leer una reflexión, pero la exploración del contenido es limitada.

Problemas detectados:

• La Home muestra pocas oportunidades para descubrir contenido.

• No existe una biblioteca dedicada.

• No existe buscador.

• No existe orden por popularidad.

• No existen recomendaciones inteligentes.

• El usuario puede abandonar el sitio después de una sola lectura.

---

# Objetivo del usuario

El usuario quiere:

Encontrar fácilmente otra reflexión.

Buscar un tema específico.

Explorar el contenido sin esfuerzo.

Sentir que siempre hay algo interesante por descubrir.

---

# Filosofía

La exploración debe parecer una conversación.

No un catálogo.

No un buscador técnico.

No un portal de noticias.

Debe invitar a seguir leyendo con calma.

---

# User Journey

Home

↓

Reflexión destacada

↓

Reflexiones recientes

↓

Ver todas las reflexiones

↓

Buscar

↓

Explorar

↓

Abrir otra reflexión

↓

Continuar leyendo

---

# Biblioteca

Crear una página dedicada:

/reflexiones

Esta será la biblioteca principal del sitio.

No reemplaza la Home.

La Home inspira.

La biblioteca organiza.

---

# Buscador

Agregar un buscador simple.

Debe buscar por:

Título

Frase

Contenido

(No implementar IA todavía.)

Debe responder rápidamente.

---

# Orden

Permitir ordenar por:

Más recientes

Más populares

Más comentadas

Más leídas (cuando exista esa métrica)

---

# Tarjetas

Cada reflexión mostrará:

Imagen

Fecha

Tiempo de lectura

Título

Frase destacada

Likes

Comentarios

Botón:

Leer reflexión

Las tarjetas deben ser limpias y consistentes.

---

# Cargar más

Si existen muchas reflexiones:

Preferir:

"Cargar más"

Antes que una paginación clásica.

El objetivo es mantener una navegación continua.

---

# Recomendaciones

En la Home mostrar:

Las tres reflexiones más recientes.

En la página individual mostrar:

Tres reflexiones relacionadas.

No repetir la reflexión actual.

---

# Vacíos

Si aún existen pocas reflexiones:

Mostrar únicamente las disponibles.

Nunca mostrar tarjetas vacías.

---

# Responsive

La experiencia móvil debe ser igual de sencilla.

El buscador debe seguir siendo cómodo.

Las tarjetas deben reorganizarse automáticamente.

---

# Accesibilidad

Todo el contenido debe ser navegable mediante teclado.

Los filtros deben ser comprensibles para lectores de pantalla.

---

# SEO

La página /reflexiones debe:

Indexarse correctamente.

Tener metadata propia.

Tener canonical.

Mantener excelente rendimiento.

---

# Rendimiento

No cargar todas las reflexiones si no es necesario.

Preparar la arquitectura para:

Paginación.

Infinite Scroll.

Carga incremental.

Sin modificar la experiencia del usuario.

---

# Fuera de alcance

No implementar:

Categorías.

Etiquetas.

IA.

Colecciones.

Favoritos.

Recomendaciones personalizadas.

Todo eso pertenece a futuras versiones.

---

# Componentes afectados

ReflectionPreviewCard

ReflectionGrid

SearchBar

SortSelector

LoadMoreButton

ReflectionList

---

# Archivos probablemente afectados

src/pages/reflexiones/index.astro

src/components/reflections/

src/features/reflections/

---

# Checklist

□ Página /reflexiones

□ Buscador

□ Ordenar

□ Tarjetas

□ Cargar más

□ Responsive

□ SEO

□ Excelente rendimiento

---

# Criterios de aceptación

La Feature estará terminada cuando:

Un usuario pueda descubrir cualquier reflexión en pocos segundos.

La navegación sea intuitiva.

La biblioteca escale correctamente a cientos de reflexiones.

El buscador sea rápido.

La exploración resulte agradable y sin fricción.

---

# Inspiración

Medium

Apple Books

Kindle Library

Read.cv

Notion

No copiar interfaces.

Inspirarse en:

claridad

exploración

minimalismo

velocidad

---

# Principio final

El usuario nunca debe preguntarse:

"¿Qué puedo leer ahora?"

La interfaz debe responder esa pregunta de forma natural antes de que el usuario tenga que hacerla.