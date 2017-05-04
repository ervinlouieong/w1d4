var words = ["ground", "control", "to", "major", "tom"];

function map(list,func){
  var array=[];
  for (var i =0; i < list.length; i++){
    var word = list[i];
    array.push(func(word));
  }
  return array;
}

var convert = function(word) {
  return word.length;
};

console.log(map(words,convert));