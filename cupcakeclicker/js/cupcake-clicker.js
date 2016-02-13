var button = document.getElementById('button');
var div = document.getElementById('affichage');
var multiplication = document.getElementById('multiplicateur');
var score = 0;
var compteur = 1;

    button.addEventListener('click', function() {
        score += compteur;
        div.innerHTML = score;

    }, false);
    
    multiplication.addEventListener('click', function() {
        if (score >= 10) {
            compteur += 1;
            score -= 10;
            div.innerHTML = score + ' - vous avez acheté un multiplicateur !';
            multiplication.innerHTML = 'Multiplicateur x' + compteur;
        }
        else {
            div.innerHTML = score + ' - désolé, vous n\'avez pas assez d\'argent pour acheter un multiplicateur.';
        }   
    }, false);

