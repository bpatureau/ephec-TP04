function test() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur RETURN pour terminer !";
  const MSG_ABANDON = "Abandon demandé - Fin du programme !";
  const MSG_ERREUR = "Erreur, veuillez ne pas introduire de chiffres";

  let allInputs = [];
  let input;

  while (input != 0) {
    input = prompt(MSG_INPUT);

    if (input === null) {
      return console.log(MSG_ABANDON);
    } else if (input == -1) {
      allInputs.pop();
      console.log(allInputs);
      continue;
    } else {
      while (!isNaN(String(input)) && input != 0) {
        input = prompt(MSG_ERREUR);
      }

      input = input.replace(/[^a-zA-Z]/g, "");

      allInputs.push(input);

      console.log(input);
      console.log(allInputs);
    }
  }

  allInputs.pop();
  allInputs.sort();

  console.log("Votre liste : " + allInputs);
}
