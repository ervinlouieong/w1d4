var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(pyth) {
  var x2 = pyth.x;
  var y2 = pyth.y;
  result = (x2 * x2) + (y2 * y2);
  return Math.sqrt(result);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);