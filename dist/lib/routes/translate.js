'use strict';

var _parser = require('../parser');

var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    var parser = new _parser.Parser();
    var result = '';
    var type = parser.detecTypeInput(req.body.message);
    var message = req.body.message;

    switch (type) {
        case 'morse':
            result = parser.morseToText(message);
            res.json({ success: true, result: result, msg: 'Translated to text' });
            break;
        case 'text':
            result = parser.textToMorse(message);
            res.json({ success: true, result: result, msg: 'Translated to morse' });
            break;
        default:
            res.json({ success: false, msg: 'Undefined type of input' });
    }
});

module.exports = router;