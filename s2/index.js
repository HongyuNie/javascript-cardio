
//source from: https://github.com/bradtraversy/javascript_cardio.git
//youtube video: https://www.youtube.com/watch?v=FfchU1FS2IA&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G&index=2


// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

    //strip out the punctuations, match the expressions a to z and 0 to 9 inside the slashes, use for regular expressions:
    //+ sign is for output a word not a single letter
    //g for global
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    //console.log(wordArr)

    //sort by length
    //.sort() method sort in place
    // take a compare funtion as para
    // a, b is for each word
    const sorted = wordArr.sort((a, b)=> b.length - a.length)
    // console.log(sorted)
    
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length)
    
    // check is more than oen array val
    if (longestWordArr.length === 1) {
      return longestWordArr[0];
    } else {
      return longestWordArr;
    }
  
  }
  
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {

    //Solution 1

    //Init chunked arr;
    const chunkArray = [];
    //Set index
    let i = 0;
    //Loop while the index is less than the array length
    while (i < arr.length) {
      //Slice out from the index to the index + the chunk length and push on to the chunked array
      chunkArray.push(arr.slice(i, i + len));
      //Increment by chunk length
      i += len;
    }
    return chunkArray;


    //Solution 2

    // //Init chunked arr
    // const chunkedArr = [];

    // //Loop through arr
    // // val is the current element being processed in the arr
    // arr.forEach(function(val){
    //   //Get the last element
    //   const last = chunkedArr[chunkedArr.length-1];

    //   // Check if last and if last length is equal to the chunk length
    //   if (!last || last.length === len) {
    //     chunkedArr.push([val]);
    //   } else {
    //     last.push(val);
    //   }

    //   console.log(chunkedArr);
    // });
  }
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {
    //SOLUTION 1
    // return arrays.reduce(function(a, b) {
    //   return a.concat(b);
    // });

    //SOLUTION 2
    // return [].concat.apply([], arrays);

    //SOLUTION 3
    //use spread operator
    return [].concat(...arrays);
  }
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)
  }

  function formatStr(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  }
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  //i is for case insensitive
  function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
      if (char === 'z' || char === 'Z') {
        return 'a';
      } else {
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });

    newStr = newStr.replace(/[a|e|i|o|u]/gi, function(vowel) {
      return vowel.toUpperCase();
    })
    return newStr;
  }
  
  // Call Function
  const output = letterChanges('Hello There');
  
  console.log(output);