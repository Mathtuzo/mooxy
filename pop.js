let point = 0; // Variable point, modifiable

function reponse(resultat) {
    // Sélectionner tous les boutons avec la classe 'reponse'
    var boutons = document.querySelectorAll('.reponse');

    var mauvais = document.querySelectorAll('.false');
    var bon = document.querySelectorAll('.true');

    // Appliquer la couleur
    bon.forEach(function(bouton) {
        bouton.style.backgroundColor = '#00DC9D';
    });

    mauvais.forEach(function(bouton) {
        bouton.style.backgroundColor = '#FF475D';
    });

    // Mettre à jour le score selon la réponse
    if (resultat === true) {
        point += 12; // Ajoute 12 points si la réponse est correcte
    } else if (resultat === false) {
        point -= 5; // Soustrait 5 points si la réponse est incorrecte
    }

    // Désactiver tous les boutons après avoir répondu
    boutons.forEach(function(bouton) {
        bouton.disabled = true;
    });

    // Afficher le score dans la console
    console.log('Score actuel : ' + point);
    document.getElementById('score-display').textContent = 'Score actuel : ' + point;
}

function next() {
    const fini = document.getElementById('quest1');
    const commence = document.getElementById('quest2');

    fini.style.display = 'none';
    commence.style.display = 'block';
    var boutons = document.querySelectorAll('.reponse');
    boutons.forEach(function(bouton) {
        bouton.disabled = false;
    })
    boutons.forEach(function(bouton) {
        bouton.style.backgroundColor = '#FFFFFF';
    });


}