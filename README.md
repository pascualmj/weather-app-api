Proyecto realizado con [ExpressJS](https://expressjs.com/es/).

## Indicaciones

Antes de correr este servidor de Node cree un archivo `.env` con las variables de entorno que se detallan en `.env.example`. Es necesaria una API Key del servicio de [Open Weather Map](https://openweathermap.org/).

## Aclaraciones

Puede encontrar la aplicación de ReactJS complementaria con este proyecto en [este repositorio](https://github.com/pascualmj/weather-app). Para ejecutar la aplicación, siga las instrucciones ahí detalladas.

Se utilizaron los módulos [Husky](https://www.npmjs.com/package/husky) y [Lint Staged](https://www.npmjs.com/package/lint-staged) para correr ciertos comandos en el `pre-commit` hook sólo en aquellos archivos `*.js` que se encuentran en el área de staging. Estos comandos son:

- `eslint --fix`
- `prettier --write`
- `mocha --recursive`

Esto asegura que, antes de efectivizar el commit, el código se encuentra libre de errores, correctamente formateado y que todos los tests pasaron exitosamente.

## Pruebas

Para la definición de los tests, se utilizaron los siguientes módulos:

- [Mocha](https://mochajs.org/).
- [Chai](https://www.chaijs.com/).
- [Proxyquire](https://www.npmjs.com/package/proxyquire).
- [Sinon](https://sinonjs.org/).

Se realizaron tests unitarios para verificar el comportamiento esperado de los endpoints.

## Scripts Disponibles

### `npm run dev`

Corre la aplicación en modo desarrollo. El servidor escucha peticiones en el **puerto 8080** por defecto.

### `npm test`

Ejecuta los tests definidos en el proyecto.

### `npm run coverage`

Muestra el resultado de la cobertura de los tests definidos.

### `npm run lint`

Corre ESlint para verificar errores.

### `npm run lint:fix`

Corre ESlint para verificar errores y corregir los habilitados para hacerlo.

### `npm run format`

Ejecuta Prettier para formatear el código según las reglas establecidas en `.prettierrc.json`.
