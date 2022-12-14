var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorMessage = document.querySelector("#error-message")
var serverURL = "https://api.funtranslations.com/translate/pig-latin.json"

function getTranslationURL(inputText) {
    return serverURL + "?" + "text=" + inputText
}


function clickHandler(){
    var inputText = txtInput.value;    

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>  {
            var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
function errorHandler(){
    errorMessage.innerText = "*Server is not working right now, try after sometime"
 }

btnTranslate.addEventListener("click", clickHandler);