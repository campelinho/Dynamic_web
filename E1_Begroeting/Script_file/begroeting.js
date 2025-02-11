document.getElementById("myButton").addEventListener("click", function() {
    let g = document.getElementById("greeting");
    g.innerText = g.innerText === "Hallo!" ? "Tot ziens!" : "Hallo!";
});
