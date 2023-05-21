const input = "i hate it here.";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];
let resultString = resultArray;

//this for loop counts the array item index
for (let i = 0; i < input.length; i++) {
  /* console.log(i); */

  if (input[i] === "e") {
    resultArray.push(input[i]);
  } else if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  //this nested loop compares input against vowels
  for (let j = 0; j < vowels.length; j++) {
    /* console.log(j); */
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      /*console.log(input[i]);
      console.log(resultArray); */
    }
  }
}

//not sure how to get this to join and uppercase simultaneously
console.log(resultString.join());
