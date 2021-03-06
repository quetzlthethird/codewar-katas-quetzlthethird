//Completed June 6, 2021
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
//Who Likes it?

function likes(names) {
  if (names.length < 1) return `no one likes this`;
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length >=3 ) return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
}

/*
Very simple set of if statements. Would need to be refactored to allow for changing of 'likes" and 'it' (e.g. if "dislike" was to be displayed"
Switch statements were a popular choice, but apparently they take more computational time.
*/

//Completed May 31, 2021
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
//Persistant Bugger 
// Used Snow's answer on https://stackoverflow.com/questions/54755266/multiplicative-persistence-codewars-challenge
function persistence(num) {
  let str = num.toString();
  if (str.length === 1) {
    return 0;
  }
  const nextNum = str.split('').reduce( (a, b) => a * b, 1);
  return 1 + persistence(nextNum);
}
/*
First, change number to a string. This lets you target the specific integers.
Next, check the length. If it's 1, then that means the answer is 0. 
After that, we need to split the number into it individual digits. (str.split). 
From here, there's lots you can do but the reduce option is the most straight forward.
reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
reduce( (a,b) => a*b, 1)
 In the reduce, the index and array values are not needed. The initialValue is given as one, but the function works without it.
 I assume that since "Calling reduce() on an empty array without an initialValue will throw a TypeError." that adding in the initialValue as 
 1 is a good practice to avoid TypeErrors.
The reduce function does the multiplication until you end up at the final single number. 
But the final line is magic to me. You run the new var nextNum through the function again and then add a 1. 
*/


//completed April 16, 2021
//https://www.codewars.com/kata/525c65e51bf619685c000059
//Pete, the baker

function cakes(recipe, available) {
  if (Object.keys(recipe).length > Object.keys(available).length) return 0;
  
  array = [];
  for (let ing in recipe) {
    array.push( Math.floor(available[ing] / recipe[ing]) )
  }
  return ( Math.min.apply(Math,array) )
}

/*
First I compare the two objects. If the available ingredients is smaller than the recipe ingredients, I return 0 as no cake could be made. 
Next, I want to compare the amounts the ingredient in each recipe. So, I start by interating through the recipe for the ingredient. 
I want to know the result of dividing, so I create an empty array to push the result to.
Then, you divide the ingredient amount in available by the recipe, flooring it, and push it to the array.
Finally, you find the lowest number in the array and return it
*/


//completed February 18, 2021
//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
//Find The Parity Outlier

function findOutlier(integers){
  even = [];
  odd = []
  for (let i=0 ; i <integers.length ; i++) {
    if (integers[i] % 2 === 0 )  {
      even += integers[i]
    }
    else { 
      odd += integers[i]
    }
  }
  if (even.length > odd.length ) return + odd
  return + even
}
/*
First check if the integer is even or odd and add it to the correct new array. Then return whichever new array is smaller.
I feel that this isn't the best solution as it filters through the entire array
From other solutions: 

function findOutlier(integers){
  return integers.slice(0,3)
    .filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}

*/

//completed February 18, 2021
// https://www.codewars.com/kata/5264d2b162488dc400000001
// Stop gninnipS My sdroW!

function spinWords(word){
  let newArr = [];
  let splitByWord = word.split(' ')
  
  for (let word of splitByWord) {
    if (word.length < 5) {
      newArr += `${word} `
    }
    if (word.length >= 5) {
      newArr += `${word.split("").reverse().join("")} `
    }
  }
  return (newArr.slice(0,-1))
}

/*
First I split the sentence into the individual words.
Next I iterate through this array. If the word is less than 5 characters, I add it to a new array.
If the word is great than 5 characters, I split, reverse, and the join it, then add it to the new array.
Finally, I add for both word types a space at the end, which is sliced off during the return.

Other examples use map and also ternary arguements: 
function spinWords(words){
  return words.split(' ').map( w => 
    w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/



//completed Feburary 17, 2021
//https://www.codewars.com/kata/541c8630095125aba6000c00
// help from https://stackoverflow.com/questions/50994765/digital-root-js
// Sum of Digits / Digital Root

function digital_root(n) {
  let string = n.toString(),
  sum = 0;

  if (string.length === 1) {
      return + string;
  }
  for (let i = 0; i <string.length; i++) {
      sum += + string[i];
  }
  return digital_root(sum);
}
/* Discovered a new term " Unary_plus ". The unary plus operator converts its operand to Number type.
So, first we take the number and convert it to a string. Then, if the string is longer than 1 character, we iterte through it.
In each iteration, we take the string character -> convert it to a number -> add this number to a variable I've called sum. 
Then when the loop is done we return the sum.
*/



//Completed February 17, 2021
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//Who likes it? 

function likes(names) {
  if (names.length === 0) return (`no one likes this`);
  if (names.length === 1) return (`${names} likes this`);
  if (names.length === 2) return (`${names[0]} and ${names[1]} like this`);
  if (names.length === 3) return (`${names[0]}, ${names[1]} and ${names[2]} like this`);
  if (names.length > 3) return (`${names[0]}, ${names[1]} and ${names.length-2} others like this`);
}

/* This was a deceptively easy 6 kyu. First attempted to iterate through all the names, but in the end the easiest solution worked.
Reviewing the other solutions, you can see some switch and template options. But, I think the basic if statements are enough.
*/


//Completed February 17, 2021
// https://www.codewars.com/kata/514b92a657cdc65150000006
// Multiples of 3 or 5

function solution(number){
  count = 0
  let sum  = 0
  
  for (let i=0 ; i<number ; i++) {
    if (count % 3 === 0 || count % 5 === 0 ) {
      sum += count
    }
    count ++
  }
  return sum
}
/* you iterate upwards from 0, checking if the current number is divisible by 3 or 5. If yes, then you add that number to the sum, which is returned.
Here I have an unnecessary variable in "count". The loop already does this count so I could refactor count completely out: 

function solution(number){
  let sum  = 0
  
  for (let i=0 ; i<number ; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) {
      sum += i
    }
  }
  return sum
}
*/


//Completed January 27, 2021
//https://www.codewars.com/kata/57faece99610ced690000165
//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
//solution assitance from https://stackoverflow.com/questions/40013415/remove-all-exclamation-marks-from-the-end-of-sentence
function remove(s){
  let i = s.length - 1;
  
  while(s[i] == "!"){
     i--;
  }
  
  return s.substring(0,i+1);
}

/*
Started with reduce and ventured into regex. But with reduce couldn't get only the end and I don't know regex
In the fucntion, first we establish the end of the string
Then, we loop. 
In the loop, we go backwards from the end until the end end of the string isn't !.
Then we return the new substring
*/


// Completed January 19, 2021
// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Find the odd int
// solution assistance from https://medium.com/@jonghyeoklee90/find-the-odd-int-360100f3222c

function findOdd(A) {
  let count = 0;
  
  let arr = A.sort( (a,b) => a-b );
  
  for (let i=0 ; i<A.length ; i ++){
    for (let j=0 ; j <A.length ; j++ ) {
      if (arr[i] === arr [j]) {
        count ++
      }
    }
    if (count %2 !== 0) {
      return arr [i]
    }
  }
}

// solution assistance from https://medium.com/@jonghyeoklee90/find-the-odd-int-360100f3222c
/* In the function:
a new array is created. 
In it, the content of the original array is sorted smallest to largetst. 
From there, a nexted loop is created to compare the two values next to each other. 
So the j loop looks to see if i = j. 
Then the i loop looks at the count. If its an odd number (i.e. it is not divisible by 2), then it returns that value (stopping the loop).
If the count is event, then the loop repeats.
*/
/* First attempted to created an object whihch counted both values, but ran into difficulties accessing the key of the objects in the second loop. */
