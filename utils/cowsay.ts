import cowsay from 'cowsay';
import { IOptions } from 'cowsay';
import getRandomInt from './random';

export default function () {
    let opts: IOptions = {
        text: 'Hello from typescript',
        e: '^^',
        r: true
    }
    let output: string = cowsay.say(opts);
    output = `
    \`\`\`${output}\`\`\`
    `;
    return output;
}
