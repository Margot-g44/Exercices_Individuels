// Etape 1 
// Créer une fonction qui demande un nombre à l’utilisateur à l’aide 
// d’un prompteur. (Attention tous les compilateurs en ligne ne permettent 
// pas la prise d’input, prendre celui dans l’énoncé si besoin).
//
// Stocker sa réponse dans une variable de type adéquat nommée givenNumber

// commencer par créer un prompt // 
// tout se fait sur le JS puis on appelle sur le html

function askNumber() { // fonction askNumber 
    let givenNumber = prompt("Choisis un nombre") // puis la variable pour le prompt
    return givenNumber // le retour qui est stocké dans la variable
}

// askNumber()
//console.log(askNumber()) // consolelog pour voir si ça fonctionne, on oublie pas les parenthèses violettes pour appeler la fonction

// Etape 2 
// Écrire une fonction qui prend en paramètre givenNumber et qui se 
// nommera didIWin

// Si le nombre est plus petit que 22, on affichera à l’utilisateur 
// “Plus grand”.
// Si le nombre est plus grand quand que 22 on affichera à 
// l’utilisateur “Plus petit”.
// Si le nombre est 22 on affichera “Bravo ! Vous avez deviné le nombre”
// 
function didIWin(nombreADeviner) { // fonction didIWin
    
    const saisie = prompt("Devine le nombre entre 1 et 100") 
    const nombreChoisi = Number(saisie);

    while (nombreChoisi !== nombreADeviner) {
        const saisie = prompt("Devine le nombre (entre 1 et 100) :");
        nombreChoisi = Number(saisie)

    if (isNaN(nombreChoisi)) { // if suivi de else if, càd du oui, puis oui, puis oui, puis ensuite juste else sans paramètre car c'est "non" ça équivaut à la fin
        alert("Ce n'est pas un nombre valide !");
    } else if (nombreChoisi < nombreADeviner) {
        alert("Plus grand !");
    } else if (nombreChoisi > nombreADeviner) {
        alert("Plus petit !");
    } else {
        alert("Bravo ! Vous avez deviné le nombre !")
       return true;
    }
    }
}



// Créer une fonction gamePlay qui gérera vos appels de fonctions et 
// la transmission de votre variable d’une fonction à une autre.

function gameplay() {
    const number = askNumber()
    while (!(didIWin(number))){
    }
}

gameplay() 


// Etape 3 - 
// Désormais la fonction didIWin devra retourner true si l’utilisateur 
// a trouvé le chiffre, false sinon.
// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 
// En revanche, si elle a retourné false, on redemande un chiffre à 
// l’utilisateur.

