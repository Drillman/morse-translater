import {Parser} from '../parser';
const express = require('express');
const router = express.Router();

router.post('/', (req,res,next) => {
    var parser = new Parser();
    let result = '';
    let type = parser.detecTypeInput(req.body.message);
    let message = req.body.message;

    switch(type){
        case 'morse':
            result = parser.morseToText(message);
            res.json({success: true, result: result, msg: 'Translated to text'});
            break;
        case 'text':
            result = parser.textToMorse(message);
            res.json({success: true, result: result, msg:'Translated to morse'});
            break;
        default:
            res.json({success: false, msg: 'Undefined type of input'});
    }
})

module.exports = router;