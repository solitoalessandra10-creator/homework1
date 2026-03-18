// Seleziona il DIV 
let div = document.getElementById("messaggio");

// Memorizza lo stato originale
const testoOriginale = div.innerHTML;
const coloreOriginale = div.style.color || "black";
const fontWeightOriginale = div.style.fontWeight || "normal";
const fontSizeOriginale = div.style.fontSize || "16px";

// Seleziona i pulsanti
let btnTesto = document.getElementById("btnTesto");
let btnColore = document.getElementById("btnColore");
let btnReset = document.getElementById("btnReset");

// Funzione per cambiare il testo
function cambiaTesto() {
    div.innerHTML = "Ciao! Il testo è stato cambiato!";
    div.style.fontWeight = "bold";
    div.style.fontSize = "20px";
}

// Funzione per cambiare il colore
function cambiaColore() {
    div.style.color = "red";  // colore modificabile
}

// Funzione per ripristinare tutto
function reset() {
    div.innerHTML = testoOriginale;
    div.style.color = coloreOriginale;
    div.style.fontWeight = fontWeightOriginale;
    div.style.fontSize = fontSizeOriginale;
}

// Collega le funzioni agli eventi click
btnTesto.addEventListener("click", cambiaTesto);
btnColore.addEventListener("click", cambiaColore);
btnReset.addEventListener("click", reset);
