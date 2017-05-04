var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sorted = students.sort(function(x,y) {
  if(x.name < y.name){
    return 1;
  } if (x.name > y.name) {
    return -1;
  } if (x.name === y.name) {
    return y.age - x.age;
  }
});

console.log(sorted);