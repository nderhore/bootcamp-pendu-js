/**
 *
 * Le jeu du pendu. Vous devez :
 * - demander un nombre d'essai
 * - demander un mot à deviner
 *
 * Une fois que ces informations sont définis, je peux proposer autant de voyelle ou consonne que je souhaite, tant que :
 * - je n'ai pas atteint le nombre d'essai maximum
 * - le mot n'a pas été deviné
 *
 * Si j'ai atteint le nombre maximum, ou, que le mot n'a pas été deviné, je montre via une balise alert le mot qui était à trouver.
 *
 */


// Demander à l'utilisateur le mot mystère, puis, je le met en minuscule
let mot = prompt("Entrez le mot mystère : ").toLowerCase();

// Demander à l'utilisateur le nombre de tentatives que je converti en nombre
let tentativesRestantes = parseInt(prompt("Entrez le nombre de tentatives : "));

// Initialiser un tableau pour garder la trace des lettres devinées
let lettresDevinees = [];

//je met dans le tableau autant de "_" que mon mot a deviner possede de lettre
for (let i = 0; i < mot.length; i++) {
    lettresDevinees[i] = "_";
}

// Initialiser un tableau pour les lettres utilisées
let lettresUtilisees = [];


// Boucle principale du jeu
// on verifie qu'il reste des tentatives et qu'il reste au moins une lettre à trouver
while (tentativesRestantes > 0 && lettresDevinees.includes("_")) {

    // j'affiche l'etat actuel de la recherche
    console.log(lettresDevinees);
    console.log(`Lettres utilisées: ${lettresUtilisees.join(", ")}`);
    console.log(`Tentatives restantes: ${tentativesRestantes}`);

    // Demander au joueur de deviner une lettre
    let lettre = prompt("Devinez une lettre : ").toLowerCase();

    // Vérifier si la lettre a déjà été utilisée
    if (lettresUtilisees.includes(lettre)) {
        console.log("Vous avez déjà utilisé cette lettre. Essayez une autre.");
        //je passe à l'itération suivante
        continue;
    }

    // Ajouter la lettre à la liste des lettres utilisées
    lettresUtilisees.push(lettre);

    // Vérifier si la lettre fait partie du mot
    if (mot.includes(lettre)) {
        // Révéler toutes les occurrences de la lettre dans le mot
        for (let i = 0; i < mot.length; i++) {
            if (mot[i] === lettre) {
                lettresDevinees[i] = lettre;
            }
        }
    } else {
        // Réduire le nombre de tentatives restantes
        tentativesRestantes--;
        console.log("Lettre incorrecte.");
    }
}

// Afficher le résultat final du jeu
if (!lettresDevinees.includes("_")) {
    console.log(`Félicitations ! Vous avez deviné le mot : ${mot}`);
} else {
    console.log(`Désolé, vous avez perdu. Le mot était : ${mot}`);
}



