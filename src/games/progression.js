import getRandomNumber from '../random.js';
import flow from '../flow.js';

const description = 'What number is missing in the progression?';
const numbersOfGames = 3;
let newArr = [];
let answerHiddenNumber;

function getPeriod() {
  let numberOne = getRandomNumber(1, 20);
  const periodNum = getRandomNumber(1, 100);
  for (let k = 0; k < 10; k += 1) {
    newArr.push(numberOne);
    numberOne += periodNum;
  }
  return newArr;
}

function getHiddenNumber() {
  const numberHidden = getRandomNumber(2, 8);
  for (let g = 0; g < newArr.length; g += 1) {
    if (g === numberHidden) {
      answerHiddenNumber = newArr[g];
    }
  } return answerHiddenNumber;
}

export default function getBrainProgression() {
  const arr = [];
  for (let i = 0; i < numbersOfGames; i += 1) {
    getPeriod();
    const newArrNum = [];
    answerHiddenNumber = getHiddenNumber();
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
