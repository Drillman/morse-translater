import { Parser } from './lib/parser';

var parser = new Parser();
var setence = '... .- .-.. ..- -';
console.log(parser.detecTypeInput(setence));
console.log(parser.morseToText(setence));