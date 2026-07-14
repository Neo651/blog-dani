# Feature 09 — Landing Refinement

Status: 🟡 Implementada — pendiente saneamiento global de Prettier

Fecha de implementación: 13 de julio de 2026

---

# Objetivo

Perfeccionar la experiencia de la Landing sin modificar su arquitectura ni agregar nuevas funcionalidades.

Esta Feature existe para elevar la calidad visual, editorial y emocional de la Home hasta un nivel comparable con productos premium.

No cambia el flujo.

No cambia la información.

No agrega nuevas secciones.

Su objetivo es únicamente mejorar la experiencia.

---

# Alcance

Esta Feature puede modificar:

- Hero
- Fondo
- Animaciones
- Microinteracciones
- Espaciados
- Tipografía
- CTA
- Tarjetas
- Responsive
- Ritmo visual
- Jerarquía

No puede modificar:

- Base de datos
- Supabase
- Panel Admin
- Reading Experience
- Navegación global
- SEO
- Funcionalidad existente

---

# Objetivos UX

La Landing debe transmitir calma desde el primer segundo.

Debe invitar a detenerse.

Debe sentirse diferente a un blog tradicional.

El visitante debe querer seguir explorando incluso antes de leer una reflexión.

Toda la experiencia debe parecer una única historia visual.

---

# Diagnóstico actual de la Landing

La Landing ya tiene una identidad visual sólida y una arquitectura estable.

No debe rediseñarse desde cero.

Los principales problemas pendientes son de refinamiento:

- algunas secciones tienen un peso visual demasiado parecido;
- el recorrido puede sentirse largo porque los bloques no cambian suficientemente de ritmo;
- la sección de redes todavía recibe más protagonismo del necesario;
- la transición entre Hero, reflexión destacada y contenido puede sentirse abrupta;
- algunos espacios verticales pueden compactarse sin perder calma;
- el fondo oscuro necesita profundidad, pero no debe convertirse en una animación protagonista;
- el contenido debe seguir siendo lo más importante;
- las microinteracciones deben mejorar la percepción de calidad sin distraer;
- la Landing debe mantener coherencia con Reading, Discover y Personal Brand;
- no deben aparecer duplicaciones de autor, frase, título o firma.

La tarea no consiste en “hacer más cosas”.

Consiste en mejorar ritmo, jerarquía, continuidad y sensación editorial.

# Hero

El Hero debe continuar siendo el punto más memorable de la Home, pero sin ocupar espacio innecesario ni desplazar demasiado la reflexión destacada.

Revisar:

- altura real en desktop, laptop, tablet y móvil;
- posición vertical del contenido;
- relación entre eyebrow, título, descripción y CTA;
- ancho máximo de las líneas;
- separación entre CTA principal y secundario;
- transición hacia la siguiente sección;
- legibilidad sobre el fondo vivo;
- comportamiento con zoom y ventanas de menor altura.

## Jerarquía

Orden visual:

1. Eyebrow:
   “UN ESPACIO PARA DETENERTE Y PENSAR”
2. Título:
   “Piensa mejor. Vive mejor.”
3. Descripción breve.
4. CTA principal:
   “Comienza a leer”.
5. CTA secundario:
   “Conóceme”.

El CTA principal debe ser claramente dominante.

“Conóceme” debe mantenerse discreto.

## Altura

Evitar que el Hero dependa rígidamente de `100vh`.

Debe aprovechar bien la pantalla, pero permitir que se intuya el comienzo de la siguiente sección cuando el viewport lo permita.

No debe cortar el título en portátiles con poca altura.

No debe generar grandes vacíos inferiores.

## Transición

La transición entre el Hero y la reflexión destacada debe sentirse continua.

Puede utilizar:

- degradado de superficie;
- cambio muy sutil de halo;
- aparición progresiva de la siguiente sección;
- continuidad del fondo.

No utilizar separadores duros ni cambios bruscos de color.

---

# Fondo vivo

El fondo debe aportar profundidad y calma sin convertirse en contenido.

Mantener como base:

- carbón cálido;
- tonos marrón oscuro;
- ámbar muy sutil;
- variaciones discretas entre secciones.

Puede incluir:

- estrellas pequeñas y de baja opacidad;
- partículas casi imperceptibles;
- ruido cinematográfico ligero;
- gradientes radiales muy suaves;
- desplazamiento lento de halos;
- un destello o cometa muy ocasional.

## Reglas obligatorias

- Nunca debe dificultar la lectura.
- Nunca debe competir con fotografías o tarjetas.
- No usar grandes puntos luminosos detrás del texto.
- No usar movimiento constante claramente visible.
- No utilizar parallax agresivo.
- No utilizar canvas pesado si CSS resulta suficiente.
- No instalar librerías.
- Respetar `prefers-reduced-motion`.
- En modo de movimiento reducido, el fondo debe quedar prácticamente estático.
- Toda animación debe limitarse a `transform` y `opacity`.
- Evitar consumo continuo elevado de CPU o GPU.

## Cometa o destello ocasional

Si se implementa:

- debe aparecer muy pocas veces;
- no debe atravesar el texto;
- no debe captar inmediatamente la mirada;
- debe durar poco;
- debe omitirse con `prefers-reduced-motion`;
- no debe existir más de uno simultáneamente.

Si el efecto no puede mantenerse extremadamente sutil, no implementarlo.

---

# Tipografía

Revisar:

- pesos
- tamaños
- contraste
- ritmo
- márgenes
- espaciado vertical
- longitud de líneas

Toda la Landing debe sentirse editorial.

---

# Microinteracciones

Agregar únicamente animaciones discretas.

Ejemplos:

- Fade In
- Reveal al hacer scroll
- Hover elegante
- Elevación suave
- Transiciones fluidas

Evitar cualquier animación excesiva.

---

# Tarjetas

Revisar todas las cards de la Landing.

Buscar:

- consistencia
- alineación
- ritmo
- jerarquía
- hover
- sombras
- bordes

Todas deben sentirse parte del mismo sistema.

---

# Imagen destacada

Preparar la Landing para trabajar correctamente con imágenes editoriales.

Las imágenes deberán:

- ser horizontales
- mantener foco visual
- reservar espacio negativo
- evitar recortes importantes
- funcionar correctamente en desktop, tablet y móvil

El sistema nunca debe cortar el sujeto principal.

---

# Responsive

Revisar completamente:

Desktop

Laptop

Tablet

Móvil

No solo verificar que funcione.

Verificar que se vea excelente.

---

# Performance

Toda animación debe ejecutarse mediante transform y opacity.

No deben afectar Lighthouse.

No introducir Layout Shift.

Mantener una experiencia fluida incluso en dispositivos modestos.

---
# Ritmo visual entre secciones

La Landing no debe sentirse como una sucesión de bloques con la misma importancia.

Definir una jerarquía clara:

1. Hero.
2. Reflexión destacada.
3. Últimas reflexiones.
4. Sobre Daniel.
5. Conecta conmigo.
6. Cierre.

## Reglas

- La reflexión destacada debe ser el segundo punto de mayor protagonismo.
- “Últimas reflexiones” debe permitir explorar sin competir con la destacada.
- “Sobre Daniel” debe sentirse humano y editorial.
- “Conecta conmigo” debe ser más compacto y secundario.
- El cierre debe ser sereno y breve.
- Alternar densidad y aire para evitar monotonía.
- No usar el mismo padding vertical en todas las secciones.
- No introducir huecos gigantes únicamente para dar sensación premium.
- La Home debe sentirse más corta sin eliminar contenido.

Los cambios de ritmo pueden lograrse mediante:

- variación moderada del padding;
- ancho diferente de los contenedores;
- composición alternada;
- fondos con halos distintos;
- jerarquía tipográfica;
- densidad controlada.

# Últimas reflexiones

La sección debe ser fácil de escanear y no sentirse vacía ni sobredimensionada.

Revisar:

- tamaño de encabezado;
- separación entre título, descripción y tarjetas;
- comportamiento con una, dos o tres publicaciones;
- alineación de cards;
- espacios cuando no existe suficiente contenido;
- compartir;
- Like y comentarios;
- CTA “Ver todas las reflexiones”.

## Con poco contenido

Si solo existe una reflexión anterior:

- no dejar una cuadrícula enorme con espacio vacío;
- utilizar una composición equilibrada;
- no estirar excesivamente la tarjeta;
- no inventar publicaciones.

Si no existen reflexiones anteriores:

- mantener un estado vacío compacto;
- no ocupar una altura equivalente a una sección completa;
- conservar el CTA hacia `/reflexiones` únicamente si aporta valor.

## Tarjetas

Las cards deben:

- mantener proporciones coherentes;
- mostrar imagen sin recortes agresivos;
- tener jerarquía clara;
- permitir reconocer fecha, tiempo, título, frase y métricas;
- usar hover discreto;
- no convertirse en paneles pesados;
- mantener compartir accesible sin competir con “Leer reflexión”.

# Sobre Daniel en la Home

La sección debe mantener su composición actual y su función humana.

No convertirla en una biografía completa.

Revisar:

- centrado vertical entre fotografía y texto;
- relación de escala;
- recorte natural de la fotografía;
- longitud de línea;
- espacio superior e inferior;
- jerarquía del CTA;
- continuidad con `/sobre-mi`.

El CTA debe llevar a `/sobre-mi`.

La fotografía no debe dominar más que el mensaje.

No repetir contenido completo de la página personal.

# Conecta conmigo

La sección de redes es secundaria.

No debe competir con:

- Hero;
- reflexión destacada;
- últimas reflexiones;
- Sobre Daniel.

Debe ser compacta, clara y elegante.

## Jerarquía

Canales activos:

- LinkedIn;
- Correo.

Canales futuros:

- Instagram;
- TikTok.

GitHub puede permanecer preparado en configuración, pero no necesita protagonismo en la Landing.

## Tarjetas

Las tarjetas deben:

- tener altura compacta;
- utilizar iconos pequeños;
- contener texto breve;
- mostrar “Próximamente” discretamente;
- evitar grandes fondos o sombras;
- no parecer CTA principales;
- conservar accesibilidad y área táctil.

## Reducción de protagonismo

Comparada con su estado actual, la sección debe reducir aproximadamente:

- altura general;
- tamaño de encabezado;
- espacios internos;
- presencia de bordes;
- intensidad de hover.

El objetivo es permitir contacto sin interrumpir el recorrido editorial.

# Cierre de la Landing

El cierre debe ser emocional, pero breve.

Evitar:

- repetir una despedida ya usada en otras páginas;
- demasiadas líneas;
- firma duplicada;
- gran altura vacía;
- redes repetidas con el mismo protagonismo.

Mantener una única idea de cierre.

Ejemplo conceptual:

> Gracias por detenerte un momento.

El copyright y la navegación deben ser discretos.

El cierre no debe sentirse como otra sección extensa.

# Motion aplicado a la Landing

Esta Feature puede utilizar el Motion Design System existente.

No debe crear un sistema paralelo.

## Permitido

- entrada inicial suave del Hero;
- reveal leve al entrar una sección en viewport;
- elevación de 2–4 px en cards;
- cambio sutil de borde o superficie;
- transiciones de 160–400 ms;
- movimiento ambiental extremadamente lento.

## No permitido

- animar cada párrafo;
- grandes desplazamientos verticales;
- zoom constante;
- loops llamativos;
- entrada escalonada de demasiados elementos;
- efectos que retrasen el acceso al contenido;
- animaciones que se repitan cada vez que el usuario sube y baja.

## Accesibilidad

Con `prefers-reduced-motion: reduce`:

- eliminar desplazamientos;
- eliminar cometas;
- eliminar loops;
- mantener únicamente cambios instantáneos o fades mínimos.



# Criterios de aceptación

# Criterios de aceptación ampliados

La Feature se considera completada cuando:

- La Landing conserva toda su funcionalidad.
- El Hero se adapta correctamente a ventanas de poca altura.
- La siguiente sección se percibe como continuación natural.
- El fondo aporta profundidad sin distraer.
- `prefers-reduced-motion` está respetado.
- La reflexión destacada mantiene máxima prioridad después del Hero.
- No hay nombres, frases, autores ni firmas duplicados.
- “Últimas reflexiones” se ve bien con cero, una, dos o tres publicaciones.
- “Sobre Daniel” queda correctamente centrado.
- “Conecta conmigo” pierde protagonismo y ocupa menos altura.
- El cierre es breve.
- Las microinteracciones son discretas.
- No se añaden dependencias.
- No aumenta significativamente el JavaScript.
- No existe overflow horizontal.
- No aparecen saltos de layout.
- Desktop, laptop, tablet, móvil y 320 px están validados.
- Landing, Reading, Discover, Personal Brand, Admin y Navigation continúan funcionando.

La Landing debe transmitir:

- calma
- claridad
- elegancia
- profundidad
- personalidad

Un visitante debería percibir el sitio más como una publicación editorial premium que como un blog tradicional.

La experiencia debe sentirse cuidada hasta en los pequeños detalles.

---

# Fuera de alcance

No agregar:

- nuevas secciones
- nuevos módulos
- newsletter
- comentarios
- búsqueda
- categorías
- favoritos
- IA

Esta Feature únicamente perfecciona la Landing existente.

---

# Estado de implementación

Implementado:

- Hero con altura basada en contenido y `clamp()`, sin dependencia de `100vh`;
- siguiente reflexión visible o insinuada incluso en ventanas de 720–768 px de alto;
- cielo cálido con partículas de menor contraste y animaciones limitadas a `transform` y `opacity`;
- eliminación completa del movimiento ambiental con `prefers-reduced-motion`;
- transición continua Hero → reflexión destacada mediante un halo de superficie no interactivo;
- atribución de cita deduplicada cuando coincide con Daniel Montesinos;
- ritmos verticales diferenciados entre destacada, últimas, Sobre Daniel, redes y cierre;
- estados de cero, una, dos y tres reflexiones anteriores sin grids vacíos ni contenido inventado;
- una card acotada, dos columnas equilibradas y tres columnas completas en escritorio;
- reveals de sección reutilizando el observer existente y ejecutándose una sola vez;
- Sobre Daniel más compacto y centrado ópticamente, sin modificar `/sobre-mi`;
- redes de Landing aproximadamente 20% más compactas, sin alterar su variante de perfil;
- variante de cierre exclusiva de Landing con una única despedida breve;
- hover de cards limitado a cuatro píxeles y desactivado como desplazamiento en movimiento reducido;
- cero dependencias y cero JavaScript nuevo.

## Validación responsive

| Viewport | Hero | Inicio de destacada | Overflow horizontal |
| --- | ---: | ---: | --- |
| 1440 × 1000 | 723 px | 723 px | No |
| 1366 × 768 | 679 px | 679 px | No |
| 1280 × 720 | 669 px | 669 px | No |
| 1024 × 768 | 658 px | 658 px | No |
| 820 × 1180 | 679 px | 679 px | No |
| 390 × 844 | 623 px | 623 px | No |
| 320 × 700 | 628 px | 628 px | No |

La emulación exacta confirmó `clientWidth === scrollWidth` en todos los casos. A 320 px el Hero permanece completo y
la siguiente sección queda intencionalmente insinuada. Con movimiento reducido, `hero-stars-drift` pasa a `none`.

Los estados de contenido se probaron con un servidor Supabase local temporal, sin alterar datos ni conservar mocks en el
repositorio. La Landing real, Home, rutas internas y componentes compartidos conservaron sus contratos.

## Rendimiento

No se añadió JavaScript. El CSS de producción pasó de aproximadamente 20.8 KB a 21.1 KB gzip (+342 bytes), todavía muy
por debajo del presupuesto de 40 KB. No se añadieron imágenes, canvas, listeners ni librerías. El cometa se descartó:
no aportaba suficiente valor para justificar movimiento continuo y el riesgo de atravesar contenido.

## Validación técnica

- `astro check`: 0 errores, 0 warnings, 0 hints.
- `npm run check:eslint`: correcto.
- `npm run build`: correcto.
- `git diff --check`: correcto.
- Prettier sobre todos los archivos de Feature 09: correcto.

`npm run check` global continúa fallando únicamente por el formateo preexistente de `wrangler.jsonc`. Ese archivo no se
modificó porque esta Feature prohíbe cambios al Worker y al despliegue. Por esa razón documental, la Feature permanece en
estado amarillo y no se declara completamente cerrada aunque sus criterios funcionales y visuales estén implementados.
