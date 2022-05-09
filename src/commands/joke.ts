const api = require('discord.js');
const { MessageEmbed, Message } = require('discord.js');
const axios = require('axios');


module.exports = {
 
  callback: async (message: typeof Message, ...args: string[]) => {
     
   

    const url = `https://icanhazdadjoke.com/`;
    console.log(url)

    let joke, response;

    try {
      response = await axios.create( {
        
        baseURL: url, 
        headers: {
            Accept: "application/json"
        }
    });
    response = await axios.get(url) 
    console.log(response)
      joke = response.data;
      console.log(joke);
    } catch (e) {
      console.log(e)
      return message.channel.send('Could not find a joke');
    }

    
    
    
    const embed = new MessageEmbed()
      .setTitle(`Heres a Joke`)
    
    //.setThumbnail(`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`)
    .setDescription(`Joke will come here`)
    //   .addFields({
    //     name: 'Current Temperature',
    //     value: `${city.main.temp.toFixed()} °F`,
    // })
    //   .addFields({
    //     name: 'Low temperature',
    //     value:`${city.main.temp_min.toFixed()}°F`, 
    //     inline: true
    // })
    // .addFields({
    //     name: 'High temperature',
    //     value:`${city.main.temp_max.toFixed()}°F`,
    //     inline: true
    // })
    // .addFields({ name: '\u200B', value: '\u200B' })
    // .addFields({
    //     name: 'Sunrise',
    //     value:`${risedate.substring(18,22)} AM`,
    //     inline: true
    // })
    // .addFields({
    //     name: 'Sunset',
    //     value:`${setdate.substring(18,22)} PM`,
    //     inline: true
    // })
    
    
    
    
       
      message.channel.send({ embeds: [embed] });
  },
};
