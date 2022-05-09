"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cowsay_1 = tslib_1.__importDefault(require("cowsay"));
const random_1 = tslib_1.__importDefault(require("./random"));
const quotes_json_1 = tslib_1.__importDefault(require("./quotes.json"));
function default_1(cow = 'random') {
    const idx = (0, random_1.default)(0, quotes_json_1.default.length);
    const quoteOBJ = quotes_json_1.default[idx];
    const text = `${quoteOBJ.quote} - ${quoteOBJ.author}`;
    let opts = {
        text: text,
        e: '^^',
        r: true,
    };
    console.log(cow);
    if (cow !== 'random') {
        opts.r = false;
        opts.f = cow;
    }
    let output = cowsay_1.default.say(opts);
    output = `
    \`\`\`${output}\`\`\`
    `;
    return output;
}
exports.default = default_1;
