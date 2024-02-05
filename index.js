const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let isDarkMode = false;
let userInput = document.getElementById('length-input');

// Stretch Goal:
// [x] Ability to set password length
// [x] Add copy on click
// [] Toggle symbols/numbers on/off
// [x] Dark/light mode

function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function getPassword(){
    let passwordDisplayOne = document.getElementById('display-one');
    let passwordDisplayTwo = document.getElementById('display-two');
    passwordDisplayOne.textContent = "";
    passwordDisplayTwo.textContent = "";
    for(let i = 0; i < characters.length; i++){
        if(i < userInput.value){
            if(userInput.value > 20 || userInput.value < 10){
                produceError();
            }
            else{
                passwordDisplayOne.textContent += getRandomCharacter();
                passwordDisplayTwo.textContent += getRandomCharacter();
            }
        }
    }
}

function toggleAppearance(){
    let bodyBackground = document.getElementById('body');
    let appBackground = document.getElementById('app-bg');
    let toggleButton = document.getElementById('toggle-btn');
    let title = document.getElementById('title');
    let titleSpan = document.getElementById('title-span');
    let subtitle = document.getElementById('subtitle');
    let inputLabel = document.getElementById('input-label');
    let generateButton = document.getElementById('generate-btn'); 
    
    if(isDarkMode === true){
        bodyBackground.style.background = "#e9edc9";
        appBackground.style.background = "#fefae0";
        toggleButton.style.background = "#e9edc9";
        toggleButton.textContent = "🌙";
        title.style.color = "#606c38";
        titleSpan.style.color = "#d4a373";
        subtitle.style.color = "#606c38";
        inputLabel.style.color = "#606c38";
        generateButton.style.background = "#d4a373";
        generateButton.style.color = "white";
        isDarkMode = false;
    }
    else if(isDarkMode === false){
        bodyBackground.style.background = "#344e41";
        appBackground.style.background = "#3a5a40";
        toggleButton.style.background = "#344e41";
        toggleButton.textContent = "☀️";
        title.style.color = "#dad7cd";
        titleSpan.style.color = "#a3b18a";
        subtitle.style.color = "#a3b18a";
        inputLabel.style.color = "white";
        generateButton.style.background = "#dad7cd";
        generateButton.style.color = "#344e41";
        isDarkMode = true;
    }
}

function produceError(){
    let message = "";
    let errorEl = document.getElementById("error-display");
    
    if(userInput.value > 20){
        message = "Input is too large";
        errorEl.textContent = message;
        setTimeout(function () {
        errorEl.textContent = "";
    }, 3000);
    }
    else if(userInput.value < 10){
        message = "Input is too small";
        errorEl.textContent = message;
        setTimeout(function () {
        errorEl.textContent = "";
    }, 3000);
    }
}

    function copyTextContent(event) {
      const textToCopy = event.target.textContent;
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Text copied to clipboard: ' + textToCopy);
    }

    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach(element => {
      element.addEventListener('click', copyTextContent);
    });