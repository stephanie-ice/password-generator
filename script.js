var plength = prompt("How many characters does your password need? Please choose a number between 8 and 128.");
    console.log(parseInt(plength));

while  (plength <8 || plength >128) {
    
  if (plength >=8 && plength <=128) {
        alert("You chose "+ plength)
    }
 else { prompt("Please choose a password length between 8 and 128.")
    
    }
}; /*So, I added a while loop that now prompts the user again if the character length is less
than 8 or more than 128.  Problem, though, is that it will continue prompting the user, and
will not accept new input that is entered the second time.  It also keeps running, it's a goddamn 
loop.  So it may just break the page or something.  But it works okay if the user follows the 
instructions.*/

    var userInput = []

    var lowAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var uppAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    var number = [0,1,2,3,4,5,6,7,8,9];
    
    var specChar = ["!","@","#","$","%","^","&","*"];
    
    if (confirm("Does your password require lowercase letters?")== true) {
        userInput.push(lowAlpha)
    }
    if (confirm("Does your password require uppercase letters?")== true) {
        userInput.push(uppAlpha)
    }
    if (confirm("Does your password require numbers?")== true) {
        userInput.push(number)
    }
    if (confirm("Does your password require special characters?")== true) {
        userInput.push(specChar)
    }
    console.log (userInput);   

    function generate (passwordLength)  {

        var password = "";
    
        for (var i=0; i<passwordLength; i++) {
            
            var arrs = userInput[Math.floor(Math.random()*userInput.length)];
        
            var digit = arrs[Math.floor(Math.random()* arrs.length)];
            
            password += digit;
        
        }
    
        console.log ("password: ", password);

        return password
    }


/* This is the generate password button funtionality*/
document.getElementById("generate").addEventListener("click", function(){
    var password = generate (plength)
    document.getElementById("password").value = password;

});

/*This is the copy button functionality*/
document.getElementById("copy").addEventListener("click", function (){
    
    var copyText = document.getElementById("password");
    copyText.select();
    
    document.execCommand('copy'); 
});



