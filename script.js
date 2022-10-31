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

//function to get user input for password length
function getcharlength() {
  passwordlength = prompt("Please enter length of your password (between 8-128 characters):")
  if (passwordlength<8 || passwordlength>128) {
      alert("Please enter a length between 8-128.");
      getcharlength();
  } else if (isNaN(passwordlength)) {
      alert("Please enter a valid value between 8-128.");
      getcharlength();
  }
  return passwordlength;
}

//function to get user input to include uppercase
function charcase() {
  uppercasestatus=prompt("Do you want to include upper case to your password? \n Please enter Y or N");
  uppercasestatus=uppercasestatus.toUpperCase();

  if (uppercasestatus === "" || uppercasestatus === null) {
      alert("Please enter Y or N.");
      charcase();
  } 
  else if (uppercasestatus === "YES" || uppercasestatus === "Y") {
      uppercasestatus=true;
      return uppercasestatus;
  }
  else if (uppercasestatus === "NO" || uppercasestatus === "N") {
      uppercasestatus=false;
      return uppercasestatus;
  }
  else {
      alert("Please enter Y or N.");
      charcase();
  }
  return uppercasestatus;
}

//function to get user input to include numbers
function numeric() {
    numberstatus = prompt("Do you want to include number to your password? \n Please enter Y or N");
    numberstatus=numberstatus.toUpperCase();

    if (numberstatus === "" || numberstatus === null) {
      alert("Please enter Y or N.");
      numeric();
    } 
    else if (numberstatus === "YES" || numberstatus === "Y") {
      numberstatus=true;
      return numberstatus;
    }
    else if (numberstatus === "NO" || numberstatus === "N") {
      numberstatus=false;
      return numberstatus;
    }
    else {
      alert("Please enter Y or N.");
      numeric();
    }
  return numberstatus;
}

//function to get user input to include special characters
function specialval() {
    specialcharsatus = prompt("Do you want to include special character to your password? \n Please enter Y or N");
    specialcharsatus = specialcharsatus.toUpperCase();

    if (specialcharsatus === "" || specialcharsatus === null) {
      alert("Please enter Y or N.");
      specialval();
    } 
    else if (specialcharsatus === "YES" || specialcharsatus === "Y") {
      specialcharsatus=true;
      return specialcharsatus;
    }
    else if (specialcharsatus === "NO" || specialcharsatus === "N") {
      specialcharsatus=false;
      return specialcharsatus;
    }
    else {
      alert("Please enter Y or N.");
      specialval();
    }
  return specialcharsatus;
}

//function to check user input and logic to generate password as per user requirement
function generatePassword() {
  getcharlength();
  charcase();
  numeric();
  specialval();
  var userinput = LCchar;
  var password="";

  if (uppercasestatus === true && numberstatus === true && specialcharsatus === true) {
      userinput = userinput.concat(UCchar,num,specialchar);
  } else if(uppercasestatus === true && numberstatus === true) {
      userinput = userinput.concat(UCchar,num);
  } else if(numberstatus === true && specialcharsatus === true) {
    userinput = userinput.concat(num,specialchar);
  } else if (uppercasestatus === true) {
    userinput = userinput.concat(UCchar);
  } else if (numberstatus === true) {
    userinput = userinput.concat(num);
  } else if (specialcharsatus === true) {
    userinput = userinput.concat(specialchar);
  }
  
  for (var index = 0; index < passwordlength; index++) {
    var random = Math.floor(Math.random() * userinput.length);
    password += userinput[random];
    console.log("Password "+password);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
