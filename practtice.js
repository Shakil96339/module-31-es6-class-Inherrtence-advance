let number = 20;
const name = "Shakil";
const product = { name: "Phone", price: 16000, color: "black" };
const biography = `My name is ${name}. I have a ${product.name} which price is ${product.price}`;
console.log(biography);

//work 3.1
const output = x => x / 5;
const num = 54;
console.log(output(num));

//work 3.2
const output = (x, y) => {
  const add1 = x + 2;
  const add2 = y + 2;
  const multiply = add1 * add2;
  return multiply;
};
console.log(output(5, 6));

//wwrk 3.2 (optional)
const output = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(output(5, 6));

const output = (x, y, z) => x * y * z;
const result = output(x, y, z);
console.log(result(4, 5, 6));
