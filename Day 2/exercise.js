function change (c) {
    let F = ((9 / 5) * c) + 32;
    return console.log(`$(c) celsius adalah ${F}`);
}

change(90);

function oddOrEven (num) {
    if (num % 2 == 0) {
        console.log('the number is even');
    } else if (num % 1 == 0) {
        console.log("number is odd");
    }
}

oddOrEven(19);
oddOrEven(10);

// angka bilangan prima hanya bisa diagi 1 dan dirinya sendiri (hanya ada 2 faktor)

let factor = 0;
function determPrime(numb) {
    for (let f = 1; f <= numb / 2; f++) {
        if (numb % f == 0) {
            factor++
        }
    }
    if (factor == 2) {
        console.log("the number is a prime number");
    } else {
        console.log("the number is not a prime number");
    }
}
determPrime(9);

function totalSum(N) {
    let Total = 0;
    for (sum = 0; sum <= N; sum++) {
        Total += sum;
    }
    return console.log(Total);
}
totalSum(4);

// faktorial contoh 5: 1x2x3x4x5 =120
// Deklarasi VAR faktor dari 1
// buat FOR loop dengan turunan dari 1, kurang dari sama dengan bilangan, dan turunan di Increment
// setiap loop  faktor di kali turunan bilangan
const number = -10;
if (number < 0) {
    console.log("the factorial for negative numbers doesn't exist");
} else if (number === 0) {
    console.log(`the factorial of ${number} is 1.`);
} else {
    let fact = 1
    for (fc = 1; fc <= number; fc++) {
        fact *= fc;
    }
    console.log(`the factorial of ${number} is ${fact}`);
};

//fibbonaci 0 1 1 2 3 5 8 13 21
//n1 = 0, n2 = 1, dan nnext = n1 + n2
// buat FUNC dengan parameter nFib
// n1 = n2, n2 = nnext, nnext = n1 + n2
let n1 = 0;
let n2 = 1;
let nNext = n1 + n2;
function fib (nFib) {
    console.log(n1)
    for (let i = 1; i <= nFib; i++){
        console.log(nNext);
        nNext = n1 + n2;
        n1 = n2;
        n2 = nNext;
    }
}
fib(10);

const convert = function (celcius) {
    let farenheit = ((9 / 5) * celcius) + 32;
    console.log(`${celcius} °C = ${farenheit} °F`);
}
convert(0)
const evenCheck = (eoo) => (eoo % 2 == 0) ? `${eoo} is an even number` : `${eoo} is an oddnumber`;

console.log(evenCheck(1));
let ns = 9
let prime = true;
if (ns == 0 || ns == 1) prime = false;
for (let i = 2; i <= ns / 2; ++i) {
    if (ns % i == 0) {
        prime = false;
        break;
    }
}
prime ? console.log(`${ns} is a prime number.`) : console.log(`${ns} is not a prime number.`);

//5 → 1 + 2 + 3 + 4 + 5 = 15
let a = 0;
let su = function (nn) {
    let fin = `${nn} →`
    for (let i = 1; i <= nn; ++i) {
        i == 1 ? fin += ` ${i}` : fin += `+ ${i}`
        a += i;
    }
    console.log(fin + " = " + a);
}
su(3)
let fac = 1;
let fa = function (ff) {
    let fff = `${ff} =`
    if (ff < 0) {
        console.log('the factorial for negative number doesn\'t exist');
    } else if (ff == 0) {
        console.log('the factorial for the number 0 is 1')
    } else {
        for (let i = 1; i <= ff; ++i) {
            i == 1 ? fff += ` ${i}` : fff += ` x ${i}`
            fac *= i;
        }
    }
    console.log(`${fff} = ${fac}`);
}
fa(5)

let temp1 = 0, temp2 = 1, temp3 = 0;
let fibs = function (tms) {
    let row = `${tms} row of fibbonachi numbers are ${temp1}, ${temp2}`;
    for (let i = 2; i <= tms; ++i) {
        temp3 = temp1 + temp2;
        row += `, ${temp3}`;
        temp1 = temp2;
        temp2 = temp3;
    }
    return row;
}
console.log(fibs(5));
