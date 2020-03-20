import randomNumber from '../random.js';
import flow from '../flow.js';

const description = 'What number is missing in the progression?';
let newArr = [];
let answerHiddenNumber;

function period() {
  let numberOne = randomNumber(1, 20);
  const periodNum = randomNumber(1, 100);
  for (let k = 0; k < 10; k += 1) {
    newArr.push(numberOne);
    numberOne += periodNum;
  }
  return newArr;
}

function hiddenNumber() {
  const numberHidden = randomNumber(2, 8);
  for (let g = 0; g < newArr.length; g += 1) {
    if (g === numberHidden) {
      answerHiddenNumber = newArr[g];
    }
  } return answerHiddenNumber;
}

export default function brainProgression() {
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    period();
    const newArrNum = [];
    answerHiddenNumber = hiddenNumber();
    let str = '';
    for (let g = 0; g < newArr.length; g += 1) {
      if (newArr[g] === answerHiddenNumber) {
        str += '.. ';
      } else {
        str += newArr[g];
        str += ' ';
      }
    }
    newArrNum.push(String(str));
    newArrNum.push(String(answerHiddenNumber));
    arr.push(newArrNum);
    newArr = [];
  }
  flow(arr, description);
}
