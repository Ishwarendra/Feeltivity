// Utility function to get random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  // 16^6 - 1
  var randomColor = getRandomInt(16777216 - 1).toString(16);
  randomColor = parseInt(randomColor, 16);
  return randomColor;
}

// select a random emoji from array and returns it
function getRandomElementFromArray(a) {
  if (a.length === 0) return null;

  var index = getRandomInt(a.length - 1);
  return a[index];
}

export { getRandomColor, getRandomElementFromArray, getRandomInt };