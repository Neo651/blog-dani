# Feature 06 — Admin Experience

Versión: 2.1
Estado: 🟡 Implementada — pendiente QA autenticado
Fecha de implementación: 13 de julio de 2026
Prioridad: Alta

---

# Objetivo

Transformar el panel actual en una herramienta editorial clara, amigable y agradable de usar.

El Admin no debe sentirse como un formulario técnico conectado a una base de datos.

Debe ayudar a Daniel a:

- organizar una idea;
- diferenciar la frase de portada del título del artículo;
- subir y revisar una imagen;
- escribir el contenido;
- comprobar cómo se verá;
- guardar un borrador;
- publicar con seguridad.

La experiencia debe sentirse:

- editorial;
- compacta;
- guiada;
- moderna;
- profesional;
- comprensible para una persona no técnica.

---

# Problemas actuales

El formulario funciona, pero presenta varios problemas de experiencia:

- Los campos son demasiado grandes y todos parecen tener la misma importancia.
- No existe una jerarquía clara entre información, contenido y publicación.
- La palabra “Slug” es técnica y poco amigable.
- Las etiquetas no explican qué debe escribirse.
- La imagen seleccionada no tiene una previsualización suficientemente clara.
- La frase de portada y el título del artículo pueden repetirse.
- El nombre de Daniel puede aparecer dos veces dentro de la portada.
- No existe una vista previa sencilla antes de publicar.
- El flujo se siente como un CRUD y no como una herramienta para escribir.

---

# Modelo editorial

La publicación debe diferenciar claramente estos elementos:

## Título del artículo

Es el encabezado editorial que introduce y desarrolla el contenido.

Ejemplo:

> Cómo dejar de vivir desde las heridas

Debe utilizarse como:

- título de la página individual;
- título SEO;
- título de las tarjetas;
- título para compartir.

## Frase destacada de la portada

Es una idea breve y memorable que se muestra sobre la imagen.

Ejemplo:

> No eres lo que te pasó. Eres lo que decides construir con ello.

Debe utilizarse como:

- frase de la reflexión destacada;
- cita visual sobre la imagen;
- extracto para compartir cuando corresponda.

## Regla de no repetición

El título del artículo y la frase destacada no deben ser exactamente iguales.

Si coinciden después de ignorar mayúsculas, espacios y signos:

- mostrar una advertencia clara;
- permitir guardar como borrador;
- impedir publicar hasta diferenciarlos.

No modificar el esquema si los campos `title` y `quote` ya existen.

---

# Autor y firma de la portada

Evitar que “Daniel Montesinos” aparezca dos veces dentro de la misma imagen o Hero.

Regla visual:

- No mostrar un rótulo superior adicional con “Daniel Montesinos”.
- Mostrar una sola atribución debajo de la frase:
  - `— Daniel Montesinos`, cuando sea una frase propia;
  - el autor real, cuando corresponda a otra persona.
- La marca Daniel Montesinos ya está presente en el header del sitio.

No insertar texto dentro del archivo de imagen.

La imagen principal debe subirse limpia, sin título, frase, firma, fecha ni logotipo incrustados. Todo ese contenido debe renderizarse mediante HTML.

---

# Organización del formulario

Agrupar el editor en bloques claros.

## 1. Idea principal

Campos:

### Título del artículo

Texto de ayuda:

> Escribe un título que invite a descubrir la idea y que no repita exactamente la frase de portada.

Placeholder:

> Ejemplo: Cómo dejar de vivir desde las heridas

### Frase destacada de la portada

Texto de ayuda:

> Es la frase breve que aparecerá sobre la imagen y que las personas recordarán o compartirán.

Placeholder:

> Ejemplo: No eres lo que te pasó. Eres lo que decides construir con ello.

Mostrar contador de caracteres.

Recomendación visual: hasta 160 caracteres.

### Autor de la cita

Etiqueta:

> Autor de la cita (opcional)

Texto de ayuda:

> Déjalo vacío si la frase es tuya. En ese caso se utilizará Daniel Montesinos.

No obligar a escribir el nombre de Daniel en cada publicación.

---

## 2. Imagen principal

Cambiar la etiqueta “Imagen” por:

> Imagen principal

Texto de ayuda:

> Usa una imagen horizontal limpia, sin texto, firma ni logotipos. El sitio colocará la frase automáticamente.

Después de seleccionar un archivo, mostrar inmediatamente:

- miniatura;
- nombre del archivo;
- tamaño;
- opción “Cambiar imagen”;
- opción “Eliminar” cuando corresponda.

La previsualización debe respetar aproximadamente la proporción utilizada en el sitio.

No subir el archivo definitivamente solo por seleccionarlo si el flujo actual permite esperar hasta guardar.

---

## 3. Contenido

El cuerpo debe ser el espacio de mayor tamaño.

Etiqueta:

> Desarrollo de la reflexión

Texto de ayuda:

> Escribe con calma. Utiliza párrafos breves y separa cada idea con una línea en blanco.

No convertir automáticamente cada oración en un párrafo.

No reescribir el contenido del autor.

Mantener el cálculo automático del tiempo de lectura.

---

## 4. Publicación

Campos:

### Estado

Opciones comprensibles:

- Borrador
- Publicada

### Publicar el

Reemplaza “Fecha de publicación”.

Texto de ayuda:

> Puedes publicar ahora o programar una fecha futura.

### URL del artículo

Reemplaza visualmente la palabra “Slug”.

Debe mostrarse dentro de una sección “Opciones avanzadas”, cerrada inicialmente.

Texto de ayuda:

> Se genera automáticamente a partir del título. Normalmente no necesitas modificarla.

Comportamiento:

- generar automáticamente mientras se crea una publicación nueva;
- conservar la URL de una publicación existente aunque se cambie el título;
- permitir edición manual solo desde opciones avanzadas;
- validar formato y posibles duplicados;
- mostrar una vista legible de la URL final.

El código puede seguir utilizando internamente la propiedad `slug`.

---

# Jerarquía y dimensiones

El formulario actual no debe utilizar campos altos para entradas de una sola línea.

Aplicar aproximadamente:

- inputs de una línea: entre 44 y 52 px;
- textareas breves: entre 96 y 140 px;
- editor de contenido: altura amplia y adaptable;
- separación clara entre bloques;
- ancho de lectura razonable;
- labels próximas a sus campos;
- textos de ayuda discretos.

No convertir cada campo en una tarjeta gigante.

No utilizar espacio vacío excesivo.

---

# Acciones principales

Mantener visibles y claramente jerarquizadas:

1. Guardar borrador
2. Vista previa
3. Publicar o actualizar

En escritorio pueden estar en una barra de acciones sticky.

En móvil deben permanecer accesibles sin tapar el formulario.

Reglas:

- “Publicar” es la acción principal.
- “Guardar borrador” es secundaria.
- “Vista previa” no debe publicar ni cambiar el estado.
- Deshabilitar acciones durante una operación para evitar envíos duplicados.
- Mostrar confirmación clara al guardar o publicar.

---

# Vista previa antes de publicar

Implementar una vista previa editorial sencilla, sin convertirla en un constructor visual complejo.

Debe poder abrirse sin publicar la reflexión.

Puede utilizar:

- panel lateral;
- modal amplio;
- o una ruta de preview segura si la arquitectura actual lo facilita.

Debe mostrar con los valores actuales del formulario:

- imagen principal;
- fecha;
- frase destacada;
- única atribución del autor;
- título del artículo;
- tiempo estimado de lectura;
- primeros párrafos o cuerpo completo si es sencillo;
- apariencia aproximada de escritorio y móvil.

Requisitos:

- no exigir guardar primero cuando técnicamente sea posible;
- no escribir datos temporales en Supabase;
- no crear publicaciones falsas;
- cerrar con Escape;
- devolver el foco al botón;
- respetar `prefers-reduced-motion`;
- ser suficientemente fiel para detectar repetición, recortes y problemas de texto.

Si una vista previa exacta del sitio requiere una reconstrucción compleja, implementar una preview editorial representativa dentro del Admin. No posponer toda la funcionalidad por buscar una reproducción perfecta.

---

# Flujo recomendado

1. Escribir el título del artículo.
2. Escribir la frase destacada.
3. Seleccionar la imagen.
4. Escribir el desarrollo.
5. Guardar borrador.
6. Abrir vista previa.
7. Corregir.
8. Publicar.

El orden visual del formulario debe seguir este flujo.

---

# Accesibilidad

Validar:

- labels asociados correctamente;
- textos de ayuda mediante `aria-describedby`;
- mensajes de error claros;
- navegación completa por teclado;
- focus visible;
- errores anunciados mediante `aria-live`;
- targets táctiles de al menos 44 × 44 px;
- modal o panel de preview con gestión correcta del foco;
- contraste AA.

---

# No implementar todavía

Quedan fuera de alcance:

- editor tipo Notion;
- edición drag and drop;
- autosave continuo;
- historial de versiones;
- colaboración;
- puntuación SEO;
- generación de textos con IA;
- generación automática de imágenes;
- previews específicas para cada red social;
- múltiples imágenes por artículo;
- analítica dentro del editor.

---

# No modificar

No cambiar:

- Supabase, salvo que exista un bloqueo real y se documente antes;
- RLS;
- OAuth;
- likes;
- comentarios;
- compartir;
- Landing;
- Reading Experience;
- Discover Experience;
- Personal Brand;
- Navigation Experience;
- Cloudflare;
- arquitectura SSR.

Priorizar la reutilización de los campos existentes:

- `title`;
- `slug`;
- `published_at`;
- `image_url`;
- `quote`;
- `quote_author`;
- `body`;
- `reading_minutes`;
- `is_published`.

---

# Criterios de aceptación

La Feature se considera completada cuando:

- El formulario tiene jerarquía editorial clara.
- Los inputs de una línea ya no son sobredimensionados.
- “Slug” se presenta al usuario como “URL del artículo”.
- La URL se genera automáticamente.
- Título y frase tienen explicaciones y ejemplos.
- Se advierte y bloquea la publicación cuando título y frase son idénticos.
- El nombre de Daniel no se duplica en la portada.
- La imagen seleccionada muestra una miniatura.
- Existe una vista previa antes de publicar.
- Guardar borrador y publicar siguen funcionando.
- La edición de una publicación existente conserva sus datos.
- Desktop y móvil están validados.
- El Admin continúa protegido.
- No se rompe ninguna Feature pública.

---

# Principio final

El Admin no debe pedirle al autor que piense como desarrollador.

Debe ayudarlo a pensar, escribir, revisar y publicar como autor.

---

# Validación de implementación

- [x] Jerarquía Idea principal, Imagen, Contenido y Publicación.
- [x] Título, frase destacada y autor de cita diferenciados.
- [x] Inputs de una línea con 48 px de altura.
- [x] URL automática y edición manual dentro de Opciones avanzadas.
- [x] Conservación de la URL al cargar una publicación existente.
- [x] Advertencia editorial y bloqueo de publicación para título y frase equivalentes.
- [x] La misma equivalencia continúa permitida por el flujo Guardar borrador.
- [x] Miniatura local, cambio y eliminación de imagen antes de guardar.
- [x] Vista previa local sin escrituras ni registros temporales en Supabase.
- [x] Preview con imagen, frase, una atribución, título, fecha, tiempo y contenido.
- [x] Cierre con Escape y devolución de foco.
- [x] Acciones protegidas contra envíos concurrentes.
- [x] Validación visual en escritorio, tablet, móvil y 320 px.
- [x] Navegación por teclado, foco visible y ausencia de overflow horizontal.
- [x] Astro Check, ESLint, build y formato de los archivos de la Feature.
- [ ] Crear, editar y publicar contra Supabase con una sesión administradora real.
- [ ] Ejecutar `npm run check` global sin la incidencia previa de formato en `wrangler.jsonc`.

La Feature no se marca como completada porque el repositorio no incluye credenciales administrativas de prueba. La
protección del panel y RLS se conservaron deliberadamente, por lo que la creación, edición y publicación reales requieren
una sesión administradora. Además, el check global mantiene una incidencia de Prettier ajena a esta Feature en
`wrangler.jsonc`; no se modifica infraestructura para ocultarla.
