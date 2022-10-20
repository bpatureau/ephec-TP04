/*
Classe:
1TL2

Groupe:
Simon Fontaine
Diego Milla
Timothy Truong
Bastien Patureau
Louis Blatt

Énoncé:
Créer un trieur de liste par ordre alphabétique:

Vérifier qu'il n'introduit que des lettres (pas de chiffres ni de caractères spéciaux)
Introduire STOP pour obtenir la liste triée
Introduire -1 pour effacer le mot précédemment introduit
Cliquez sur le bouton CANCEL pour abandonner le programme

*/

function sortList() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur CANCEL pour abandonner !";
  const MSG_ABANDON = "Abandon demandé - Fin du programme !";
  const MSG_ERREUR = "ERREUR ! Veuillez introduire des lettres de A à Z et contenant moins de 25 caractères !";

  const MAX_WORD_LENGTH = 25;

  let allInputs = [];
  let input;

  while (input != "STOP") {
    input = prompt(MSG_INPUT + (allInputs.length == 0 ? "" : ` Valeurs actuelles : ${allInputs.join(", ")}`));

    while (!isNaN(input) || input.length > MAX_WORD_LENGTH) {
      if (input === null) {
        break;
      } else if (input == -1) {
        break;
      }

      input = prompt(MSG_ERREUR + (allInputs.length == 0 ? "" : ` Valeurs actuelles : ${allInputs.join(", ")}`));
    }

    if (input === null) {
      return alert(MSG_ABANDON);
    }

    if (input == -1) {
      allInputs.pop();
      continue;
    }

    if (input) {
      input = input.replace(/[^a-zA-Z]/g, "");
    }
    if (input == "") {
      continue;
    }

    allInputs.push(input);
  }

  allInputs.pop();

  allInputs.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  alert("Votre liste : " + allInputs.join(", "));
}
