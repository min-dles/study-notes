$(function onReady() {
  console.log('the JavaScript and jQuery are connected 👾');
  console.log('Let\'s count some numbers with recursion! Will count from 1 to 10.');
  countingNumbersPos(1, 10);
  countingNumbersNeg(1, 10);
})

// The next two functions are a demonstration on syntax and reversing logic from positive to negative, using recursion, and the call stack. 
function countingNumbersPos(startNum, endNum){
  if (startNum > endNum) {
    console.log('Learned about the call stack and recursion today. Here is the start number:', startNum, ' and here is the end number:', endNum, ' and the current return is an empty array:', []);
    return [];
  } else {
    const numbers = countingNumbersPos(startNum + 1, endNum);
    numbers.unshift(startNum);
    console.log('Count from ten down:', startNum, 'end:', endNum, 'and numbers array:', numbers);
    return numbers;
  }
}
// part two of the exercise above: 
function countingNumbersNeg(startNum, endNum){
  if (endNum < startNum) {
    console.log('Here\'s counting up:', startNum, endNum);
    return [];
  } else {
    const numbers = countingNumbersNeg(startNum, endNum - 1);
    numbers.push(endNum);
    console.log('Reverse it:', startNum,'and', endNum, numbers);
    return numbers;
  }
}