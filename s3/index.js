//reference:https://github.com/bradtraversy/javascript_cardio.git
//youtube link: https://www.youtube.com/watch?v=tcoiPHktCwQ&list=PLillGF-Rfqbb4ZOnsNCIB-DnLuUrQjS_G&index=4




// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20


//SOLUTION 1 : ES5 ONLY 
// function addAll() {
//     // return arguments; // ES5 argument object
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

//SOLUTION 2 - ...rest & reduce/forEach
function addAll(...numbers) {
    // let total = 0;
    // numbers.forEach(num => total += num);
    // return total;

    return numbers.reduce((acc,cur) => acc+cur);
}

// console.log(addAll(2,5,6,7))


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    let total = 0;
    
    function checkForPrime (i) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(67));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']


//SOLUTION1
function seekAndDestroy() {

}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
