import readlineSync from 'readline-sync';

export default function brainCalc() {
  const operators = ['-', '+', '*'];
  function randomNumber(min = 0, max = 100) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  }
  const currentOperator = () => {
    const k = randomNumber(0, operators.length - 1);
    return operators[k];
  };
  const calculate = (a, b, oper) => {
    switch (oper) {
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '+':
        return a + b;
      default: return null;
    }
  };

  console.log('Welcome to the Brain Games!');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    const operator = currentOperator(operators);
    const value = calculate(a, b, operator);
    console.log(`Question: ${a} ${operator} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    if (+value === +answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${value}".`);
      console.log(`Let's try again, ${actual}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${actual}!`);
    }
  }
}
