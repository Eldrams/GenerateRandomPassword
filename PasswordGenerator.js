//################## Task ##################\\

//one peice of interactivity, click gen password 
//it will then gen two different passwords to the buttons*
//passwords should be 15 characters long and totally random
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"
,"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let displayOne = document.getElementById("displayPass1");
let altPass = document.getElementById("altPassword");
let btn = document.getElementById("genPasswordBtn");

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

function genPassword() {
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    displayOne.innerHTML = `Here is your Password: <span>${generatedPasswordOne} </span>`
    altPass.innerHTML = `Here is your other Password: <span>${generatedPasswordTwo} </span>`
    btn.innerHTML = "Generate a different password"
}

function copyToClip(elementId) {
    const passwordElement = document.getElementById(elementId);
    const password = passwordElement.textContent;

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Copied the text: " + password);
        })
        .catch(error => {
            console.error("Unable to copy: ", error);
        });
}
  







//when you need to achieve something using multipl parts, break down each step
//of the task and create a function for it, then call it in the next function
//build something working and then refactor

// genPassword()


// // function pass1() {
    
//     // if (randomCharacter === randomCharacter)
//     // display1.textContent += 
//     characters.push(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i) //15
    


// console.log(test)


//for loop to go through aray
//RNG code to go through aray 
//needs to be pushed in 15 times