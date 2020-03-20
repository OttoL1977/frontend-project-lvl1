import randomNumber from '../random.js';
import flow from '../flow.js';

const description = 'What is the result of the expression?';

const operators = ['-', '+', '*'];
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

export default function brainCalc() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    const operator = currentOperator(operators);
    const newArr = [];
    const number = calculate(a, b, operator);
    newArr.push(`Question: ${a} ${operator} ${b}`);
    newArr.push(String(number));
    arr.push(newArr);
  }
  flow(arr, description);
}
