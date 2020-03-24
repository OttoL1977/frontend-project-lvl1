import getRandomNumber from '../random.js';
import flow from '../flow.js';

const description = 'What is the result of the expression?';
const numbersOfGames = 3;

const operators = ['-', '+', '*'];
const selectOperators = () => {
  const randomNumber = getRandomNumber(0, operators.length - 1);
  return operators[randomNumber];
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

export default function brainCalc() {
  const arrAnswer = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operator = selectOperators(operators);
    const newArr = [];
    const numberCorrect = calculate(a, b, operator);
    newArr.push(`Question: ${a} ${operator} ${b}`);
    newArr.push(String(numberCorrect));
    arrAnswer.push(newArr);
  }
  flow(arrAnswer, description);
}
