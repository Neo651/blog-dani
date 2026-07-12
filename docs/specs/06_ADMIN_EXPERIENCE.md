# Admin Experience

Versión: 1.0

Estado: Pendiente

Prioridad: 🔴 Crítica

---

# Objetivo

Construir un panel de administración moderno, rápido y agradable de utilizar.

Debe permitir publicar una reflexión en pocos minutos.

Debe sentirse como una herramienta profesional.

No como un sistema administrativo antiguo.

Inspiración:

Ghost

Notion

Medium

Linear

Vercel Dashboard

---

# Filosofía

El administrador es una herramienta de productividad.

Debe ahorrar tiempo.

No debe generar trabajo adicional.

Cada acción debe ser intuitiva.

---

# Problema actual

El panel funciona correctamente.

Sin embargo:

• El formulario ocupa demasiado espacio.

• La jerarquía visual puede mejorar.

• Hay campos que deberían calcularse automáticamente.

• El dashboard todavía aporta poca información.

• La experiencia puede sentirse más premium.

---

# Objetivo del usuario

Quiero entrar.

Crear una reflexión.

Publicarla.

Salir.

Todo en pocos minutos.

Sin pensar demasiado.

---

# User Journey

Entrar

↓

Dashboard

↓

Nueva reflexión

↓

Escribir

↓

Subir imagen

↓

Guardar

↓

Publicar

↓

Ver resultado

---

# Dashboard

Debe mostrar únicamente información útil.

No llenar la pantalla.

Mostrar:

Total reflexiones

Publicadas

Borradores

Comentarios

Likes

Última publicación

Última modificación

---

# Lista de reflexiones

Cada fila debe mostrar:

Miniatura

Título

Estado

Fecha

Tiempo lectura

Likes

Comentarios

Acciones

Editar

Eliminar

Duplicar (futuro)

---

# Formulario

Debe estar centrado.

Nunca ocupar todo el ancho.

Ancho máximo:

900-1000 px.

Mucho aire.

Excelente espaciado.

---

# Campos

## Imagen

Drag & Drop

Seleccionar archivo

Vista previa inmediata

Reemplazar

Eliminar

---

## Título

Obligatorio.

Mientras se escribe:

Generar automáticamente el slug.

---

## Slug

Autogenerado.

Editable.

Si el usuario lo modifica manualmente:

Dejar de sincronizar con el título.

---

## Fecha

Automática.

Solo mostrar selector cuando el usuario quiera programar una publicación.

---

## Autor

Siempre:

Daniel Montesinos.

No mostrar el campo.

---

## Tiempo lectura

Siempre automático.

Nunca editable.

---

## Estado

No usar checkbox.

Utilizar selector.

Borrador

Publicado

Programado (futuro)

---

## Contenido

Editor limpio.

Mucho espacio.

Excelente tipografía.

Sin distracciones.

---

# Botones

Guardar borrador

Publicar

Cancelar

Eliminar

Nunca más de un botón primario.

---

# Mensajes

Después de guardar:

Mostrar toast elegante.

Ejemplo:

✓ Reflexión publicada correctamente.

Opciones:

Ver publicación

Crear otra

---

# Confirmaciones

Eliminar reflexión:

Siempre confirmar.

Publicar:

No necesita confirmación.

Guardar:

No necesita confirmación.

---

# Autosave

Preparar arquitectura.

No implementar todavía.

---

# Responsive

El panel también debe funcionar correctamente desde tablet.

En móvil mantener funcionalidad.

---

# Accesibilidad

Navegación mediante teclado.

Labels.

Mensajes claros.

Contraste correcto.

---

# Rendimiento

Cambios rápidos.

Sin recargas innecesarias.

Optimizar subida de imágenes.

---

# Seguridad

Solo administradores autenticados.

Toda autorización depende de Supabase RLS.

Nunca confiar únicamente en el frontend.

---

# Fuera de alcance

No implementar:

Estadísticas avanzadas.

Editor colaborativo.

Versionado.

Programación automática.

IA.

Etiquetas.

Categorías.

---

# Componentes afectados

AdminDashboard

ReflectionForm

ImageUploader

StatsCards

ReflectionTable

Toast

ModalConfirm

---

# Archivos probablemente afectados

src/components/admin/

src/features/reflections/

src/pages/admin/

---

# Checklist

□ Dashboard mejorado

□ Formulario centrado

□ Drag & Drop

□ Vista previa imagen

□ Slug automático

□ Fecha automática

□ Autor automático

□ Tiempo lectura automático

□ Selector Borrador/Publicado

□ Toast éxito

□ Confirmación eliminar

□ Responsive

□ Accesibilidad

□ Rendimiento

---

# Criterios de aceptación

La Feature estará terminada cuando:

Crear una nueva reflexión sea intuitivo.

Publicar tome pocos minutos.

No existan campos innecesarios.

El panel transmita profesionalismo.

La productividad aumente claramente respecto a la versión anterior.

---

# Inspiración

Ghost CMS

Notion

Medium

Linear

Vercel Dashboard

No copiar interfaces.

Inspirarse en:

simplicidad

jerarquía

productividad

minimalismo

---

# Principio final

El panel debe desaparecer.

El administrador debe pensar únicamente en escribir.

No en la herramienta.

# Productividad del escritor

El panel debe optimizar el flujo de escritura.

Objetivos:

• Reducir al mínimo los campos manuales.

• Automatizar todo lo posible.

• Evitar decisiones repetitivas.

• Permitir publicar una reflexión en menos de cinco minutos.

Toda información que pueda calcularse automáticamente debe eliminarse del formulario.

Ejemplos:

✓ Autor.

✓ Fecha.

✓ Tiempo de lectura.

✓ Slug.

✓ Estado por defecto.

El administrador debe concentrarse únicamente en:

- pensar;
- escribir;
- publicar.