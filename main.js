function sortList() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur CANCEL pour abandonner !";
  const MSG_ABANDON = "Abandon demandé - Fin du programme !";
  const MSG_ERREUR = "Erreur, réintroduisez votre mot !";

  let allInputs = [];
  let input;

  while (input != "STOP") {
    input = prompt(MSG_INPUT);

    if (input === null) {
      return alert(MSG_ABANDON);
    } else if (input == -1) {
      allInputs.pop();
      console.log(allInputs);
      continue;
    } else {
      while (!isNaN(String(input)) && input != "STOP" && input == "") {
        input = prompt(MSG_ERREUR);
      }

      if (input) {
        input = input.replace(/[^a-zA-Z]/g, "");
      }

      allInputs.push(input);
    }
  }

  allInputs.pop();
  allInputs.sort();

  alert("Votre liste : " + allInputs.join(", "));
}
