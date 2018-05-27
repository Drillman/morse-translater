var inputArea = document.getElementById('inputarea');
var button = document.getElementById('button-translate');
var outputArea = document.getElementById('outputarea');

button.onclick = function(){
    console.log(inputArea.value);
    var json = {message: inputArea.value};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            outputArea.value = res.result;
        }
    };
    xhttp.open("POST", "translate", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(json));
}