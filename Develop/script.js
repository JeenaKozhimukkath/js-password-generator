// Assignment code here
var UCchar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LCchar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialchar=["!","#","$","%","&","*","+","-",".","/",":",";","~","?"];
var num=["1","2","3","4","5","6","7","8","9","0"];
var passwordlength;
var lowercasestatus;
var uppercasestatus;
var specialcharsatus;
var numberstatus;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function findlength() {
  passwordlength = prompt("Please enter length of your password (between 8-128 characters):")
  if (passwordlength<8 || passwordlength>128) {
      alert("Please enter a length between 8-128.");
      findlength();
  } else if (isNaN(passwordlength)) {
      alert("Please enter a valid value between 8-128.");
      findlength();
  }
  return passwordlength;
}

function charcase() {
  uppercasestatus=prompt("Do you want to include upper case to your password? /n Y or N");
  uppercasestatus=uppercasestatus.toUpperCase();

  if (uppercasestatus === null || uppercasestatus==="") {
      alert("Please enter Y or N.");
      charcase();
  } 
  else if (uppercasestatus === "YES" || uppercasestatus === "Y") {
      uppercasestatus="true";
      return uppercasestatus;
  }
  else if (uppercasestatus === "NO" || uppercasestatus === "N") {
      uppercasestatus="false";
      return uppercasestatus;
  }
  else {
      alert("Please enter Y or N.");
      findcharcase();
  }
  return uppercasestatus;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
