'use strict';
 

document.getElementById("bereken").addEventListener("click", function() {
   
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let resultaatElement = document.getElementById("resultaat");
 
    
    if (isNaN(getal1) || isNaN(getal2) || getal1 === "" || getal2 === "") {
        resultaatElement.innerText = "Voer geldige getallen in!";
    } else {
        
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        let resultaat = getal1 + getal2;
 
        
        resultaatElement.innerText = "Het resultaat is: " + resultaat;
    }
});