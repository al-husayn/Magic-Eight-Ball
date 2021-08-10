let userName = "Al-Hussein";
userName === "Al-Hussein"
  ? console.log(`Hello, ${userName}`)
  : console.log("Hello!");
const userQuestion = "Will I become the next Elon Musk in few years?";
console.log(`${userName} asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  default:
    eightBall = "Signs point to yes";
}

console.log(eightBall);
console.log("________________________________________");
console.log("if else statement below here");

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "My sources say no";
} else {
  eightBall = "Signs point to yes";
}
console.log(eightBall);
