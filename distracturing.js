//simple object detect
const fish = {
  id: 432,
  name: "Hilsha",
  phone: 2321412412,
  address: "chandpur",
  dress: "silver",
};

const id = fish.id;
const name = fish.name;
const address = fish.address;

console.log(id, name, address);

//object detect/distructuring using ES6
const school = {
  name: "Baniachow jb High school",
  class: 5,
  Teacher: { name: "Shah-jahan sir", id: 32, teacherOf: "mathematics" },
  Teacher2: { name: "Shankar Sir", id: 342, teacherOf: "English" },
};
//find an id using normal way
const teacher = school.Teacher.teacherOf;
console.log(teacher);

//find an id using ES6
const { id, teacherOf } = school.Teacher2;
console.log(id, teacherOf);
