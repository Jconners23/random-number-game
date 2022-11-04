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