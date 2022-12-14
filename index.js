let num = 0;

function generateRandomNumber() {
  let rnd = Math.floor(Math.random() * 100) + 1;
  //random number between 1 and 100
  return rnd;
}

function differenceFromAnswer(guess, answer) {
  if (guess < answer) {
    return "Too low";
  } else if (guess > answer) {
    return "Too high";
  } else {
    return "Correct";
  }
}

function makeAGuess(answer) {
  let guess, isInteger;
  do {
    guess = prompt("Enter your guess ");
    isInteger = (/^\d+$/).test(guess);
    if (isInteger) {
      return differenceFromAnswer(guess, answer);
    } else {
      console.log("Not an integer");
    }
  } while (!isInteger);
}

function playGame() {
  num = generateRandomNumber();
  let result;
  do {
    result = makeAGuess(num);
    console.log(result);
  } while (result != "Correct");
  return true;
}

playGame();