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

    let voornaam2 = document.getElementById("voornaam")
    let achternaam2 = document.getElementById("achternaam")
    let email2 = document.getElementById("email")
    let leeftijd2 = document.getElementById("leeftijd")
    let woonplaats2 = document.getElementById("woonplaats")

    console.log(voornaam)
    console.log(achternaam)
    console.log(email)
    console.log(leeftijd)
    console.log(woonplaats)

    voornaam2.innerText = bezoeker.voornaam
    achternaam2.innerText = bezoeker.achternaam
    email2.innerText = bezoeker.email
    leeftijd2.innerText = bezoeker.leeftijd
    woonplaats2.innerText = bezoeker.woonplaats

}