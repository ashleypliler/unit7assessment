// 1) Sum Zero

const sumZero = (arr) => {
    let num = [];
    for(let i = 0; i > arr.length; i++){
        // num.push(arr);
        if(arr[i] + arr[i] === 0){
            // return true;//

            console.log('true');
        } else {
            // return false;
            console.log('false');
        }
    }
}
sumZero([1,2,3,4,5,-2]);

// 2) Unique Characters 

function isUnique(str) {
    return new Set(str).size == str.length;
  }
  
  console.log(isUnique('abce'));    // true
  console.log(isUnique('abcabc')); // false
  console.log(isUnique('hello')); // false
  console.log(isUnique('hey')); // true


  // 3) Pangram Sentence

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


//   4)  Longest Word

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