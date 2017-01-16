function myLogin() {
    var person = prompt("Please enter your name", "Username");
    if(confirm("Do u want to continue the game as " + person + "?")) {
    window.location.href = "home.js"
   }
    }
