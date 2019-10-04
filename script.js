var plength = prompt("How many characters does your password need? Please choose a number between 8 and 128.");

    console.log(parseInt(plength));

    if (plength >=8 && plength <=128) {
        alert("You chose "+ plength);
    } else {
        prompt("Please choose a password length between 8 and 128.")
        /*how to cycle back to beginning?*/
    }


function generate ()  {

    var lowAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var uppAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    var number = [0,1,2,3,4,5,6,7,8,9];
    
    var specChar = ["!","@","#","$","%","^","&","*"];
    
    var allArrs = [lowAlpha,uppAlpha,number,specChar];
    
    var password = "";
    
    for (var i=0; i<128; i++) {
        
        var arrs = allArrs[Math.floor(Math.random()*allArrs.length)];
    
        var digit = arrs[Math.floor(Math.random()* arrs.length)];
        
        password += digit;
    
    }
    
    console.log ("password: ", password);

    return password
}

/* This is the generate password button funtionality*/
document.getElementById("generate").addEventListener("click", function(){
    var password = generate ()
    document.getElementById("password").value = password;

});

/*This is the copy button functionality
document.getElementById("copy").addEventListener("click", function (){
    
        document.getElementById("password").textContent;
       select();
       document.execCommand('copy'); 
       blur();
});
*/


