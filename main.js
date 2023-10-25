let nome=prompt("inserisci il tuo nome")
let cognome=prompt("inserisci il tuo cognome")
let annodinascita=prompt("inserisci il tuo anno")
let colore=prompt("inserisci il tuo colore preferito")
const annocorrente=2023;
let anniutente= annocorrente - annodinascita;
let password=nome + cognome + annodinascita + colore + "#109";
document.getElementById("password").innerHTML="la tua password è " + password;

