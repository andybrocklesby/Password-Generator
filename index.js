// Array of character, alphabetical, numerical and symbolic
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordDisplayOne = document.getElementById('password-one');
let passwordDisplayTwo = document.getElementById('password-two');
let newPasswordOne = "";
let newPasswordTwo = "";
let symbolCheckbox = document.getElementById('symbol');
let numberCheckbox = document.getElementById('number');

// Function to create a random character
function getRandomCharacter() {
    // Selecting a random number the size of the array
    let randomIndex = Math.floor(Math.random() * characters.length);
    // Selecting a random character based on the random index
    let randomCharacter = characters[randomIndex];
    // Return the character to be used elsewhere
    return randomCharacter;
}

function getPassword(){
    // Reset password to nothing when function is called
    let newPasswordOne = "";
    let newPasswordTwo = "";
    // Loop through characters array to count
    for(let i = 0; i < characters.length; i++){
        // If count is less than 15, execute instructions
        if(i < 15){
            // Add random character to string
            newPasswordOne += getRandomCharacter();
            newPasswordTwo += getRandomCharacter();
        }
    }
    // Render the passwords to the elements
    passwordDisplayOne.textContent = newPasswordOne;
    passwordDisplayTwo.textContent = newPasswordTwo;
}




 

