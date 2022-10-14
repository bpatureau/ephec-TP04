function sortList() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur CANCEL pour abandonner !";
  const MSG_ABANDON = "Abandon demandé - Fin du programme !";
  const MSG_ERREUR = "Erreur, veuillez ne pas introduire de chiffres";

  let allInputs = [];
  let input;

  while (input != "STOP") {
    input = prompt(MSG_INPUT + (allInputs.length == 0 ? "" : `Valeurs actuelles : ${allInputs.join(", ")}`));

    if (input === null) {
      return alert(MSG_ABANDON);
    } else if (input == -1) {
      allInputs.pop();
      continue;
    } else {
      while (!isNaN(String(input)) && input != "STOP" && input == "") {
        input = prompt(MSG_ERREUR + (allInputs.length == 0 ? "" : `Valeurs actuelles : ${allInputs.join(", ")}`));
      }

      if (input) {
        input = input.replace(/[^a-zA-Z]/g, "");
      }
      if (input == "") {
        continue;
      }

      allInputs.push(input);
    }
  }

  allInputs.pop();
  allInputs.sort();

  alert("Votre liste : " + allInputs.join(", "));
}
