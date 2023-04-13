// Importar la librería Discord.js
const Discord = require('discord.js');

// Crear una instancia del cliente de Discord
const client = new Discord.Client();

// Definir el prefijo de los comandos
const prefix = '!';

// Evento de "ready" que se activa cuando el bot se conecta
client.on('ready', () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

// Evento de "message" que se activa cuando alguien envía un mensaje
client.on('message', message => {
  // Si el mensaje no comienza con el prefijo o si el autor del mensaje es el bot, ignorar el mensaje
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Separar el comando y los argumentos del mensaje
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Ejecutar el comando correspondiente
  if (command === 'ping') {
    message.reply('Pong!');
  } else if (command === 'hello') {
    message.channel.send(`Hello, ${message.author}!`);
  }
});

// Iniciar sesión en Discord con el token del bot
client.login('token-del-bot');
