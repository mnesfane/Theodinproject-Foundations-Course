const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, value) => accumulator + value, 0)
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	let result = 1
  for (let i = 2; i < num; i++){
    result *= i 
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
