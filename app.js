
var BtnTranslator=document.querySelector("#btn-translator")
var inputText=document.querySelector("#input")
var outputText=document.querySelector("#output")
var url="https://api.funtranslations.com/translate/ferb-latin.json"
function getUrl(input){
    return url+"?"+"text="+input
}
function errorHandler(error){
    console.log("error occured",error)
    alert("something wrong with server! try again later.. ")}

function eventHandler(){
    var text=inputText.value
    fetch(getUrl(text))
    .then(response => response.json())
    .then(json => { 
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
     } )

    .catch(errorHandler)

}
BtnTranslator.addEventListener("click",eventHandler)