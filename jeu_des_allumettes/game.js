let remainingMatches = 50;
let currentPlayer = 1;

const input = document.getElementById("match-input");
const playBtn = document.getElementById("play-btn");
const remainingText = document.getElementById("remaining");
const playerText = document.getElementById("current-player");
const message = document.getElementById("message");

let nombreDeJoueurs = parseInt(prompt("Combien de joueurs vont jouer ? (minimum 2)")); // rajouter un mode multijoueur
if (nombreDeJoueurs >= 2) {
  console.log(`Le jeu va commencer avec ${nombreDeJoueurs} joueurs.`);
  // lancer le jeu
} else {
  alert("Merci de rentrer au moins deux joueurs pour lancer la partie4") // alert est une fonction il faut des parenthèses pas un =
}


playBtn.addEventListener("click", () => {
  const value = parseInt(input.value);

  // Validation : entre 1 et 6
  if (isNaN(value) || value < 1 || value > 6) {
    message.textContent = "Choisis un nombre entre 1 et 6.";
    return;
    
  }

  // Retire les allumettes
  if (value > remainingMatches) {
    message.textContent = `Tu ne peux retirer que ${remainingMatches} allumette(s) max !`;
    return;
  }

  remainingMatches -= value;
  remainingText.textContent = `Il reste ${remainingMatches} allumettes.`;
  message.textContent = "";

  // Fin du jeu
  if (remainingMatches === 0) {
    message.textContent = `Joueur ${currentPlayer} a gagné 🎉 !`;
    playBtn.disabled = true;
    input.disabled = true;
    return;
  }

  // Change de joueur
  currentPlayer = currentPlayer + 1
  if (currentPlayer > nombreDeJoueurs) // permet de revenir au début, au joueur 1 
    currentPlayer =1;
  playerText.textContent = `Joueur ${currentPlayer}, à toi !`;

  // Reset input
  input.value = "";
});







