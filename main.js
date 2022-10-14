function test() {
  const MSG_INPUT = "Veuillez introduire votre mot, appuyez sur RETURN pour terminer !";

  let allInputs = [];
  let input;

  while (input !== "0") {
    input = prompt(MSG_INPUT);

    if (input === null) {
      return console.log("Fin du programme!");
    } else if (input == -1) {
      allInputs.pop();
      continue;
    } else {
      while (!isNaN(String(input))) {
        input = prompt(MSG_INPUT);
      }

      allInputs.push(input);

      console.log(input);
      console.log(allInputs);
    }
  }

  console.log("Votre liste : " + allInputs);
}

/*
return : on stop le process
-1 on efface le dernier
0 = terminer
*/
