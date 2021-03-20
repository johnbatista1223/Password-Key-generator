var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var symbols = '#$%&()*+!?@';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';


function generatePassword(){
  var pw = '';
  var generatedPw = '';
  var lPrompt = prompt('choose characters no lower than 8 and no higher than 128.');

  if(lPrompt < 8 || lPrompt > 128){
    
  return alert('characters need to be longer than 8 and shorter than 128!');
  };
  
  var lowercaseChar = confirm('do you want lower case letters?');

  if(lowercaseChar){
    pw += lowercase;
  }

  var uppercaseChar = confirm('do you want uppercase letters?');

  if(uppercaseChar){
  pw += uppercase;
  }

  var numericChar = confirm('do you want numbers included?');

  if(numericChar){
  pw += numeric;
  }

  var specialChar = confirm('do you want special characters?');

  if(specialChar){
  pw += symbols;
 }
 for (var i = 0; i < lPrompt; i++) {
   var randomCharIndex = Math.floor(Math.random() * pw.length);
   var randomCharChoosen = pw[randomCharIndex];
   generatedPw += randomCharChoosen;
   console.log(randomCharChoosen);
 }
 console.log(generatedPw);
 return generatedPw;
}
 // Write password to the #password input

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

  }

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);