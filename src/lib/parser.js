export class Parser {
    constructor(){
        this.type;
        this.input;
        this.output;
        this.morse = ['-','.','/',' '];
        this.code = {
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "!": "-.-.--",
            "-": "-....-",
            "/": "-..-.",
            "@": ".--.-.",
            "(": "-.--.",
            ")": "-.--.-",
            " ": "/"
          };
    }

    detecTypeInput(input){
        var split = input.split('');
        for(let char of split){
            if(this.morse.indexOf(char) == -1){
                return 'text';
            }
        }
        return 'morse';
    }

    morseToText(input){
        var split = input.split(' ');
        var result = ''
        for(let char of split){
            for(let x in this.code){
                var value = this.code[x];
                if(value == char){
                    result += x;
                }
            }
        }
        return result;
    }

    textToMorse(input){
        var split = input.split('');
        var result = '';
        for(let char of split){
            char = char.toLowerCase();
            result += this.code[char];
            result += ' ';
        }
        return result;
    }
}