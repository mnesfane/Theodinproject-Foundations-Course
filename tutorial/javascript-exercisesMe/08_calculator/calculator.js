const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, num) => acc + num, 0)
};

const multiply = function(a, b) {
  return a * b;
  
};

const power = function(base, exponent) {
  return base**exponent;
};

const factorial = function(num) {
  let f = 1;
  for (let i = 1; i <= num; i++){
    f *= i;
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
