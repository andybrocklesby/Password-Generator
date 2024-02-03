// Array of character, alphabetical, numerical and symbolic
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Creating empty arrays for new passwords
let passwordOne = [];
let passwordTwo = [];

// Delcaring variables ready to use
let passwordDisplayOne = document.getElementById("password-one");
let passwordDisplayTwo = document.getElementById("password-two");
let completePasswordOne = "";
let completePasswordTwo = "";

// Function to get a random character from the characters array and return it
function getACharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomCharacter = characters[randomIndex];
    return randomCharacter;
}

// Function to form password
function formPassword(){
    RefreshPassword();
    // Loop through character array
    for(let i = 0; i < characters.length; i++){
        // If password isn't 15 items, push character
        if(passwordOne.length != 15){
            passwordOne.push(getACharacter());
        }
        // If password isn't 15 items, push character
        if(passwordTwo.length != 15){
            passwordTwo.push(getACharacter());
        }
    }
    // Turn arrays into string
    completePasswordOne = passwordOne.join("");
    completePasswordTwo = passwordTwo.join("");
}

// Function to display passwords in the elements
function getPassword(){
    formPassword();
    passwordDisplayOne.textContent = completePasswordOne;
    passwordDisplayTwo.textContent = completePasswordTwo;
}

// Function to remove previous passwords
function RefreshPassword(){
    passwordOne = [];
    passwordTwo = [];
}


 

