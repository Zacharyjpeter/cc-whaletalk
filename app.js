const input = "i hate it here.";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

//this for loop counts the array item index
for (let i = 0; i < input.length; i++) {
  /* console.log(i); */

  //this nested loop compares input against vowels
  for (let j = 0; j < vowels.length; j++) {
    /* console.log(j); */
    if (input[i] === vowels[j]) {
      /* console.log(input[i]);
      important note: this log will not include a capital "I" bc the if statement uses === and requires an exact match*/
      resultArray.push(input[i]);
      console.log(resultArray);
    }
  }
}
