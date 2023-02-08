const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, index) => total+index,0);
};

const multiply = function(array) {
  return array.reduce((total, index) => total*index,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let product = 1;
	for(let i = 1; i <= a; i++){
    product *= i;
  }
  return product;
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
