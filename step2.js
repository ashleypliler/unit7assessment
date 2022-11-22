 // 1) Sum Zero = O(n^2) runtime, O(n) space complexity
 // i had some trouble with this one and only get undefined. i would love to know what i did wrong:)

 const addSumZero = (arr) => {
    let newArr = [];
    for(let i = 0; i > arr.length; i++){
        newArr.push(i);
        for(let j = 0; j > newArr.length; j++){
            if(i + j === 0){
                return true
            } else {
                return false
            }
        }
    }
    console.log(newArr);
 }
 console.log(addSumZero([1,3,4,6,-3,5]))

// const addSumZero = (arr) => {
//  let sum = 0;
//     arr.forEach(num => {
//     if(sum += num === 0){
//      return true;
//     } else{
//         return false;
//     }
// })
// }
// console.log(addSumZero([1,2,3,4,5,-2]))

 // 2) Unique Characters = O(n) runtime, O(n) space complexity

function isUnique(str) {
    return new Set(str).size == str.length;
  }
  
  console.log(isUnique('abce'));    // true
  console.log(isUnique('abcabc')); // false
  console.log(isUnique('hello')); // false
  console.log(isUnique('hey')); // true


  // 3) Pangram Sentence = O(n) runtime, O(n) space complexity

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog."));
  console.log(isPangram("This is not a pangram."));


 // 4) Longest Word = O(n) runtime, O(n) space complexity

function findLongestWord(arr) {
    var longest = 0;
  
    for(var i = 0; i < arr.length; i++) {
       if(arr[i].length >= longest) {
         longest = arr[i].length;
          } 
       }
    return longest;
  }  
  console.log(findLongestWord(['hi', 'hello', 'whats up?']));