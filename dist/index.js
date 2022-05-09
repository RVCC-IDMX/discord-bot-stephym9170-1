"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = tslib_1.__importStar(require("discord.js"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const cowsay_1 = tslib_1.__importDefault(require("./utils/cowsay"));
dotenv_1.default.config();

const client = new discord_js_1.default.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
client.on('ready', () => {
    console.log('The bot is ready');
});
//client.on('messageCreate', (message) => {
    //if (!message.content.startsWith(PREFIX))
        //return;
    //if (!channels.includes(message.channel.id))
       // return;
   // const args = message.content
        //.toLowerCase()
        //.substring(PREFIX.length)
       // .slice()
       // .trim()
        //.split(/\s+/);
    //console.log(args);
   // const command = args.shift();
   // console.log(command);
    //if (command === 'ping') {
        //message
           // .react('⏲️')
           // .then(() => console.log(`Reacted to message "${message.content}"`))
           // .catch(console.error);
       // message
            //.reply({
           // content: 'pong',
       // })
           // .then(() => console.log(`Reacted to message "${message.content}"`))
           // .catch(console.error);
   // }
    if (command === 'cowsay') {
        message
            .react('🐄')
            .then(() => console.log(`Reacted to message "${message.content}"`))
            .catch(console.error);
        const output = (0, cowsay_1.default)(args[0]);
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

client.login(process.env.TOKEN);
