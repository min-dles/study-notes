$(function onReady() {
  console.log('the JavaScript and jQuery are connected 👾');
});

// RECURSION & CALL STACK PRACTICE (comment out when focused on other sections)
// The next two functions are a demonstration on syntax and reversing logic from positive to negative, using recursion, and the call stack. 
/* function countingNumbersPos(startNum, endNum) {
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
function countingNumbersNeg(startNum, endNum) {
  if (endNum < startNum) {
    console.log('Here\'s counting up:', startNum, endNum);
    return [];
  } else {
    const numbers = countingNumbersNeg(startNum, endNum - 1);
    numbers.push(endNum);
    console.log('Reverse it:', startNum, 'and', endNum, numbers);
    return numbers;
  }
}

console.log('Let\'s count some numbers with recursion! Will count from 1 to 10, calling both functions below...!');
countingNumbersPos(1, 10);
countingNumbersNeg(1, 10); 
*/

// ASYNC/AWAIT PRACTICE BELOW:
// krusty krab pizza details:
let inventory = {
  fruits: ["olives", "pineapple", "eggplant", "green pepper"],
  veggies: ["basil", "onions", "corn"],
  fungi: ["mushrooms"],
  dough: ["original", "wheat"],
  sauce: ["pesto", "tomato"],
  meats: ["sausage", "pepperoni", "bacon", "ham", "chicken"],
  seafood: ["anchovies", "shrimp"],
  cheese: ["cheese", "no cheese"]
};

// TOGGLE THIS Boolean TO SEE DIFFERENT BEHAVIORS 
let is_shop_open = true;

// SECTION 1 - comment out when focusing on other sections
/* async function order() {
  try {
    await fakeFunction;
  }
  catch (error) {
    console.log("fakeFunction doesn't exist", error)
  }

  finally {
    console.log("runs code no matter what");
  }
}

order().then(() => {
  console.log("This is a test for .then and async/await practice");
});
*/

// SECTION 2 - async practice (comment out when focusing on different section) 
/* let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        console.log('Which toppings do you want?')
      );
    }, 3000);
  });
};

async function kitchenSchedule() {
  console.log("A")
  console.log("B")
  console.log("C")

  await toppings_choice()

  console.log("D")
  console.log("E")
};

kitchenSchedule();

console.log("washing the dishes");
console.log("cleaning the tables");
console.log("taking customer orders"); 
*/

// SECTION 3 - continuing async/await lesson (comment out when focusing on other sections):
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log("krusty krab pizza is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(1000);
    console.log("Welcome to krusty krab pizza! What would you like?");

    await time(2000);
    console.log(`Customer chose this topping: ${inventory.fruits[2]}`);
    
    await time(1000);
    console.log("start making some pizzas~");

    await time(1000);
    console.log(`Put sauce on the pizza: ${inventory.sauce[1]}`);

    await time(1000);
    console.log(`Add cheese? ${inventory.cheese[0]}`);

    await time(1000);
    console.log(`Add topping(s): ${inventory.fruits[2]}`);

    await time(2000);
    console.log("Cook the pizza.");

    await time(2000);
    console.log("Serve the pizza to the customer.");
  }
  catch (error) {
    console.log("The customer left.", error);
  }
  finally {
    console.log("Day is over, krusty krab pizza is closed")
  }
}

// call the function below: 
kitchen();

// Placeholder: new notes to be added