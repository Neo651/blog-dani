# ENGINEERING_STANDARDS.md

Versión: 1.0

---

# Objetivo

Mantener un código consistente durante años.

---

# Convenciones

Componentes

PascalCase

Servicios

camelCase + Service

Interfaces

PascalCase

Tipos

PascalCase

Funciones

camelCase

Variables

camelCase

Constantes

UPPER_SNAKE_CASE

---

# Imports

Orden

1 Framework

2 Librerías

3 Servicios

4 Componentes

5 Utilidades

6 Tipos

---

# Funciones

Preferiblemente menores a 40 líneas.

Si supera 80 líneas:

evaluar dividir.

---

# Componentes

Responsabilidad única.

Nunca mezclar:

UI

consultas

negocio

---

# Servicios

Toda consulta a Supabase pasa por servicios.

Nunca duplicar consultas.

---

# Tipado

Nunca usar any.

Preferir tipos explícitos.

---

# Comentarios

Solo comentar:

decisiones

algoritmos

casos complejos

Nunca comentar lo obvio.

---

# Errores

Mostrar mensajes claros.

Nunca stack traces al usuario.

---

# Rendimiento

Evitar renders innecesarios.

Optimizar imágenes.

Lazy loading cuando aporte valor.

---

# Seguridad

Nunca claves privadas.

Nunca service role en frontend.

Siempre RLS.

---

# Commits

Mensajes claros.

Una responsabilidad por commit.

---

# Pull Requests

Explicar:

qué cambia

por qué

riesgos

cómo probar

---

# Regla final

Todo desarrollador debe dejar el proyecto mejor de como lo encontró.

# Documentación del código

Todo código nuevo debe ser autoexplicativo.

Las funciones importantes deben explicar:

- qué hacen
- por qué existen
- cuándo se utilizan

Los componentes deben comenzar con un encabezado descriptivo.

No se deben comentar líneas obvias.

Se deben comentar decisiones de arquitectura, algoritmos y reglas de negocio.

El objetivo es que Daniel pueda aprender leyendo el proyecto.

La claridad tiene prioridad sobre escribir menos código.