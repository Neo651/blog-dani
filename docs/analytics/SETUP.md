# Configuración y operación de Analytics

## Google Analytics 4

1. Crear o elegir una propiedad GA4 y un flujo Web.
2. Copiar el Measurement ID con formato `G-XXXXXXXXXX`.
3. Añadir `PUBLIC_GA_MEASUREMENT_ID` a `.env` local y a Variables and Secrets del Worker en Cloudflare.
4. Desplegar y comprobar DebugView/Realtime y la petición a `googletagmanager.com`.

Sin la variable no se crea `gtag`, no se solicita el script y toda la API interna se comporta como no-op. Si el script
es bloqueado, la lectura y las acciones siguen funcionando. La configuración final de consentimiento debe revisarse
según jurisdicciones, uso de Google Signals y política legal; esta documentación no presume cumplimiento jurídico.

## Cloudflare

Web Analytics debe activarse una sola vez desde el dashboard de Cloudflare. No existe beacon en el repositorio para
evitar duplicarlo. Las métricas nativas del Worker no se copian al frontend.

En Cloudflare revisar Observability y Analytics del Worker para solicitudes, errores, CPU, invocaciones, logs y
latencia. Revisar Analytics > Web Analytics para tráfico agregado. Nunca registrar secretos ni contenido personal.

## Verificación

- Ejecutar localmente con y sin `PUBLIC_GA_MEASUREMENT_ID`.
- En DevTools, filtrar por `collect?v=2` y comprobar nombres/propiedades.
- Confirmar que `/admin` y `/auth/callback` no generan eventos personalizados.
- Confirmar que esas rutas tampoco renderizan el bootstrap ni solicitan `googletagmanager.com`.
- Bloquear `googletagmanager.com` y repetir navegación, likes, comentarios y compartir.

Un dashboard futuro deberá consultar GA4 Data API o Cloudflare GraphQL desde backend con credenciales privadas. Otras
alternativas son eventos propios agregados o una combinación con definiciones canónicas; nunca consultar esas APIs
desde el navegador ni copiar datos crudos a Supabase sin un diseño de retención y privacidad.

## Lectura de las métricas

`page_view` no es una persona y `reflection_open` no demuestra que se leyó. La señal primaria es la combinación de
finalización, tiempo comprometido, reacciones, comentarios y acciones de compartir. Un canal externo abierto solo cuenta
como intención (`share_click`); únicamente Clipboard y Web Share resuelto producen `share_success`.
