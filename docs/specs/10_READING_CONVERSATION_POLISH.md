# Feature 10 — Reading Conversation Polish

Versión: 1.0  
Estado: Implementada; cierre pendiente de validación E2E autenticada  
Prioridad: 🔴 Alta

---

# Objetivo

Transformar el final de cada reflexión en el inicio natural de una conversación.

Actualmente el sistema de comentarios funciona correctamente desde el punto de vista técnico, pero la transición entre terminar de leer y participar todavía puede sentirse fría, distante o desconectada.

Esta Feature no busca añadir nuevas funcionalidades.

Busca reducir la fricción emocional para que comentar resulte tan natural como terminar de leer una buena reflexión.

El lector nunca debe sentir que salió del artículo para entrar a otra pantalla.

Debe percibir que la conversación forma parte de la misma experiencia editorial.

---

# Filosofía de esta Feature

Todo el sistema de comentarios ya existe.

No se pretende crear una comunidad nueva.

No se pretende implementar funciones sociales adicionales.

No se pretende aumentar artificialmente el número de comentarios.

El objetivo es construir una conversación de calidad.

Cada comentario debe sentirse como la continuación de una reflexión, no como una publicación independiente.

El lector debe percibir que:

- la reflexión terminó;
- algo quedó resonando;
- existe un espacio natural para expresarlo.

La conversación debe comenzar donde termina el artículo.

---

# Problema actual

Al finalizar una reflexión el usuario encuentra:

- Like
- Compartir
- Separación considerable
- Encabezado nuevo
- Botón de Google
- Comentarios

Todo funciona.

Sin embargo pueden aparecer estas sensaciones:

- parece otra pantalla;
- parece otra sección independiente;
- no queda claro que realmente podrá comentar;
- el botón de Google domina toda la experiencia;
- existe demasiado espacio vacío;
- el estado vacío resulta frío;
- el formulario no invita a escribir.

El recorrido emocional pierde continuidad.

---

# Visión

Queremos que el lector piense:

> "Quiero decir algo."

Y no:

> "Ah... aquí hay un sistema de comentarios."

La diferencia parece pequeña.

Pero psicológicamente es enorme.

---

# Principio UX

El comentario no debe sentirse como una funcionalidad.

Debe sentirse como la continuación natural del artículo.

La secuencia correcta es:

```text
Terminé de leer
↓
Algo resonó conmigo
↓
Quiero expresarlo
↓
Aquí puedo hacerlo
↓
Inicio sesión únicamente para publicarlo
```

No debe sentirse así:

```text
Terminé de leer
↓
Cambió la pantalla
↓
Hay un botón de Google
↓
No entiendo todavía dónde escribir
```

---

# Objetivos UX

Esta Feature debe lograr que:

- la conversación parezca parte del artículo;
- disminuya la fricción para comentar;
- el login sea un medio, no el protagonista;
- el usuario comprenda inmediatamente qué ocurrirá después;
- la experiencia mantenga un tono humano y editorial;
- la sección resulte limpia, tranquila y cercana.

---

# Alcance

Esta Feature puede modificar exclusivamente:

- composición visual de la conversación;
- jerarquía de elementos;
- espaciado;
- encabezados;
- textos de invitación;
- presentación del login;
- estado vacío;
- formulario;
- apariencia del textarea;
- responsive;
- accesibilidad;
- pequeños detalles visuales.

Puede reutilizar:

- CommentsSection
- formulario existente
- autenticación actual
- CTA de Google
- mensajes de estado
- componentes compartidos
- estilos existentes

No debe duplicar componentes.

No debe crear una segunda implementación del sistema de comentarios.

---

# Fuera de alcance

No implementar:

- comentarios anónimos;
- respuestas anidadas;
- likes en comentarios;
- perfiles públicos;
- seguidores;
- avatares nuevos;
- notificaciones;
- menciones;
- mensajes privados;
- chat;
- gamificación;
- insignias;
- rankings;
- sistema de reputación;
- IA para comentarios;
- nuevo proveedor OAuth;
- cambios en Supabase;
- cambios en RLS;
- cambios en moderación;
- cambios en Admin.

---

# Continuidad editorial

El final del artículo y el inicio de la conversación deben sentirse como un mismo bloque editorial.

Reducir la distancia entre:

Último párrafo

↓

Like

↓

Compartir

↓

Conversación

Debe existir una pausa.

Pero nunca una ruptura.

Evitar:

- grandes márgenes;
- grandes cajas vacías;
- fondos diferentes;
- cambios bruscos de color;
- divisores pesados;
- sensación de "otra página".

La conversación debe sentirse todavía dentro del mismo artículo.

---

# Encabezado de conversación

Mantener un eyebrow discreto.

Ejemplo:

LA CONVERSACIÓN CONTINÚA

Título:

# ¿Qué idea se quedó contigo?

Texto secundario:

Comparte una reflexión o una pregunta.

No utilizar más de una línea introductoria.

Eliminar textos largos antes del formulario.

La invitación debe ser breve.

Humana.

Editorial.

---

# Tono

La conversación debe sentirse:

- íntima;
- tranquila;
- respetuosa;
- reflexiva;
- elegante.

Nunca:

- agresiva;
- demasiado social;
- demasiado tecnológica;
- burocrática.

Todo el lenguaje debe parecer escrito por Daniel Montesinos.

---

# Jerarquía visual

La importancia debe ser:

1. Artículo
2. Like
3. Compartir
4. Conversación
5. Comentarios existentes

Nunca al revés.

El artículo sigue siendo el protagonista.

La conversación existe para prolongar la reflexión.

---

# Regla de oro

Si existe conflicto entre:

funcionalidad

y

estética

Debe ganar la funcionalidad.

Si existe conflicto entre:

claridad

y

espectáculo

Debe ganar la claridad.

Esta Feature busca reducir fricción.

No impresionar visualmente.

# Feature 10 — Reading Conversation Polish

Versión: 1.0  
Estado: Implementada; cierre pendiente de validación E2E autenticada  
Prioridad: 🔴 Alta

---

# Objetivo

Transformar el final de cada reflexión en el inicio natural de una conversación.

Actualmente el sistema de comentarios funciona correctamente desde el punto de vista técnico, pero la transición entre terminar de leer y participar todavía puede sentirse fría, distante o desconectada.

Esta Feature no busca añadir nuevas funcionalidades.

Busca reducir la fricción emocional para que comentar resulte tan natural como terminar de leer una buena reflexión.

El lector nunca debe sentir que salió del artículo para entrar a otra pantalla.

Debe percibir que la conversación forma parte de la misma experiencia editorial.

---

# Filosofía de esta Feature

Todo el sistema de comentarios ya existe.

No se pretende crear una comunidad nueva.

No se pretende implementar funciones sociales adicionales.

No se pretende aumentar artificialmente el número de comentarios.

El objetivo es construir una conversación de calidad.

Cada comentario debe sentirse como la continuación de una reflexión, no como una publicación independiente.

El lector debe percibir que:

- la reflexión terminó;
- algo quedó resonando;
- existe un espacio natural para expresarlo.

La conversación debe comenzar donde termina el artículo.

---

# Problema actual

Al finalizar una reflexión el usuario encuentra:

- Like
- Compartir
- Separación considerable
- Encabezado nuevo
- Botón de Google
- Comentarios

Todo funciona.

Sin embargo pueden aparecer estas sensaciones:

- parece otra pantalla;
- parece otra sección independiente;
- no queda claro que realmente podrá comentar;
- el botón de Google domina toda la experiencia;
- existe demasiado espacio vacío;
- el estado vacío resulta frío;
- el formulario no invita a escribir.

El recorrido emocional pierde continuidad.

---

# Visión

Queremos que el lector piense:

> "Quiero decir algo."

Y no:

> "Ah... aquí hay un sistema de comentarios."

La diferencia parece pequeña.

Pero psicológicamente es enorme.

---

# Principio UX

El comentario no debe sentirse como una funcionalidad.

Debe sentirse como la continuación natural del artículo.

La secuencia correcta es:

```text
Terminé de leer
↓
Algo resonó conmigo
↓
Quiero expresarlo
↓
Aquí puedo hacerlo
↓
Inicio sesión únicamente para publicarlo
```

No debe sentirse así:

```text
Terminé de leer
↓
Cambió la pantalla
↓
Hay un botón de Google
↓
No entiendo todavía dónde escribir
```

---

# Objetivos UX

Esta Feature debe lograr que:

- la conversación parezca parte del artículo;
- disminuya la fricción para comentar;
- el login sea un medio, no el protagonista;
- el usuario comprenda inmediatamente qué ocurrirá después;
- la experiencia mantenga un tono humano y editorial;
- la sección resulte limpia, tranquila y cercana.

---

# Alcance

Esta Feature puede modificar exclusivamente:

- composición visual de la conversación;
- jerarquía de elementos;
- espaciado;
- encabezados;
- textos de invitación;
- presentación del login;
- estado vacío;
- formulario;
- apariencia del textarea;
- responsive;
- accesibilidad;
- pequeños detalles visuales.

Puede reutilizar:

- CommentsSection
- formulario existente
- autenticación actual
- CTA de Google
- mensajes de estado
- componentes compartidos
- estilos existentes

No debe duplicar componentes.

No debe crear una segunda implementación del sistema de comentarios.

---

# Fuera de alcance

No implementar:

- comentarios anónimos;
- respuestas anidadas;
- likes en comentarios;
- perfiles públicos;
- seguidores;
- avatares nuevos;
- notificaciones;
- menciones;
- mensajes privados;
- chat;
- gamificación;
- insignias;
- rankings;
- sistema de reputación;
- IA para comentarios;
- nuevo proveedor OAuth;
- cambios en Supabase;
- cambios en RLS;
- cambios en moderación;
- cambios en Admin.

---

# Continuidad editorial

El final del artículo y el inicio de la conversación deben sentirse como un mismo bloque editorial.

Reducir la distancia entre:

Último párrafo

↓

Like

↓

Compartir

↓

Conversación

Debe existir una pausa.

Pero nunca una ruptura.

Evitar:

- grandes márgenes;
- grandes cajas vacías;
- fondos diferentes;
- cambios bruscos de color;
- divisores pesados;
- sensación de "otra página".

La conversación debe sentirse todavía dentro del mismo artículo.

---

# Encabezado de conversación

Mantener un eyebrow discreto.

Ejemplo:

LA CONVERSACIÓN CONTINÚA

Título:

# ¿Qué idea se quedó contigo?

Texto secundario:

Comparte una reflexión o una pregunta.

No utilizar más de una línea introductoria.

Eliminar textos largos antes del formulario.

La invitación debe ser breve.

Humana.

Editorial.

---

# Tono

La conversación debe sentirse:

- íntima;
- tranquila;
- respetuosa;
- reflexiva;
- elegante.

Nunca:

- agresiva;
- demasiado social;
- demasiado tecnológica;
- burocrática.

Todo el lenguaje debe parecer escrito por Daniel Montesinos.

---

# Jerarquía visual

La importancia debe ser:

1. Artículo
2. Like
3. Compartir
4. Conversación
5. Comentarios existentes

Nunca al revés.

El artículo sigue siendo el protagonista.

La conversación existe para prolongar la reflexión.

---

# Regla de oro

Si existe conflicto entre:

funcionalidad

y

estética

Debe ganar la funcionalidad.

Si existe conflicto entre:

claridad

y

espectáculo

Debe ganar la claridad.

Esta Feature busca reducir fricción.

No impresionar visualmente.

---

# Analytics

Esta Feature no implementa una nueva arquitectura de Analytics.

Debe reutilizar la capa centralizada existente.

Únicamente podrá registrar eventos relacionados con la conversación.

Nunca debe registrar información sensible.

---

## Eventos permitidos

Puede registrar:

- comment_login_click
- comment_form_focus
- comment_submit
- comment_submit_success
- comment_submit_error

---

## Propiedades permitidas

Únicamente:

- reflection_slug
- authenticated
- moderation_status
- source_location

Nunca registrar:

- contenido del comentario;
- nombre;
- correo;
- identificador de Google;
- dirección IP;
- borradores;
- cualquier información personal.

La privacidad tiene prioridad sobre la analítica.

---

# Arquitectura

Esta Feature debe reutilizar completamente:

- CommentsSection
- servicios actuales de comentarios
- autenticación existente
- capa de Analytics
- estilos compartidos
- Motion System
- componentes comunes

No duplicar:

- componentes
- servicios
- hooks
- lógica
- estilos

Toda mejora debe realizarse sobre la arquitectura existente.

---

# Calidad visual

La conversación debe transmitir la misma sensación que el resto del blog.

Principios:

- calma;
- claridad;
- elegancia;
- simplicidad;
- espacio suficiente;
- continuidad.

Nunca parecer:

- un foro;
- una red social;
- una sección administrativa;
- una caja de soporte técnico.

---

# Motion

Aplicar únicamente animaciones discretas.

Permitido:

- fade suave;
- ligera elevación;
- transición de superficie;
- pequeños cambios de opacidad.

No permitido:

- grandes desplazamientos;
- zoom;
- rebotes;
- animaciones infinitas;
- efectos llamativos;
- retrasos artificiales.

Respetar siempre:

prefers-reduced-motion.

---

# Estados de carga

Todos los estados deben sentirse tranquilos.

## Loading

No desplazar la página.

No bloquear la lectura.

No utilizar skeletons enormes.

---

## Error

Explicar el problema.

Permitir reintentar.

No perder el contenido escrito siempre que técnicamente sea posible.

---

## Éxito

Mostrar un mensaje breve.

Ejemplo:

> Gracias.

> Tu comentario fue enviado y será revisado antes de publicarse.

No utilizar mensajes excesivamente largos.

---

# Experiencia emocional

La última sensación que debe dejar la página no es:

"He terminado."

Debe ser:

"Tengo algo que aportar."

Ese es el objetivo principal de esta Feature.

---

# Rendimiento

Esta Feature no debe afectar:

- LCP
- CLS
- INP

No instalar dependencias.

No añadir librerías.

No hidratar componentes innecesarios.

No introducir JavaScript adicional salvo el estrictamente necesario.

---

# SEO

No modificar:

- metadata;
- Open Graph;
- JSON-LD;
- canonical;
- sitemap;
- robots.

Esta Feature es exclusivamente de experiencia de usuario.

---

# Seguridad

Mantener exactamente las reglas existentes.

No modificar:

- Supabase;
- tablas;
- RLS;
- autenticación;
- permisos;
- moderación.

Renderizar siempre comentarios como texto.

Nunca interpretar HTML.

Nunca utilizar innerHTML.

---

# Criterios de aceptación

La Feature se considera completada cuando:

- La conversación se siente integrada al final del artículo.
- Se reduce el espacio excesivo entre bloques.
- El visitante comprende inmediatamente que podrá comentar.
- Existe un textarea claramente visible antes del login.
- Google aparece como medio para publicar y no como protagonista.
- La invitación es breve.
- El estado vacío resulta humano.
- El retorno OAuth vuelve al mismo slug.
- El usuario autenticado puede comentar inmediatamente.
- La moderación continúa funcionando.
- Los comentarios aprobados siguen siendo públicos.
- La edición y eliminación propias permanecen operativas.
- Los errores no eliminan el texto cuando sea posible.
- No se modifica Supabase.
- No se modifica RLS.
- No se modifica Admin.
- Desktop validado.
- Laptop validado.
- Tablet validada.
- Mobile validado.
- 320 px validado.
- Accesibilidad preservada.
- Seguridad preservada.
- Rendimiento preservado.

---

# Pruebas obligatorias

## Visitante

- Abrir una reflexión.
- Confirmar que el textarea es visible.
- Confirmar que la conversación parece parte del artículo.
- Pulsar el textarea.
- Ver el CTA de Google.

## OAuth

- Iniciar sesión.
- Regresar al mismo slug.
- Confirmar posición correcta.
- Confirmar foco razonable.

## Usuario autenticado

- Escribir comentario.
- Publicar.
- Confirmar estado pendiente.
- Editar.
- Eliminar.

## Moderación

- Aprobar comentario.
- Confirmar aparición pública.
- Confirmar orden correcto.

## Error

- Simular fallo de red.
- Confirmar conservación del texto cuando sea posible.
- Reintentar.

## Responsive

Validar:

- 1440 px
- 1366 px
- 1280 px
- 1024 px
- 820 px
- 390 px
- 320 px

## Accesibilidad

Validar:

- teclado;
- focus;
- lector de pantalla;
- contraste;
- aria-live;
- labels;
- targets táctiles.

## Rendimiento

Ejecutar:

- npm run check
- npm run check:eslint
- npm run build
- git diff --check

Confirmar que no aparecen regresiones.

---

# Archivos probablemente afectados

No asumir que todos requieren cambios.

Analizar primero la implementación existente.

Posibles archivos:

- src/components/comments/CommentsSection.astro
- componentes internos del formulario
- estilos compartidos
- autenticación (únicamente si mejora el returnTo)
- tracking existente
- Motion System
- documentación de la Feature

---

# Implementación

Antes de modificar código:

- analizar la experiencia actual;
- comprender el recorrido completo;
- reutilizar componentes;
- minimizar cambios;
- preservar arquitectura;
- preservar SSR;
- preservar SEO;
- preservar Analytics;
- preservar rendimiento.

Toda mejora debe sentirse inevitable.

Nunca añadida.

---

# Informe esperado de Codex

Al finalizar entregar:

1. Diagnóstico inicial.
2. Problemas UX detectados.
3. Cambios realizados.
4. Componentes reutilizados.
5. Archivos modificados.
6. Flujo visitante.
7. Flujo autenticado.
8. Cambios de jerarquía visual.
9. Cambios de espaciado.
10. Cambios del formulario.
11. Cambios del login.
12. Cambios del estado vacío.
13. Cambios responsive.
14. Cambios de accesibilidad.
15. Cambios de rendimiento.
16. Validaciones ejecutadas.
17. Riesgos pendientes.
18. Capturas mentales de Desktop, Tablet y Mobile.
19. Recomendaciones futuras.

---

# Principio final

Las mejores reflexiones no terminan cuando el lector llega al último párrafo.

Empiezan cuando alguien decide compartir aquello que la lectura despertó dentro de él.

La conversación no es una funcionalidad adicional.

Es la continuación natural de la reflexión.

---

# Estado de implementación — 2026-07-13

La experiencia visitante, la continuidad editorial, los estados de carga y error, Analytics seguro, accesibilidad y
responsive quedaron implementados y validados. La ruta OAuth conserva el slug y añade `#conversacion` para recuperar
el contexto y preparar el foco al regresar.

Validaciones completadas:

- reflexión real y visitante sin sesión;
- textarea visible, real, etiquetado y de solo lectura antes del login;
- CTA de Google posterior al campo;
- estado vacío humano;
- fallo de red simulado con reintento y artículo legible;
- 1440, 1366, 1280, 1024, 820, 390 y 320 px sin overflow;
- Astro Check, ESLint, build y `git diff --check`.

Validaciones pendientes para el cierre oficial:

- OAuth real con una cuenta de prueba;
- publicación, edición y eliminación autenticadas;
- aprobación desde Admin y comprobación pública posterior.

No se marca como completada hasta ejecutar esos recorridos con credenciales de prueba. El chequeo global de Prettier
también conserva una incidencia previa y fuera de alcance en `wrangler.jsonc`; los archivos de esta Feature sí cumplen
el formato del proyecto.
