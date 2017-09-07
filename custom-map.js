//Implement your own version of the built-in array map function.
// Yours will take in two arguments.
// The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.


const map = function(arr, callback) {
  const newArray = []
  arr.forEach(function(currentValue) {
    let resultOfFunc = callback(currentValue)
    newArray.push(resultOfFunc)
  })
  console.log(newArray)
}


//EXAMPLES

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// And the following is what the above implementations should return, in order.

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]



