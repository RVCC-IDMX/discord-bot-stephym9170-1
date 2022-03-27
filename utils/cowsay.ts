import cowsay from 'cowsay';
import { IOptions } from 'cowsay';

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
