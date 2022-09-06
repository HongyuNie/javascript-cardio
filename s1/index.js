//reference:https://github.com/bradtraversy/javascript_cardio.git
//youtube link:https://www.youtube.com/watch?v=M2bJBuaOeOQ&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G

//JavaScript Cardio[Session 1] - Reversals, FizzBuzz, MaxChar

//run "node index" on the terminal to see results




// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const strArr = str.split(''); //take a para of separator, just single quote
    // strArr.reverse(); //array prototype method
    // return strArr.join('');
    //or just chain those three methods together


    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     revString = revString + str[i];
    // }
    // return revString;


    // let revString = '';
    // for (let i = 0; i < str.length; i++) {
    //     revString = str[i] + revString;
    // }
    // return revString;


    // let revString = '';
    // for (let char of str) {
    //     revString = char + revString;
    // }
    // return revString;


    // higher order function: forEach()
    // let revString = '';
    // str.split('').forEach(function(char) {
    //     revString = char + revString;
    // });
    //Or in ES 6, arrow function
    // str.split('').forEach(char => revString = char + revString);
    
    // return revString;


    //higher order method: reduce()
    // return str.split('').reduce(function(revString, char) {
    //     return char + revString;
    // }, ''); //the second para is what we want to begin with, which is a empty string

    // using arrow function, most impressive
    return str.split('').reduce((revString, char) => char + revString, '');
}
  
  

  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
    const revString = str.split('').reverse().join('');
    return revString === str;
  }
  
  

  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);//use sing method of math object in js
  }
  

  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');
    // for (let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(' ');


    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(function(word){
    //         return word[0].toUpperCase() + word.substr(1);
    //     })
    //     .join(' ');

        //map in es 6:
        //.map(word => word[0].toUpperCase() + word.substr(1))


    //the replace method takes a regular expression which is within a pair of slashes, \b is for word boundary, here is a to z, g is for gloal, without it will only captialize the first letter of firstword, i for case sensitive
    return str.replace(/\b[a-z]/gi, function(char) {
      return char.toUpperCase();
    });


  }
  

  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {}
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {}
  
  
  
  // Call Function
  const output = capitalizeLetters('I love javascript');
  
  console.log(output);