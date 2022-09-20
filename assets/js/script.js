//select elements from the DOM
var startBtn = document.querySelector('.start-button')
var wordBlanksEl = document.ATTRIBUTE_NODE.querySelector('.word-blanks')

//array of words
var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["javascript", "variable", "function", "object", "python", "localstorage", "timeout", "interval"]

function handleKeydown(event) {
    console.log(event.key)
}

function renderCharacters() {
    var string = ""
    for (var i = 0; i < word.length; i++)
    string += '_ '
}

function startRound() {
    var randomIndex = Math.floor(Math.random() * words.length)
    word = words[randomIndex]
    renderCharacters
}
startBtn.addEventListener("click", startRound)
  
document.addEventListener('keydown')