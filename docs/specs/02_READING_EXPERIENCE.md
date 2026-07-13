# Reading Experience

Versión: 1.0

Estado: Completada

Fecha de cierre: 2026-07-12

Prioridad: 🔴 Muy Alta

---

# Objetivo

Crear la mejor experiencia de lectura posible.

Cuando una persona abra una reflexión debe olvidarse de la interfaz.

La lectura debe sentirse como leer un libro moderno.

El contenido siempre será el protagonista.

---

# Problema actual

Actualmente la lectura funciona correctamente pero aún puede mejorar.

Problemas detectados:

• El contenido todavía parece un artículo web.

• El final de la reflexión termina demasiado abruptamente.

• No existe continuidad natural hacia otras reflexiones.

• Falta generar conexión emocional durante la lectura.

• No existe suficiente incentivo para permanecer en el sitio.

---

# Objetivo del usuario

El usuario quiere:

Leer cómodamente.

Reflexionar.

No distraerse.

Encontrar fácilmente qué leer después.

---

# Objetivos UX

La lectura debe transmitir:

calma

claridad

profundidad

concentración

comodidad

Debe desaparecer cualquier elemento que distraiga.

---

# Objetivos UI

Mucho espacio.

Excelente contraste.

Tipografía cómoda.

Párrafos cortos.

Imágenes elegantes.

Jerarquía visual impecable.

---

# Flujo esperado

Entrar a una reflexión

↓

Leer

↓

Dar Like

↓

Leer comentarios

↓

Descubrir otras reflexiones

↓

Seguir leyendo

---

# Cabecera

Debe contener únicamente:

Imagen

Título

Fecha

Tiempo de lectura

Autor

Nada más.

No agregar botones innecesarios.

---

# Cuerpo

Debe ocupar el protagonismo absoluto.

Reglas:

• ancho máximo cómodo

• excelente interlineado

• márgenes amplios

• imágenes optimizadas

• evitar bloques enormes de texto

---

# Tiempo de lectura

Siempre automático.

Debe mostrarse cerca del título.

Nunca pedirlo manualmente.

---

# Autor

Siempre:

Daniel Montesinos

No mostrar si en el futuro existen autores invitados hasta que esa funcionalidad sea implementada.

---

# Likes

Ubicación:

Al finalizar la reflexión.

Formato recomendado:

❤️ 152 personas conectaron con esta reflexión.

No destacar el número.

Destacar la conexión.

---

# Compartir

Agregar botones discretos.

No invasivos.

Preparar soporte para:

WhatsApp

LinkedIn

Facebook

X

Copiar enlace

Implementación cerrada:

• La acción permanece inmediatamente después del like y antes de la conversación.

• En dispositivos táctiles compatibles se utiliza Web Share API con título, frase, autor y URL canónica separados.

• En escritorio y navegadores sin Web Share se ofrece un popover con todos los destinos previstos.

• Copiar enlace comunica éxito o error mediante una región `aria-live`.

• Escape, clic exterior, retorno de foco, navegación por teclado y posicionamiento dentro del viewport están validados.

• El patrón reutiliza el mismo componente y utilidad de la Home; la experiencia de lectura no duplica lógica social.

---

# Comentarios

Mostrar únicamente comentarios aprobados.

Encabezado:

¿Qué reflexión te dejó este texto?

Objetivo:

Generar conversación de calidad.

No cantidad.

---

# Escribir comentario

El formulario debe ser simple.

Si el usuario no inició sesión:

Invitar a iniciar con Google.

Una vez autenticado:

Poder comentar sin abandonar la página.

---

# Reflexiones relacionadas

Al terminar la lectura mostrar:

Quizá esta reflexión también sea para ti.

Mostrar tres recomendaciones.

No mostrar artículos aleatorios.

Priorizar:

Más recientes.

Más relacionadas.

Más leídas (en el futuro).

---

# Navegación

Permitir:

Volver al inicio.

Ir a todas las reflexiones.

Continuar leyendo.

Sin confundir al usuario.

---

# Responsive

La experiencia móvil debe sentirse igual de cómoda.

No reducir legibilidad.

No ocultar contenido importante.

---

# Accesibilidad

Contraste AA.

Navegación por teclado.

Texto alternativo.

Focus visible.

---

# SEO

Cada reflexión debe tener:

Title

Description

Canonical

Open Graph

Twitter Card

Structured Data cuando aporte valor.

---

# Rendimiento

Optimizar imágenes.

Reducir JavaScript.

Lazy loading.

Excelente Lighthouse.

---

# Fuera de alcance

No implementar:

Favoritos.

Audio.

Podcast.

Newsletter.

Colecciones.

Eso pertenece a futuras Features.

---

# Componentes afectados

ReflectionPage

CommentsSection

LikeButton

RelatedReflections

ShareButtons

ReadingHeader

ReadingFooter

---

# Archivos probablemente afectados

src/pages/reflexiones/[slug].astro

src/components/reflections/

src/components/comments/

src/components/social/

---

# Checklist

✅ Cabecera limpia

✅ Tiempo de lectura automático

✅ Autor

✅ Mejor tipografía

✅ Mejor espaciado

✅ Likes humanizados

✅ Compartir

✅ Comentarios

✅ Reflexiones relacionadas

✅ Responsive

✅ SEO

✅ Rendimiento

---

# Criterios de aceptación

La experiencia será considerada terminada cuando:

El usuario pueda leer cómodamente durante varios minutos.

El contenido sea el protagonista absoluto.

Exista una transición natural hacia otra reflexión.

El final invite a seguir leyendo.

No existan distracciones innecesarias.

---

# Inspiración

Medium

Kindle

Apple Books

Read.cv

No copiar interfaces.

Inspirarse en:

legibilidad

minimalismo

fluidez

profundidad

---

# Principio final

La mejor experiencia de lectura es aquella donde el lector deja de notar la tecnología y únicamente permanece la reflexión.
