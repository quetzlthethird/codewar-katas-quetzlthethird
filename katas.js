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
