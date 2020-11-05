var bezoeker = { voornaam: "voornaam", achternaam: "achternaam", email: "email", leeftijd: "leeftijd", woonplaats: "woonplaats" }

function myFunction() {
    var voornaam = prompt("Wat is je voornaam?", "Hier invullen");
    var achternaam = prompt("Wat is je achternaam?", "Hier invullen");
    var email = prompt("Wat is je email?", "Hier invullen");
    var leeftijd = prompt("Wat is je leeftijd?", "Hier invullen");
    var woonplaats = prompt("Wat is je woonplaats?", "Hier invullen");

    bezoeker.voornaam = voornaam
    bezoeker.achternaam = achternaam
    bezoeker.email = email
    bezoeker.leeftijd = leeftijd
    bezoeker.woonplaats = woonplaats
}

let voornaam = document.getElementById("voornaam")
let achternaam = document.getElementById("achternaam")
let email = document.getElementById("email")
let leeftijd = document.getElementById("leeftijd")
let woonplaats = document.getElementById("woonplaats")

console.log(voornaam)
console.log(achternaam)
console.log(email)
console.log(leeftijd)
console.log(woonplaats)

voornaam.innerText = bezoeker.voornaam
achternaam.innerText = bezoeker.achternaam
email.innerText = bezoeker.email
leeftijd.innerText = bezoeker.leeftijd
woonplaats.innerText = bezoeker.woonplaats