// Seleziona il DIV
let div = document.getElementById("messaggio");

// Memorizza lo stato originale
const testoOriginale = div.innerHTML;
const coloreOriginale = div.style.color || "black";
const fontWeightOriginale = div.style.fontWeight || "normal";
const fontSizeOriginale = div.style.fontSize || "16px";
const bgOriginale = div.style.backgroundColor || "transparent";

// Seleziona pulsanti
let btnTesto = document.getElementById("btnTesto");
let btnColore = document.getElementById("btnColore");
let btnReset = document.getElementById("btnReset");

// Cambia testo
btnTesto.addEventListener("click", () => {
    div.innerHTML = "Ciao! Testo aggiornato con JavaScript 🚀";
    div.style.fontWeight = "bold";
    div.style.fontSize = "22px";
});

// Cambia colore
btnColore.addEventListener("click", () => {
    div.style.color = "#ff8800"; // arancione
    div.style.backgroundColor = "#fff4e0"; // sfondo leggero
});

// Reset
btnReset.addEventListener("click", () => {
    div.innerHTML = testoOriginale;
    div.style.color = coloreOriginale;
    div.style.backgroundColor = bgOriginale;
    div.style.fontWeight = fontWeightOriginale;
    div.style.fontSize = fontSizeOriginale;
});
