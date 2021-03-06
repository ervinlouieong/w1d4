// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  //for (var i = 0; i < arr.length; i++) {
  arr.forEach(function(name,i) {
    if (name === "Waldo") {
        found(i);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  //console.log("Found him!);
  console.log(`Found Waldo at index %d!`,i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
