function afficherEtoiles(n) {
  //   for (let i = 0; i < n ; i++)

  console.log(`${"*".repeat(n)}`); // à faire pour chaque étoile
}

// afficherEtoiles(2);
// afficherEtoiles(5);

function afficherRectangle(hauteur, largeur) {
  for (let i = 1; i <= hauteur; i++) {
    console.log(`${"*".repeat(largeur)}`);
    
  }

  // pour chaque "étage" de la hauteur
  //    appeler printEtoile
}

// afficherRectangle(5, 5);

function afficherTriangleDroite(hauteur) {
    for (let i = 0; i < hauteur; i++) {
    console.log(`${"*".repeat(i)}`+"\\")
    // afficherRectangle(5,5)
  } 
}

// afficherTriangleDroite(5)



// function afficherTriangleGauche(hauteur, espace) {
//         console.log(`${" ".repeat(espace + 1)}`+ "+")
//         for (let i = 0; i < hauteur; i++) {
//     console.log(`${" ".repeat(espace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`)
//     // afficherRectangle(5,5)
//   } 
// }
//   // En s'inspirant de la fonction afficherTriangleDroite(), 
//   // comment aligner correctement les etoiles sur le bord de droite ?

// afficherTriangleGauche(5, 5)


function afficherPointeSapin(hauteur, espace) {
        console.log(`${" ".repeat(espace + 1)}`+ "+")
        for (let i = 0; i < hauteur; i++) {
    console.log(`${" ".repeat(espace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`)
    // afficherRectangle(5,5)
  } 
}

// afficherPointeSapin(4,5)


function afficherSapin(etage, hauteur_etage, espace) {
  // à remplir
  
  
  
  console.log(`${" ".repeat(espace + 1)}`+ "+")
  for (let y = 0;  y < etage; y++){
        for (let i = y; i < hauteur_etage+y; i++) {
    console.log(`${" ".repeat(espace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`)
    // afficherRectangle(5,5)
  } 
  
}
  }
// prendre la valeur de la fin -1 puis continuer à partir de ce nombre

afficherSapin(3, 3, 5)


function afficherSapin(etage, hauteur_etage, espace) {
  for (let t = 0; i < t ; i++)
  console.log()
  console.log(`${" ".repeat(espace + 1)}`+ "+")
  for (let y = 0;  y < etage; y++){
        for (let i = y; i < hauteur_etage+y; i++) {
    console.log(`${" ".repeat(espace - i)}/${"*".repeat(i)}|${"*".repeat(i)}\\`)
    // afficherRectangle(5,5)
  } 
  
}
  }
