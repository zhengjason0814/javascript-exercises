const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, nextOp) => total + nextOp, 0);
};

const multiply = function(arr) {
  product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(a,power) {
	return a ** power;
};

const factorial = function(a) {
  let total = 1;
	for (let i = 1; i <= a; i++) {
    total *= i;
  }
  return total;
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
