"use strict";

var array = {
    "nom": "john",
    "prenom": "Doe"
};
for (var x in array) {
    if (array[x] == "john") {
        console.log(x);
    }
}