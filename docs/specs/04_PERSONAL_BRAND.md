# Personal Brand Experience

Versión: 1.0

Estado: Completada

Fecha de cierre: 13 de julio de 2026

Prioridad: 🔴 Alta

---

# Objetivo

Construir una marca personal auténtica, humana y memorable alrededor de Daniel Montesinos.

La web no debe sentirse como un blog anónimo.

Debe sentirse como entrar al espacio personal de alguien que reflexiona, aprende y comparte aquello que realmente le ha servido para vivir mejor.

La confianza será siempre el activo más importante de la marca.

---

# Problema actual

Actualmente la marca personal tiene poca presencia dentro de la experiencia.

Problemas detectados:

• La sección "Sobre mí" perdió protagonismo.

• El visitante conoce las reflexiones pero no conoce a la persona.

• No existe continuidad hacia otras plataformas.

• No se transmite suficientemente el propósito del proyecto.

• La identidad visual todavía puede fortalecerse.

---

# Objetivo del usuario

El visitante quiere responder naturalmente estas preguntas:

¿Quién escribe estas reflexiones?

¿Por qué debería confiar en él?

¿Qué lo hace diferente?

¿Dónde puedo seguir aprendiendo de esta persona?

---

# Filosofía

La marca no gira alrededor de Daniel.

Gira alrededor del valor que Daniel aporta.

El protagonista siempre será el lector.

Daniel actúa como guía, compañero y aprendiz.

Nunca como gurú.

Nunca como influencer.

Nunca como alguien que tiene todas las respuestas.

---

# User Journey

El usuario llega.

↓

Lee una reflexión.

↓

Conecta con la idea.

↓

Quiere saber quién la escribió.

↓

Lee "Sobre Daniel".

↓

Genera confianza.

↓

Decide seguir la marca.

↓

Regresa en el futuro.

---

# Objetivos UX

El usuario debe sentir:

confianza

cercanía

autenticidad

humildad

inspiración

esperanza

Nunca debe sentir:

ego

arrogancia

venta

presión

superioridad

---

# Objetivos UI

La sección debe ser minimalista.

Muy limpia.

Excelente fotografía.

Mucho espacio.

No parecer un currículum.

No parecer una biografía corporativa.

Debe sentirse como una conversación.

---

# Sección "Sobre Daniel"

Debe incluir:

Fotografía profesional pero natural.

Título.

Presentación.

Filosofía.

Botón:

Conóceme

No debe superar unas pocas líneas.

Debe invitar a conocer más.

No contar toda la historia.

---

# Presentación

Debe transmitir que:

Daniel también sigue aprendiendo.

Las reflexiones nacen de experiencias reales.

El objetivo no es enseñar desde la perfección.

El objetivo es crecer junto al lector.

---

# Fotografía

La fotografía debe transmitir:

naturalidad

tranquilidad

confianza

profesionalismo

cercanía

Evitar fotografías:

demasiado corporativas

demasiado artificiales

demasiado posadas

---

# Redes sociales

Crear una sección específica.

No esconderlas en el footer.

Mostrar únicamente:

LinkedIn

Instagram

GitHub

Correo

Preparar espacio para:

YouTube

Podcast

Newsletter

Las redes deben verse como una continuación natural del blog.

No como publicidad.

---

# Llamados a la acción

Los CTA deben invitar.

Nunca presionar.

Ejemplos:

Conóceme

Descubre más reflexiones

Conectemos

Sigamos conversando

Evitar:

Suscríbete ya

Compra ahora

No te lo pierdas

---

# Identidad visual

Toda la marca debe transmitir:

minimalismo

calma

claridad

profundidad

elegancia

consistencia

No utilizar elementos visuales que distraigan.

---

# Voz

Toda comunicación debe sentirse:

humana

reflexiva

respetuosa

optimista

honesta

Nunca:

dramática

sensacionalista

arrogante

moralista

---

# Responsive

La experiencia debe mantenerse intacta en dispositivos móviles.

La sección "Sobre Daniel" no debe perder protagonismo.

---

# Accesibilidad

Fotografía con texto alternativo.

Excelente contraste.

Tipografía cómoda.

Navegación mediante teclado.

---

# SEO

La marca debe reforzarse mediante:

Open Graph.

Metadata consistente.

Canonical.

Schema.org Person (en una futura versión).

---

# Fuera de alcance

No implementar:

Tienda.

Cursos.

Venta de mentorías.

Publicidad.

Patrocinios.

Biografía completa.

Todo eso pertenece a futuras versiones.

---

# Componentes afectados

AboutSection

AuthorCard

SocialLinks

Footer

Header

Hero

---

# Archivos probablemente afectados

src/components/about/

src/components/social/

src/components/layout/

src/pages/index.astro

---

# Checklist

☑ Recuperar "Sobre Daniel"

☑ Fotografía

☑ Filosofía

☑ Redes sociales

☑ CTA elegante

☑ Responsive

☑ Accesibilidad

☑ SEO

☑ Consistencia visual

---

# Criterios de aceptación

La Feature estará terminada cuando:

Un visitante comprenda claramente quién es Daniel Montesinos.

La marca transmita autenticidad.

La sección genere confianza.

Las redes se integren de forma natural.

El usuario quiera seguir conectado con la marca más allá del blog.

---

# Implementación cerrada

La Feature se materializa en una página independiente `/sobre-mi` y en una versión breve reutilizada en Home.

La información pública de marca, fotografía, narrativa, canales y estados futuros vive en `src/config/site.ts`. Los
componentes no conservan copias de estos datos ni generan enlaces vacíos.

La página personal incluye:

- presentación y fotografía compartidas con Home;
- propósito del blog;
- principios personales;
- origen de las reflexiones;
- mapa discreto del ecosistema futuro;
- acceso a reflexiones y canales de contacto;
- cierre humano.

La navegación principal y los CTA “Conóceme” conducen a `/sobre-mi`. LinkedIn y correo son enlaces activos;
Instagram, TikTok y GitHub se muestran como “Próximamente”. Newsletter, Podcast y YouTube se comunican únicamente
como dirección futura, sin implementar productos o enlaces ficticios.

El SEO incluye title y description únicos, canonical, Open Graph, Twitter Card, autor y JSON-LD `Person` limitado a
datos reales y confirmados.

Validación de cierre:

- Astro Check: 0 errores, 0 warnings y 0 hints;
- ESLint: correcto;
- build SSR de Cloudflare: correcto;
- revisión visual: 1440 px, 820 px, 390 px y 320 px;
- navegación por teclado, foco visible, targets táctiles, enlaces, metadata, Home y 404: verificados.

---

# Inspiración

James Clear

Seth Godin

Derek Sivers

Simon Sinek

Morgan Housel

No copiar su diseño.

Inspirarse en:

autenticidad

consistencia

claridad

credibilidad

---

# Principio final

La marca personal no debe construirse para llamar la atención.

Debe construirse para ganar confianza.

Cada reflexión fortalece la marca.

Cada interacción debe hacer que el lector piense:

"Quiero seguir aprendiendo con Daniel."


# Ecosistema de marca

DanielMontesinos.com será el centro de la marca personal.

Todas las demás plataformas conducirán hacia él o partirán desde él.

Ecosistema previsto:

- Blog (núcleo principal)
- LinkedIn (contenido profesional)
- Instagram (micro reflexiones)
- Newsletter (profundización)
- Podcast (futuro)
- YouTube (futuro)
- Libro (futuro)

Cada plataforma tendrá un propósito diferente, pero todas compartirán la misma identidad, tono y filosofía definidos en PROJECT_MANIFEST.md y BRAND_GUIDE.md.
