var textInput = document.querySelector("textarea")

var buttonTranslate = document.querySelector("button")

var textOutputDiv = document.querySelector(".output")


var serverUrl = "https://api.funtranslations.com/translate/minion.json" // to do 

//we have to make url construction function 

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured", error.message )
    alert("Something went wrong please try again after sometime ")
}
//make a fetch function 

function clickHandler(){
    var result = textInput.value // taking input from user

    //calling server for processing 
    fetch(getTranslationUrl(result))
    .then(response => response.json()) // converting the response to json format using .json()
    .then(json => {
        // we get the value of the translated text and store it in a var
        var translatedText = json.contents.translated
        textOutputDiv.innerHTML = "<h1>" + translatedText +  "</h1>"
    })
    .catch(errorHandler)
}


// function output(){
//     var result = textInput.value
//     textOutputDiv.innerHTML = "<h1>" + result +  "</h1>"
// }


buttonTranslate.addEventListener("click", clickHandler)