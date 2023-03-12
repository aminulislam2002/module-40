// Syntax error example 01
function isBigger(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}
// } // this code return error
const result = isBigger(11);
// console.log(result);

// Syntax error example 02
// const sum = a, b => a+b; // this code return error
const sum = (a, b) => a + b;
const res = sum(3, 5);

// Syntax errror example 03
const musk = {
  name: "elon",
//   age: 53 // this code return error
  age: 53,
  job: "tesla",
};
console.log(musk.age);

// Syntax error example 04
// const num = [12, 13, 21, 3 34, 4, 4]; // this code return error

// Syntax error example 05
// for (let i = 0; i < 10 i++) {} // this code return error

// Syntax error example 06
const numbers = [12, 13, 21, 3, 34, 4, 4];
for (let i = 0; i < 10; i++) {
  // const n = numbers[i; // this code return error
  const n = numbers[i];
}
console.log(numbers);

// if (numbers.length > 5) && (numbers[0] === 5){} // this code return error

if (numbers.length > 5 && numbers[0] === 5) {
}
