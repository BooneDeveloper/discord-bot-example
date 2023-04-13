# Bot de Discord en JavaScript

Este es un ejemplo de cómo crear un bot de Discord utilizando JavaScript y la librería Discord.js.

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- Node.js (https://nodejs.org)
- npm (se instala automáticamente con Node.js)

## Configuración

1. Clona este repositorio o descarga el código.
2. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias: **npm install**
3. Crea una aplicación de Discord y un bot en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).
4. Copia el token del bot y reemplaza `token-del-bot` en `index.js` con tu propio token.
5. Configura los permisos del bot en el portal de desarrolladores para que pueda acceder a los canales de texto y voz necesarios.
6. Si quieres, modifica el prefijo de los comandos (`!` por defecto) en `index.js`.

## Uso

1. En la terminal, ejecuta el siguiente comando para iniciar el bot: **node index.js**
2. El bot se conectará a Discord y estará listo para recibir comandos.
3. Prueba los siguientes comandos en Discord:

- `!ping`: El bot responderá "Pong!".
- `!hello`: El bot saludará al usuario que envió el comando.

¡Listo! Ahora tienes un bot de Discord en funcionamiento. Puedes personalizarlo y añadir más funcionalidades según tus necesidades.
