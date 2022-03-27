import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
import * as cowsay from 'cowsay';
import { IOptions } from 'cowsay';
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', (message) => {
  if (message.content === 'ping') {
    message
      .react('⏲️')
      .then(() => console.log(`Reacted to message '${message.content}'`))
      .catch(console.error);
    message
      .reply({
        content: 'pong',
      })
      .then(() => console.log(`Replied to message '${message.content}'`))
      .catch(console.error);
  }

  if (message.content === 'cowsay') {
    message
      .react('🐄')
      .then(() => console.log(`Reacted to message '${message.content}'`))
      .catch(console.error);

    let opts: IOptions = {
      text: 'Hello from typescript',
      e: '^^',
      r: true
    };

    let output = cowsay.say(opts);
    output = `
        \`\`\`
       ${output}
         \`\`\`
         `;
    message
      .reply({
        content: output,
      })
      .then(() => console.log(`Replied to message '${message.content}'`))
      .catch((error) => {
        if (error.code === 50035) {
          message.reply({
            content: 'Too Large to Fit',
          });
        }
      });
  }
});

client.login(process.env.TOKEN);
