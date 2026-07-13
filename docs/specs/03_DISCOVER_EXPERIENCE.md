# Feature 03 — Discover Experience

Versión: 1.0

Estado: Completada

Fecha de cierre: 2026-07-13

Prioridad: 🔴 Alta

---

# Objetivo

Convertir la biblioteca de reflexiones en una experiencia de descubrimiento que invite al usuario a seguir leyendo una reflexión tras otra.

La página /reflexiones no debe sentirse como un listado de artículos.

Debe sentirse como una biblioteca editorial cuidadosamente curada.

El visitante debe querer permanecer varios minutos explorando.

---

# Problema actual

Actualmente las reflexiones pueden visualizarse correctamente, pero la experiencia de descubrimiento todavía es limitada.

Problemas detectados:

• La navegación entre reflexiones no genera curiosidad.

• El usuario no percibe una continuidad natural.

• No existe una jerarquía editorial clara.

• El listado se siente demasiado funcional.

• No existen estados vacíos elegantes.

• El usuario no tiene sensación de progreso al explorar.

---

# Objetivo del usuario

El usuario quiere:

Encontrar rápidamente una reflexión interesante.

Explorar sin sentirse perdido.

Descubrir contenido relacionado.

Poder volver más adelante.

Sentir que siempre existe algo nuevo por leer.

---

# Objetivos UX

La experiencia debe transmitir:

calma

curiosidad

orden

claridad

fluidez

profundidad

Nunca debe sentirse:

como un archivo

como una tabla

como un blog antiguo

---

# Objetivos UI

Gran protagonismo para las imágenes.

Excelente jerarquía visual.

Espacios amplios.

Tarjetas consistentes.

Excelente ritmo vertical.

Mucho aire.

Nada debe sentirse saturado.

---

# Hero de la biblioteca

Mostrar un encabezado editorial.

Ejemplo conceptual:

Reflexiones

Un espacio para detenerse unos minutos,
pensar con calma y seguir creciendo.

No utilizar un Hero gigante.

Debe introducir la experiencia y desaparecer rápidamente para dar protagonismo al contenido.

---

# Grid de reflexiones

Mostrar todas las reflexiones publicadas.

Cada tarjeta debe contener:

Imagen.

Fecha.

Tiempo de lectura.

Título.

Frase destacada.

Likes.

Comentarios.

Acción compartir.

Botón:

Leer reflexión.

Toda la tarjeta debe ser clickeable.

---

# Orden

Mostrar primero las más recientes.

Nunca mostrar borradores.

Nunca mostrar publicaciones futuras.

---

# Compartir

Mantener exactamente el mismo sistema implementado en:

Landing.

Reading Experience.

No crear una tercera versión.

Debe reutilizarse el mismo componente.

---

# Estados vacíos

Si todavía no existen reflexiones:

Mostrar un estado elegante.

Ejemplo conceptual:

"Nuevas reflexiones están en camino."

No mostrar páginas vacías.

---

# Navegación

Permitir volver fácilmente a:

Inicio.

Última reflexión.

Sobre Daniel.

No obligar al usuario a usar el botón atrás del navegador.

---

# Continuidad

Cada tarjeta debe invitar a continuar leyendo.

No solamente listar contenido.

La biblioteca debe sentirse como capítulos de un mismo libro.

---

# Responsive

Desktop.

Laptop.

Tablet.

Móvil.

La experiencia debe mantenerse consistente.

No ocultar información importante.

---

# Accesibilidad

Contraste AA.

Focus visible.

Navegación por teclado.

Texto alternativo.

Orden lógico del DOM.

---

# SEO

Mantener:

Title.

Description.

Canonical.

Open Graph.

Twitter Cards.

Structured Data cuando aporte valor.

---

# Rendimiento

Lazy loading de imágenes.

No cargar imágenes fuera del viewport.

Mantener excelente Lighthouse.

No agregar librerías innecesarias.

---

# Fuera de alcance

No implementar todavía:

Buscador.

Categorías.

Etiquetas.

Favoritos.

Colecciones.

Filtros.

Eso pertenece a futuras Features.

La arquitectura debe quedar preparada para soportarlas sin reescribir componentes.

---

# Componentes afectados

ReflectionsPage

ReflectionCard

ShareActions

Navigation

Header

Footer

---

# Archivos probablemente afectados

src/pages/reflexiones/index.astro

src/components/reflections/

src/components/social/

src/components/navigation/

---

# Checklist

✅ Hero editorial

✅ Grid consistente

✅ Compartir reutilizado

✅ Likes

✅ Comentarios

✅ Responsive

✅ Estados vacíos

✅ Navegación

✅ SEO

✅ Rendimiento

---

# Implementación cerrada

La biblioteca obtiene todas las reflexiones vigentes desde el servicio canónico, ordenadas por fecha descendente y sin
mostrar borradores ni publicaciones futuras.

Las tarjetas reutilizan `ReflectionCard` y el sistema compartido de Landing y Reading Experience. La superficie completa
es clicable solo en Discover mediante una capacidad optativa que mantiene separados los enlaces y botones accesibles.

Likes y comentarios aprobados se solicitan mediante sus servicios existentes. Si las métricas fallan, la biblioteca
mantiene disponible el contenido y oculta únicamente esa información secundaria.

El encabezado editorial, la navegación contextual, el contador, el grid y los estados de error o catálogo vacío se
renderizan en SSR. No se incorporó JavaScript de interfaz adicional ni dependencias.

La estructura acepta una colección de reflexiones independiente de su origen de navegación; buscador, filtros o
paginación podrán sustituir esa colección en una Feature futura sin modificar `ReflectionCard`.

---

# Criterios de aceptación

La Feature se considerará terminada cuando:

El usuario pueda descubrir nuevas reflexiones de forma natural.

La biblioteca transmita calma y orden.

Las tarjetas mantengan consistencia visual con la Home.

El usuario tenga varias formas naturales de continuar leyendo.

Toda la experiencia se perciba editorial y no como un simple listado.

---

# Inspiración

Medium

Read.cv

Apple Books

Substack

No copiar interfaces.

Inspirarse únicamente en:

jerarquía

ritmo

minimalismo

claridad

calidad editorial

---

# Principio final

Una buena biblioteca no muestra simplemente contenido.

Invita silenciosamente a descubrir la siguiente idea.
