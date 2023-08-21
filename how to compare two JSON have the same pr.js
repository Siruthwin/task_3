//how to compare two JSON have the same proerties without order?

let obj1 = {name:"person",age:5};
let obj2 = {age:5,name:"person"};

// console.log(typeof[obj]);

JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(true);
