function sortList() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur CANCEL pour abandonner !";
  const MSG_ABANDON = "Abandon demandé - Fin du programme !";
  const MSG_ERREUR = "ERREUR ! Veuillez introduire des lettres de A à Z !";

  let allInputs = [];
  let input;

  while (input != "STOP") {
    input = prompt(MSG_INPUT + (allInputs.length == 0 ? "" : ` Valeurs actuelles : ${allInputs.join(", ")}`));

    while (!isNaN(input)) {
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
