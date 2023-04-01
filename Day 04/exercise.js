//01
//02 03
//04 05 06
//07 08 09 10 
// First, determine the height of the triangle
// Second, every loop we wil PRINT a number
let num = 1;
const triangle = function(height) {
    for (let i = 0; i <= height; i++) {
        let a = '';
        for (let j = 0; j < i; j++) {
            if  (num < 10) {
            a += `0${num++} `;
            } else {
                a += `${num++} `;
            }        
        }
        console.log(a);
    }
}
triangle(4);

//Recursion Function parameter nol = total looping
//Declare nol = number of loop
// IF nol % 3 == 0 PRINT "Fizz"
// ELSE IF nol % 5 == 0 PRINT "Buzz"
// ELSE IF nol % 3 && nol % 5 == 0 PRINT "FizzBuzz"
let str = "";
function loop (nol) {
    if (nol % 3 == 0 && nol % 5 == 0) {
        console.log("FizzBuzz");
    } else if (nol % 3 == 0) {
        console.log("Fizz");
    } else if (nol % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(nol);
    }
    let nextnol = nol - 1;
    if (nextnol > 0) {
        
        loop(nextnol)
    }
}
loop(15);

//Declare FUNCTION  massInd(weight, height)
//Declare LET BMI = (weight + "kg" / height + "meter") ** 2
//Declare IF (BMI < 18.5) return "less weight"
//           (18.5 <= BMI <= 24.9) return “ideal”
//           (25.0 <= BMI <= 29.9)return “overweight”
//           (30.0 <= BMI <= 39.9) return “very overweight”
//           (BMI > 39.9) return “obesity”
const massInd = function(weight, height) {
    let BMI = weight / (height ** 2);
    if (BMI < 18.5) {
        console.log("less weight");
    } else if (18.5 <= BMI && BMI < 24.9) {
        return "ideal"
    } else if (24.9 <= BMI && BMI <= 39.9) {
        return "overweight"
    } else if (BMI > 39.9) {
        return "obesity"
    }
    
    
}
console.log(massInd (200, 1.6))

// Declare FUNC (ARR) 
// Declare FOR let i = 0; i < ARR.length; i++
// DECLARE IF ARR[i] % 2 != 0 
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = arr.filter(checkEven);
function checkEven (n) {
    if (n % 2 == 0) {
        return n;
    }
}

console.log(result);

//Declare FUNCT arrConv(wordString)
//  return let arr = wordString.split(" ")
function arrConv (wordString) {
    let arrS = wordString.split(" ");
    return arrS
}
console.log(arrConv("1 2 3 4 5 6"))