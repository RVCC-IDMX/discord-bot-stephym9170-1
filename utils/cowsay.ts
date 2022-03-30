import cowsay from 'cowsay';
import { IOptions } from 'cowsay'; // optional
import getRandomInt from './random';
import quotes from './quotes.json';
import { Message } from 'discord.js';

export default function (cow: string = 'random') {
  //A random number is generated
  const idx = getRandomInt(0, quotes.length);
  const quoteOBJ = quotes[idx];
  const text = `${quoteOBJ.quote} - ${quoteOBJ.author}`;

  let opts: IOptions = {
    text: text,
    e: '^^',
    r: true,
    //f: snoopy
  };
  console.log(cow);
  if (cow !== 'random') {
    opts.r = false;
    opts.f = cow;
  }

  let output: string = cowsay.say(opts);
  output = `
    \`\`\`${output}\`\`\`
    `;
  return output;
}


