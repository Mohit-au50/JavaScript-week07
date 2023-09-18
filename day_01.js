// Q-1) Take an integer array(length >10) as input from the user, and use reduce function to find the average of the whole array.

// printed a message for user
console.log("Enter the length of the array in numbers:");

// declared a variable "input" it's value is user selected/ user input
let input = Number(require("prompt-sync")()());

// declared a variable "outputArr" as an empty array
let outputArr = [];

// printed a message for user
console.log("\nEnter the values of the array in numbers:");

// ram a for loop onto the input number and every time I'm incrementing it by +1
for (let i = 0; i < input; i++) {
  // if the user input is greater then 10 only then if block will be executed
  if (input > 10) {
    // declared a variable name "num" and it's value is user input
    let num = Number(require("prompt-sync")()());

    // finnaly the user input "num" valuse will be pushed in "outputArr" aand then we'll have our array to work with
    outputArr.push(num);
  }
  // if user input is lower or equals to number 10 then else block will get executed,
  // it will only print a message and break the loop after running once
  else {
    console.log("Enter a valid input above 10");
    break;
  }
}
// printed a message with the "outputArr" value
console.log("\nthe input array is:", outputArr);

// declared a variable "temp" in which I'm storing the reduce function value
// reduce function is just adding all the array values and returning sum of the array numbers
let temp = outputArr.reduce((acc, value) => acc + value);

// printed a message with temp value
console.log("the total value after reduce function is:", temp);

// decalred a "newOutput" variable and inside it I'm storing the value of temp/input value
let newOutput = temp / input;

// printed a message with the average of the user input array
console.log("\nthe array average is:", newOutput);
