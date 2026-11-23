# olivice-web
Página web oficial de OLIVICE: pegatinas de viaje coleccionables de Perú y botellas grabadas.

## Google Analytics 4

Configura `NEXT_PUBLIC_GA_MEASUREMENT_ID` en `.env.local` para desarrollo y en
las variables de entorno del servicio de despliegue antes de compilar. Puedes
copiar `.env.example` como punto de partida. Esta variable es pública y queda
incluida en el JavaScript del navegador.

El sitio registra manualmente los pageviews iniciales y los cambios de ruta.
Para evitar duplicados, desactiva en el flujo web de GA4 la opción de medición
mejorada **Cambios de página según eventos del historial del navegador**.
