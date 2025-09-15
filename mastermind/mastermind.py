import numpy as np

print("Welcome to Mastermind!")

# 1️⃣ Couleurs disponibles et combinaison secrète
COULEURS = ["red", "blue", "yellow", "pink, black, white, green, orange"]
combinaison_secrete = np.array(["blue", "red", "pink", "yellow"])  # tu peux la rendre aléatoire si tu veux
max_essai = 12
essai = 0

# 2️⃣ Fonction pour vérifier la validité de la saisie
def saisie_valide(combinaison):
    if len(combinaison) != 8:
        return False
    for couleur in combinaison:
        if couleur not in COULEURS:
            return False
    return True

# 3️⃣ Fonction pour vérifier bien placés / mal placés avec NumPy
def verifier_combinaison_numpy(combinaison_utilisateur, combinaison_secrete):
    utilisateur = np.array(combinaison_utilisateur)
    secret = np.array(combinaison_secrete)

    # Bien placés
    comparaison = secret == utilisateur
    bien_places = np.sum(comparaison)

    # Mal placés
    couleurs_secretes_non_placees = secret[~comparaison]
    couleurs_utilisateur_non_placees = utilisateur[~comparaison]

    mal_places = 0
    for couleur in couleurs_utilisateur_non_placees:
        if couleur in couleurs_secretes_non_placees:
            mal_places += 1
            # Retirer la couleur trouvée pour ne pas compter deux fois
            index = np.where(couleurs_secretes_non_placees == couleur)[0][0]
            couleurs_secretes_non_placees[index] = None

    return bien_places, mal_places

# 4️⃣ Fonction pour vérifier la victoire
def est_gagne(bien_places):
    return bien_places == 4

# 5️⃣ Boucle principale du jeu
while essai < max_essai:
    combinaison_utilisateur = input(
        f"Essai {essai+1}/{max_essai} - Entrez 4 couleurs parmi {COULEURS} séparées par des espaces : "
    ).split()

    if not saisie_valide(combinaison_utilisateur):
        print("Saisie invalide ! Assure-toi d'utiliser exactement 4 couleurs valides.\n")
        continue

    bien_places, mal_places = verifier_combinaison_numpy(combinaison_utilisateur, combinaison_secrete)
    print(f"Bien placés : {bien_places} | Mal placés : {mal_places}\n")

    if est_gagne(bien_places):
        print("Bravo, vous avez trouvé la combinaison !")
        break

    essai += 1

if essai == max_essai and not est_gagne(bien_places):
    print("Perdu ! La combinaison était :", combinaison_secrete)

