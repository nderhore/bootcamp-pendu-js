# Jeu du Pendu

## Description

Le jeu du pendu est un jeu classique où le joueur doit deviner un mot en proposant des lettres. 
Le joueur a un nombre limité de tentatives pour deviner toutes les lettres du mot. 
Si le joueur devine correctement toutes les lettres avant de manquer de tentatives, il gagne. Sinon, il perd.

## Prérequis

- Connaissance de base en JavaScript
- Savoir comment utiliser des boucles `for` et `while`
- Compréhension des structures conditionnelles `if` et `else`
- Notions de base sur les tableaux et les chaînes de caractères

## Instructions

Cloner le dépôt ou copier le script :
   Clonez ce dépôt ou copiez le script fourni dans votre éditeur de code préféré.
```bash
git clone https://github.com/nderhore/bootcamp-pendu-js
cd bootcamp-pendu-js
```


## Étapes détaillées pour résoudre le jeu

1. **Initialisation** :
   - Demander au joueur d'entrer le mot mystère via un `prompt`.
   - Demander au joueur de spécifier le nombre de tentatives via un `prompt`.
   - Créer un tableau pour stocker les lettres devinées, initialisé avec des underscores (`_`).
   - Créer un tableau pour les lettres utilisées par le joueur.

2. Boucle principale du jeu :
   - On affiche l'etat actuel de la chose
        - par exemple, si le mot ets "mystere", j'afficherai en début de partie "_______"
        - au fur et à mesure on met les lettres, si j'ai deviné m alors cela deviens "m______"
   - Tant que le joueur a des tentatives restantes et qu'il reste des lettres à deviner :
     - Afficher l'état actuel. (via un console.log)
     - Demander au joueur de deviner une lettre.
     - Vérifier si la lettre a déjà été utilisée.
        - si elle a deja été utilisée, on demande une autre lettre
     - Ajouter la lettre à la liste des lettres utilisées.
     - Vérifier si la lettre fait partie du mot :
       - Si oui, mettre à jour les lettres devinées.
       - Si non, réduire le nombre de tentatives restantes.

4. Fin du jeu :
   - Si le joueur devine toutes les lettres, afficher un message de félicitations.
   - Sinon, afficher un message de défaite et révéler le mot.
