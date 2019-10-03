function generate ()  {

    var lowAlpha = ["a","b","c","d","e","f","g","h","i","j"];
    
    var uppAlpha = ["A","B","C","D","E","F","G","H","I","J"];
    
    var number = [0,1,2,3,4,5,6,7,8,9];
    
    var specChar = ["!","@","#","$","%","^"];
    
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
       
document.getElementById("generate").addEventListener("click", function(){
    var password = generate ()
    document.getElementById("password").value = password
    document.getElementById("generate").textContent = "example"
});
