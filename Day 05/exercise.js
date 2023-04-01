//lowest, highest and average value in the array (with and without sort function)
//Declare FUNCT lha(arr) 
//  Declare LET max = arr[0]
//  Declare LET min = arr[0]
//  Declare LET avg = arr[0]
//  Declare FOR LET i = 1, i < arr.length, i++
//    Declare IF arr[i] > max => max = arr[i]
//    Declare IF arr[i] < min => min
//    Declare sum += arr[i]
//  RETURN [max, min, sum/arr.length]
let arr = [190, 2, 6, 9, 50, 24, 17, 81, 19, 10, 12]
function lha (arr) {
    let max = arr[0]
    let min = arr[0]
    let sum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    sum += arr[i]
    } 
    return [max, min, sum / arr.length];
}
console.log(lha(arr));

// function hiLoAvg (arr1) {
//     let high = Math.max(...arr1);
//     let low = Math.min(...arr1);
//     let avr = arr1.reduce((a, b) => a + b / arr1.length)
//     return [low, high, avr]
// }
// let arr1 = [1, 16, 9, 22, 13, 11, 0, 4]
// console.log(hiLoAvg(arr1));

//Takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'
// Declare FUNCT ["hello", "i'm", "morning", "song"] => "hello", "i'm", "morning", and "song"
let final = "";
function stringArr(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (i === 0) {
            final += `${arr1[i]}`
        } else if (i === arr1.length - 1) {
            final += ` and ${arr1[i]}`
        } else {
            final += `, ${arr1[i]}`
        }
    }
    return final
}
let arr1 = ["hello", "i'm", "morning", "song"];
console.log(stringArr(arr1))

//calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
//Declare FOR  i=0, i<array.length, i++
//  array.push(array1[i] + array2[i]);
//  return array
function calArr (arr2, arr3) {
    let arrF = [];
    for (let i = 0; i < arr2.length; i++) {
        arrF.push(arr2[i] + arr3[i]);
    }
    return arrF;
}
let ars = [1, 2, 3]
let arss = [3, 2, 1]
console.log(calArr(ars, arss));

//adds an element to the end of an array. However, the element should only be added if it is not already in the array.
//Declare CONST addArr = FUNCTION (el, arr4)
//  Declare newArr4 = [...arr4];
//  Declare FOR i=0, i < arr4.length, i++;
//    IF (el !== arr4[i])
//    newArr4.push(el)
//  PRINT newArray
const addArr = function(el, arr4) {
    let newArr4 = [...arr4]
        if (!arr4.includes(el)) {
            newArr4.push(el);
        } else {
            console.log("ERROR!!!")
        }
        console.log(newArr4);
    }
    
let ara = [0, 1, 2, 3, 4, 5];
let ele = 6;
addArr(ele, ara);