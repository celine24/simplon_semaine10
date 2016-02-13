var button = document.getElementById('button');
var div = document.getElementById('affichage');
var multiplicateur = document.getElementById('multiplicateur');
var autoclicker = document.getElementById('autoclick');
var score = 0;
var compteur = 1;
var prixMultiplicateur = 10;
var prixAutoclicker = 100;

function clic () {
    score += compteur;
    div.innerHTML = score;
}
    
function multiplication() {
    if (score >= prixMultiplicateur) {
        compteur += 1;
        score -= prixMultiplicateur;
        prix += 20;
        div.innerHTML = score + ' - vous avez acheté un multiplicateur !';
        multiplicateur.innerHTML = 'Multiplicateur x' + compteur + ' - prix : ' + prixMultiplicateur;
    }
    else {
        div.innerHTML = score + ' - désolé, vous n\'avez pas assez d\'argent pour acheter un multiplicateur.';
    }   
}

function autoclick() {
    

}
    
button.onclick = clic;
multiplicateur.onclick = multiplication;
autoclicker.onclick = autoclick;

setInterval("instructions", 1000);