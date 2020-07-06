Proyecto realizado con [ExpressJS](https://expressjs.com/es/).

## Indicaciones

Antes de correr este servidor de Node cree un archivo `.env` con las variables de entorno que se detallan en `.env.example`. Es necesaria una API Key del servicio de [Open Weather Map](https://openweathermap.org/).

## Aclaraciones

Puede encontrar la aplicación de ReactJS complementaria con este proyecto en [este repositorio](https://github.com/pascualmj/weather-app). Para ejecutar la aplicación, siga las instrucciones ahí detalladas.

## Pruebas

Para la definición de los tests, se utilizaron los siguientes módulos:

- [Supertest](https://github.com/visionmedia/supertest).
- [Jest](https://jestjs.io/).

Se realizaron tests asíncronos para verificar el correcto funcionamiento de los endpoints.

## Scripts Disponibles

### `npm run dev`

Corre la aplicación en modo desarrollo. El servidor escucha peticiones en el **puerto 8080** por defecto.

### `npm run test`

Ejecuta los tests definidos en el proyecto.
