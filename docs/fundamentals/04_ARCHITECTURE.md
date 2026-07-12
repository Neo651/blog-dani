# ARCHITECTURE.md

# DanielMontesinos.com

Versión: 1.0
Estado: Documento vivo

---

# 1. Objetivo

Este documento define la arquitectura oficial del proyecto.

Su propósito es garantizar que el código siga siendo:

- simple
- mantenible
- escalable
- consistente
- fácil de entender

Toda modificación futura debe respetar esta arquitectura.

---

# 2. Filosofía de ingeniería

Preferimos:

claridad antes que inteligencia

simplicidad antes que complejidad

mantenibilidad antes que optimización prematura

componentes pequeños antes que archivos gigantes

No escribimos código para impresionar.

Escribimos código que cualquier desarrollador pueda entender dentro de seis meses.

---

# 3. Stack oficial

Frontend

Astro

TypeScript

TailwindCSS

Backend

Supabase

PostgreSQL

Storage

Supabase Storage

Hosting

Cloudflare Pages

SSR

@astrojs/cloudflare

Autenticación

Supabase Auth

Google OAuth

---

# 4. Fuente única de verdad

Todas las reflexiones viven en Supabase.

Nunca mantener dos fuentes de contenido.

No volver a utilizar Markdown como CMS.

Supabase es la única fuente oficial.

---

# 5. Arquitectura general

src/

components/

features/

layouts/

lib/

pages/

styles/

types/

utils/

Cada carpeta tiene una única responsabilidad.

---

# 6. Componentes

Los componentes solo deben encargarse de la interfaz.

Nunca deben contener lógica de negocio compleja.

Responsabilidades:

mostrar información

emitir eventos

recibir props

renderizar estados

No consultar directamente la base de datos si existe un servicio que pueda hacerlo.

---

# 7. Features

Cada dominio del negocio tendrá su propia carpeta.

Ejemplo:

features/

auth/

comments/

likes/

reflections/

Cada feature agrupa:

servicios

tipos

utilidades específicas

No mezclar lógica entre dominios.

---

# 8. Servicios

Todo acceso a Supabase debe centralizarse.

Nunca duplicar consultas.

Ejemplo:

reflectionService

commentService

likeService

authService

storageService

Los componentes nunca deben conocer los detalles de la base de datos.

---

# 9. Tipos

Todo objeto importante debe tener su tipo.

Nunca usar any.

Ejemplo:

Reflection

Comment

Like

UserProfile

StorageImage

---

# 10. Utilidades

Las funciones reutilizables irán en utils.

Ejemplos:

formatDate()

calculateReadingTime()

slugify()

truncateText()

No repetir funciones.

---

# 11. Naming

Componentes

PascalCase

ReflectionCard

CommentsSection

Servicios

camelCase + Service

reflectionService

Archivos de tipos

reflection.ts

comment.ts

Variables

camelCase

Constantes

UPPER_SNAKE_CASE

---

# 12. Responsabilidad única

Cada archivo debe tener una única responsabilidad.

Si un archivo comienza a hacer demasiadas cosas debe dividirse.

---

# 13. Tamaño recomendado

Componentes

100-250 líneas

Servicios

50-200 líneas

Funciones

Preferiblemente menos de 40 líneas.

Si una función supera 100 líneas probablemente necesite dividirse.

---

# 14. Dependencias

Antes de instalar una nueva dependencia preguntar:

¿Realmente la necesitamos?

¿Podemos resolverlo con Astro o TypeScript?

¿Aumenta el peso del proyecto?

Evitar dependencias innecesarias.

---

# 15. Estado

Preferir estado local.

Evitar estados globales si no aportan valor.

No introducir gestores de estado sin una necesidad real.

---

# 16. Seguridad

Nunca exponer claves privadas.

Nunca utilizar Service Role Key en el navegador.

La seguridad debe descansar principalmente en:

RLS

Supabase Auth

Validaciones del servidor

PUBLIC_ADMIN_EMAIL solo puede utilizarse como ayuda visual.

Nunca como mecanismo principal de autorización.

---

# 17. Rendimiento

Optimizar imágenes.

Reducir JavaScript.

Lazy Loading cuando aporte valor.

Evitar consultas duplicadas.

Evitar renderizados innecesarios.

---

# 18. Accesibilidad

Toda funcionalidad debe poder utilizarse mediante teclado.

Contraste suficiente.

Etiquetas accesibles.

Texto alternativo en imágenes.

---

# 19. SEO

Cada reflexión debe tener:

title

description

canonical

Open Graph

Twitter Card

Slug amigable.

---

# 20. Errores

Nunca ocultar errores.

Los errores deben:

registrarse

explicarse

mostrar mensajes útiles al usuario

Evitar mensajes técnicos.

---

# 21. Logging

En desarrollo:

logs descriptivos.

En producción:

solo logs realmente útiles.

Nunca registrar información sensible.

---

# 22. Testing

Antes de aceptar cambios ejecutar:

npm run check

npm run build

lint

Resolver todos los errores.

No dejar warnings ignorados sin justificación.

---

# 23. Git

Commits pequeños.

Mensajes claros.

Una responsabilidad por commit.

No subir código roto.

---

# 24. Escalabilidad

La arquitectura debe permitir añadir fácilmente:

newsletter

podcast

IA

colecciones

favoritos

app móvil

API pública

sin necesidad de reescribir el proyecto.

---

# 25. Revisión de código

Antes de aceptar cualquier cambio preguntar:

¿Es más simple?

¿Es más legible?

¿Es más reutilizable?

¿Reduce duplicación?

¿Respeta esta arquitectura?

Si alguna respuesta es negativa, reconsiderar el cambio.

---

# 26. Regla de oro

El mejor código no es el más inteligente.

Es el que un desarrollador puede leer seis meses después y comprender en pocos minutos.

La arquitectura existe para facilitar la evolución del producto, no para presumir complejidad.

---

# 27. Principio final

Toda decisión técnica debe estar al servicio del producto.

Nunca al revés.

Si una arquitectura hace más difícil desarrollar el producto sin aportar beneficios reales, debe simplificarse.

La ingeniería es un medio.

La experiencia del usuario es el fin.

# 28. Regla de evolución

Antes de crear un nuevo componente, servicio o carpeta, preguntar:

1. ¿Ya existe algo parecido que pueda reutilizar?

2. ¿Estoy duplicando una responsabilidad?

3. ¿Este cambio seguirá teniendo sentido cuando el proyecto tenga 1.000 reflexiones y 100.000 usuarios?

4. ¿Otro desarrollador entendería esta decisión sin que yo se la explique?

Si la respuesta a cualquiera de estas preguntas es "no", detenerse y replantear la implementación.

La arquitectura debe evolucionar por necesidad real, no por preferencia personal.