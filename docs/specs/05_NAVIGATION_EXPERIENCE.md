# Navigation Experience

Versión: 1.0

Estado: Pendiente

Prioridad: 🔴 Alta

---

# Objetivo

Crear una navegación tan natural que el usuario nunca tenga que preguntarse:

"¿Ahora qué hago?"

Cada transición debe sentirse intuitiva.

Cada página debe invitar naturalmente a la siguiente.

La navegación debe desaparecer para que el contenido sea el protagonista.

---

# Problema actual

Actualmente existen oportunidades para mejorar la navegación.

Problemas detectados:

• El menú ofrece pocas opciones.

• No existe navegación por secciones.

• No hay continuidad natural después de leer.

• La Home no invita suficientemente a explorar.

• Algunas acciones requieren más clics de los necesarios.

---

# Filosofía

La navegación no existe para mostrar páginas.

Existe para acompañar al usuario.

Debe sentirse invisible.

Debe eliminar la necesidad de pensar.

---

# Objetivo del usuario

El usuario quiere:

Llegar rápidamente a lo que busca.

Descubrir nuevas reflexiones.

Conocer al autor.

Seguir leyendo.

Nunca sentirse perdido.

---

# User Journey

Llega al sitio

↓

Comprende el propósito

↓

Lee

↓

Explora

↓

Conoce a Daniel

↓

Conecta mediante redes

↓

Regresa otro día

---

# Principios

Cada página debe responder una única pregunta.

Cada pantalla debe tener un objetivo claro.

Cada botón debe tener un propósito.

Cada clic debe aportar valor.

Eliminar pasos innecesarios.

---

# Menú principal

Debe permanecer extremadamente simple.

Inicio

Reflexiones

Sobre Daniel

Contacto

No agregar más opciones hasta que realmente sean necesarias.

---

# Navegación en Home

Los enlaces deben utilizar scroll suave.

Inicio

↓

Hero

Reflexiones

↓

Últimas reflexiones

Sobre Daniel

↓

About Section

Contacto

↓

Footer

---

# Navegación fuera de Home

Si el usuario está en otra página:

Inicio

volverá a /

Reflexiones

abrirá /reflexiones

Sobre Daniel

volverá a Home y desplazará automáticamente.

Contacto

volverá al Footer.

---

# Header

Debe permanecer visible.

No ocupar demasiado espacio.

Reducir ligeramente su tamaño durante el scroll.

No distraer.

---

# Footer

Debe convertirse en el cierre natural del recorrido.

Debe contener:

Mensaje final.

Redes.

Contacto.

Derechos.

Enlaces legales.

Nunca parecer un footer corporativo.

---

# CTA

Todos los llamados a la acción deben invitar.

Nunca presionar.

Ejemplos:

Comienza a leer

Ver todas las reflexiones

Conóceme

Conectemos

Seguir leyendo

Evitar:

Compra

Regístrate

Oferta

Urgente

---

# Breadcrumbs

No implementarlos todavía.

El sitio es suficientemente pequeño.

Preparar arquitectura para el futuro.

---

# Búsqueda

No pertenece a esta Feature.

Será desarrollada dentro de Content Discovery.

---

# Navegación entre reflexiones

Al finalizar una reflexión:

Mostrar únicamente tres recomendaciones.

No generar listas infinitas.

El objetivo es mantener la calidad.

---

# Estados vacíos

Siempre explicar.

Nunca dejar pantallas vacías.

Si no existen reflexiones:

Invitar a volver pronto.

---

# Responsive

El menú móvil debe ser extremadamente simple.

Evitar menús complejos.

Máximo dos niveles.

---

# Accesibilidad

Todo el menú debe ser navegable mediante teclado.

Focus visible.

Roles ARIA correctos.

---

# Rendimiento

La navegación debe sentirse instantánea.

Evitar animaciones pesadas.

Evitar bloqueos.

---

# Fuera de alcance

No implementar:

Mega menús.

Sidebars.

Menús flotantes complejos.

Navegación por categorías.

Mapa del sitio visual.

---

# Componentes afectados

Header

Navigation

Footer

Hero

ReflectionCards

AboutSection

SocialSection

---

# Archivos probablemente afectados

src/components/layout/

src/components/navigation/

src/components/footer/

src/pages/index.astro

---

# Checklist

□ Menú simplificado

□ Scroll suave

□ Header sticky

□ Footer emocional

□ CTA consistentes

□ Navegación intuitiva

□ Responsive

□ Accesibilidad

□ Excelente rendimiento

---

# Criterios de aceptación

La navegación se considerará terminada cuando:

El usuario nunca se sienta perdido.

Siempre exista un siguiente paso claro.

La navegación requiera el mínimo esfuerzo posible.

La experiencia resulte elegante y natural.

---

# Inspiración

Apple

Notion

Airbnb

Medium

Stripe

No copiar sus interfaces.

Inspirarse en:

claridad

jerarquía

consistencia

fluidez

---

# Principio final

La mejor navegación es aquella que el usuario casi no nota.

Cuando el contenido guía el recorrido y la interfaz desaparece, la navegación ha cumplido su propósito.