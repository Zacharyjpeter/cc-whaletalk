const input = "I hate it here.";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

//this for loop counts the array item index
for (let i = 0; i < input.length; i++) {
  /* console.log(i); */

  //this nested loop compares input against vowels
  for (let j = 0; j < vowels.length; j++) {
    /* console.log(j); */
    if (i === j) {
        console.log(input[i]);
        //output is incorrect: "I hat" doesn't match vowels array
    }
  }
}
