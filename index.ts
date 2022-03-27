import DiscordJS, {Intents} from 'discord.js'
import dotenv from 'dotenv'
import * as cowsay from 'cowsay';
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message
        .react('⏲️')
        .then(() => console.log(`Reacted to message '${message.content}'`))
        .catch(console.error)
        message
        .reply({
            content:'pong', 
        })
        
    }

    if (message.content === 'cowsay') {
        message
        .react('🐄')
        .then(() => console.log(`Reacted to message '${message.content}'`))
        .catch(console.error)
        
        let output: string = cowsay.say({ text: 'Hello from typescript!'})
        output = `
        \`\`\`
       ${output}
         \`\`\`
         `;
         message.reply({
         content: output,
         })
         
        }
    })

client.login(process.env.TOKEN)