"use strict";
let userInput;

class InvalidNumberError extends Error{
    name = "InvalidNumberError";
}

function getUserInput(){
    userInput = parseInt(prompt("Provide an even number:"));
    try{
        if(isNaN(userInput)){
            throw new InvalidNumberError("Not a valid number!")
        }else if(userInput % 2){
            throw new InvalidNumberError("That's an odd number, try again!")
        }else{
            alert("Thank you for an even number!");
        }
    }catch(error){
       if(error.name == "InvalidNumberError"){
            alert(error.message);
       }else{
           alert("Internal Error. Come back later.")
       }
    }
}
getUserInput();