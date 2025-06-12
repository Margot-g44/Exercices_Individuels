// Etape 2 - premier code 

// let firstName = "Beyonce"
// let message = "Bonjour ! " + firstName
// console.log(firstName)
// console.log(message)

// Etape 3 - dans une fonction
// Encapsule ton code précédent dans une fonction nommée sayHello() 
// encapsuler = Encapsuler son code dans une fonction, c’est mettre un 
// bloc de code dans une "boîte" qu’on peut réutiliser ou appeler quand 
// on veut, au lieu qu’il s’exécute tout de suite.

let firstName = prompt("Quel est votre prénom ?") // le prompt se fait au tout début du code, c'est la première chose qu'on demande sur la page
// la variable "let firstName = "Beyonce" n'est plus utile puisqu'on veut le nom de l'utilateur, donc on la met en commentaire et on créer
// une nouvelle variable avec un prompt qui demande le prénom à l'utilisateur 

function sayHello(hour) {
   // let firstName = "Beyonce"
   // let message = "Bonjour " + firstName + " ! "
    if (hour >= 18) {
        document.querySelector('h1').innerText = "Bonsoir " + firstName + " ! "
        console.log("Bonsoir " + firstName + " ! ")
    } else {
        document.querySelector('h1').innerText = "Bonjour " + firstName + " ! "; // le document.query fonctionne comme un console log sauf que c'est lié au h1 du html donc écrit sur la page 
        console.log("Bonjour " + firstName + " ! ")
    }
}
 // console.log(message)
// sayHello(8);
// sayHello(15)
sayHello(15)


// Etape 4 - (optionnel) un second paramètre
// Ajoute un second paramètre hour à la fonction sayHello()
// Ajoute une condition dans ta fonction pour que lorsque hour 
// est supérieur ou égal à 18H, on dise Bonsoir plutôt que Bonjour 
// dans le message

