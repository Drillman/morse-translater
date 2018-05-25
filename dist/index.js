'use strict';

var _parser = require('./lib/parser');

var parser = new _parser.Parser();
var setence = '... .- .-.. ..- -';
console.log(parser.detecTypeInput(setence));
console.log(parser.morseToText(setence));