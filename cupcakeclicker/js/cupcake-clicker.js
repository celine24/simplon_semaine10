var cupcake = document.getElementById('cupcake');
var egg = document.getElementById('egg');
var mold = document.getElementById('mold');
var mixer = document.getElementById('mixer');

var nbCupcake = document.getElementById('nbCupcake');
var nbEgg = document.getElementById('nbEgg');
var nbMold = document.getElementById('nbMold');
var nbMixer = document.getElementById('nbMixer');

var priceEgg = document.getElementById('priceEgg');
var priceMold = document.getElementById('priceMold');
var priceMixer = document.getElementById('priceMixer');

var ad = document.getElementById('ad');
var score = 0;
var nbEggs = 1;
var nbMolds = 1;
var nbMixers = 1;
var compteur = 1;
var costEgg = 10;
var costMold = 50;
var costMixer = 100;
var plural;


function convertPlural(nb) {
    if (nb > 1) {
        return 's';
    }
    else {
        return '';
    }
}


/*var mixer = 'mixer';*/

function cook () {
    score += compteur;
    plural = convertPlural(score);
    nbCupcake.innerHTML = score + ' cupcake' + plural;
}


function buyEgg() {
    if (score >= costEgg) {
        compteur += 1;
        score -= costEgg;
        costEgg *= 2;
        nbEggs += 1;
        plural = convertPlural(nbEggs);
        nbCupcake.innerHTML = score + ' cupcake' + plural;
        nbEgg.innerHTML = nbEggs + ' egg' + plural;
        priceEgg.innerHTML = 'cost ' + costEgg;
        ad.innerHTML = 'Congrats ! You bought another egg for ' + costEgg / 2 + '.';
    }
    else {
        ad.innerHTML = 'Not enough cupcakes for egg.';
    }
}
    
function buyMold() {
    if (score >= costMold) {
        compteur += 5;
        score -= costMold;
        costMold *= 2;
        nbMolds += 1;
        plural = convertPlural(nbMolds);
        nbCupcake.innerHTML = score + ' cupcake' + plural;
        ad.innerHTML = 'Congrats ! You bought another cake mold for ' + costMold / 2 + '.';
        nbMold.innerHTML = nbMolds + ' mold' + plural;
        priceMold.innerHTML = 'cost ' + costMold;
    }
    else {
        ad.innerHTML = 'Not enough cupcakes for mold.';
    }   
}

function buyMixer() {
    if (score >= costMixer) {
        setInterval(cook, 1000);
        score -= costMixer;
        costMixer *= 10;
        nbMixers += 1;
        plural = convertPlural(nbMixers);
        nbCupcake.innerHTML = score + ' cupcake' + plural;
        nbMixer.innerHTML = nbMixers + ' electric mixer' + plural;
        priceMixer.innerHTML = 'cost ' + costMixer;
        ad.innerHTML = 'Congrats ! You bought another electric mixer for ' + costMixer / 10 + '.';
    }
    else {
        ad.innerHTML = 'Not enough cupcakes for electric mixer.';
    }
}
    
cupcake.onclick = cook;
egg.onclick = buyEgg;
mold.onclick = buyMold;
mixer.onclick = buyMixer;

