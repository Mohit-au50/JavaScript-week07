// Q-1) Write a program to pass spread operator as argument and rest operator as parameter of a function.

// declared a variable name "spreadArgu" as an array it will be used int the function parameter later on
let spreadArgu = [1, 2, 3, 4, 5];
// printed a massage
console.log("spread argument is an array it containes the values:", spreadArgu);

// declared a function "play" with parameter value as a rest operaator
// rest opertater is used when we are passing multiple parameter values
function play(...restPara) {
  // I'm just returning the "restPara" here.
  return restPara;
}
// printed a massage
console.log("function parameters are:", [6, 7, 8, 9]);

// declared a variable "output" inside it I stored the value of play function with it's parameter's
let output = play(...spreadArgu, 6, 7, 8, 9);

// printed a massage
console.log(
  "I used spread operator to add the values of 'spreadArgu' & 'restPara'"
);

// printed the output
console.log("result:", output);
