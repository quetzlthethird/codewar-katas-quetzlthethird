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
