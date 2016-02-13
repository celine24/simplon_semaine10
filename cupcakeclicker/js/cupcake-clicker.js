var button = document.getElementById('button');
var div = document.getElementById('affichage');
var multiplicateur = document.getElementById('multiplicateur');
var autoclicker = document.getElementById('autoclick');
var score = 0;
var compteur = 1;
var prixMultiplicateur = 50;
var prixAutoclicker = 100;

function clic () {
    score += compteur;
    div.innerHTML = score;
}
    
function multiplication() {
    if (score >= prixMultiplicateur) {
        compteur += 1;
        score -= prixMultiplicateur;
        prixMultiplicateur += 50;
        div.innerHTML = score + ' - vous avez acheté un multiplicateur !';
        multiplicateur.innerHTML = 'Multiplicateur x' + compteur + ' - prix : ' + prixMultiplicateur;
    }
    else {
        div.innerHTML = score + ' - désolé, vous n\'avez pas assez d\'argent pour acheter un multiplicateur.';
    }   
}

function autoclick() {
    if (score >= prixAutoclicker) {
        setInterval(clic, 1000);
        prixAutoclicker += 100;
        score -= prixAutoclicker;
        div.innerHTML = score + ' - vous avez acheté un autoclicker !';
        autoclicker.innerHTML = 'Autoclicker - prix : ' + prixAutoclicker;
    }
    else {
        div.innerHTML = score + ' - désolé, vous n\'avez pas assez d\'argent pour acheter l\'autoclicker.';
    }
}
    
button.onclick = clic;
multiplicateur.onclick = multiplication;
autoclicker.onclick = autoclick;

