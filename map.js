//element gulokke double kore output korte hobe
const numbers = [4, 5, 7, 2];
const output = [];

// function doubleOld(number){
//     return number*2
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
  const result = number;
  output.push(result);
}
console.log(output);

//function use kore element er double

const numbers = [53, 66, 54, 52, 51, 86];

const output = [];
for (const number of numbers) {
  const result = doubleIt(number);
  output.push(result);
}
console.log(output);

// first way to double  an array
const numbers = [4, 5, 6];
const output = [];
for (const number of numbers) {
  const result = number * 2;
  output.push(result);
}
console.log(output); //ans [8,10,12]

//**2  second way to doubble an array using normal function
const numbers = [4, 5, 6];
const output = [];
for (const number of numbers) {
  const result = double(number);
  output.push(result);
}
function double(number) {
  //numbers er proti ta element number ke parameter disi
  return number * 2;
}
console.log(output);

//**3   third way to double numbers array element using arrow function
const numbers = [4, 5, 6];
const double = number => number * 2;

const output = [];
for (const number of numbers) {
  const result = double(number);
  output.push(result);
}

console.log(output);

//***4th way to double an array element using map
const numbers = [4, 5, 6];
const double = number => number * 2;
const output = numbers.map(double);
console.log(output);

//** 5th wway to double  an  array usinng map
const numbers = [4, 5, 6];
const output = numbers.map(x => x * 2);
console.log(output);
