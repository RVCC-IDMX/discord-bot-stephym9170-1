import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
import cowsay from './utils/cowsay';

dotenv.config();

const PREFIX = process.env.PREFIX || 'sm#';

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log('The bot is ready');
});

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content
    .toLowerCase()
    .substring(PREFIX.length)
    .slice()
    .trim()
    .split(/\s+/);
  const command = args.shift();
  if (message.content === 'ping') {
    message
      .react('⏲️')
      .then(() => console.log(`Reacted to message "${message.content}"`))
      .catch(console.error);

    message
      .reply({
        content: 'pong',
      })
      .then(() => console.log(`Reacted to message "${message.content}"`))
      .catch(console.error);
  }
  if (message.content === 'cowsay') {
    message
      .react('🐄')
      .then(() => console.log(`Reacted to message "${message.content}"`))
      .catch(console.error);

    const output = cowsay();
    message
      .reply(output)
      .then(() => console.log(`Replied to message "${message.content}"`))
      .catch((error) => {
        if (error.code === 50035) {
          message.reply({
            content: 'Too Large to fit',
          });
        }
      });
  }
});
client.login(process.env.TOKEN);
