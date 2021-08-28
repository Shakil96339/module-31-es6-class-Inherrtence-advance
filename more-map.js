// get the string array length of the elements
const friends = ["shakil", "hossain", "abdul", "dip", "sohan"];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);

//
const products = [
  { name: "bottle", price: 50, color: "yellow" },
  { name: "phone", price: 13500, color: "green" },
  { name: "watch", price: 3000, color: "red" },
  { name: "sticky note", price: 30, color: "green" },
  { name: "glass", price: 15, color: "white" },
];

const productName = products.map(product => product.name);
const productprice = products.map(product => product.price);
console.log(productName, productprice);
