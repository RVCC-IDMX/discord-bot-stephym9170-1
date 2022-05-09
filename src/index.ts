import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
import cowsay from './utils/cowsay';

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('ready', () => {
  let handler = require('./command-handler');
  if (handler.default) handler = handler.default;

  handler(client);
});

//client.on('messageCreate', (message) => {
  //if (!message.content.startsWith(PREFIX)) return;
 // if (!channels.includes(message.channel.id)) return;

  //const args = message.content
   // .toLowerCase()
   // .substring(PREFIX.length)
   // .slice()
    //.trim()
    //.split(/\s+/);
   // console.log(args)
  //const command = args.shift();
  //console.log(command)
  //if (command === 'ping') {
    //message
     // .react('⏲️')
     // .then(() => console.log(`Reacted to message "${message.content}"`))
     // .catch(console.error);

   // message
     // .reply({
       // content: 'pong',
     // })
     // .then(() => console.log(`Reacted to message "${message.content}"`))
     // .catch(console.error);
  //}
 // if (command === 'cowsay') {
   // message
     // .react('🐄')
     // .then(() => console.log(`Reacted to message "${message.content}"`))
     // .catch(console.error);

   // const output = cowsay(args[0]);
   // message
     // .reply(output)
     // .then(() => console.log(`Replied to message "${message.content}"`))
     // .catch((error) => {
       // if (error.code === 50035) {
         // message.reply({
           // content: 'Too Large to fit',
         // });
       // }
    //  });
 // }
//});
client.login(process.env.TOKEN);
