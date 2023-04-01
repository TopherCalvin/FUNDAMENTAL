//DECLARE FUNCTION multiplication table (n)
//LOOPING FOR i=1, i<=10, i++
// DECLARE Result = n x i
// PRINT string literal n x i = result
function mult(n) {
  for (let i = 1; i <= 10; ++i) {
    let result = n * i;
    console.log(`${n} x ${i} = ${result}`);
  }
}
mult(7);

//DECLARE FUNCTION palindromeChecker(Pal)
//Cari Length palindrome
//LOOP setengah dari palindrome
// lihat persamaan huruf pertama dan huruf terakhir atau mirrornya
/*SALAH/BISA DIKEMBANGKAN
function pC (k) {
    const pK = k.length;
    let i;
    for (i = 0; i < pK / 2; ++i) {
    };
    console.log(k[i] == k[pK - 1 - i] ? `${k} is not a polindrome` : `${k} is a Polindrome`);
};
pC ("kasurrusak");*/

function palChe(word) {
  let temp1 = word.split("");
  let temp2 = temp1.reverse();
  let reverWord = temp2.join("");
  console.log(
    word === reverWord
      ? `${word} is a Polindrome`
      : `${word} is not a polindrome`
  );
}
palChe("kasurrusak");

//DECLARE FUNC converter (cm)
//DECLARE km = cm / 100000
//PRINT N cm adalah M km
function cmkm(cm) {
  let km = cm / 100000;
  return console.log(`${cm} = ${km}`);
}
cmkm(200000);

//code to format number as currency (IDR) Example : 1000 → “Rp. 1.000,00".
//FUNCT IDR(jumlah)
//PRINT `${jumlah} → "Rp. ${jumlah},00"`
function angka(uang) {
  console.log(`Rp. ${uang.toLocaleString().replace(/,/g, ".")},00`);
}
angka(20000);

//code to remove the first occurrence of a given “search string” from a string Example : string = “Hello world”, search string = “ell” → “Ho world”
//DECLARE string
//DECLARE search string
//REPLACE search string element within string with nothing ('').
let string = "Hello World";
let searchstring = "o";
console.log(string.replace(searchstring, ""));

//Write a code to capitalize the first letter of each word in a string Example : “hello world” → “Hello World”
//DECLARE sentence/string
//SPLIT string
//create FOR LOOP with i = 0, i < string.length, ++i
//DECLARE sentence/string ke-i = kalimat/sentence ke-i huruf pertama di UPPERCASE + SLICE kalimat ke-i huruf ke-2 s/d akhir kata
//JOIN sentence/string
let sent = "I love javaScript";
let wrd = sent.split(" ");
for (let i = 0; i < wrd.length; i++) {
  wrd[i] = wrd[i][0].toUpperCase() + wrd[i].substring(1);
}
let final = wrd.join(" ");
console.log(final);

//code to reverse a string.
// FUNCTION reverse(string)
//LET arrStr = string.split(" ")
// LET revers = arrStr.reverse()
//LET revStr = revers.join(" ")
function reverseString(strn) {
  let arrStr = strn.split("");
  let revrs = arrStr.reverse();
  let revStr = revrs.join("");
  return console.log(revStr);
}
reverseString("i am ironman");
//    1
//   2 3
//  4 5 6
//
// DECLARE N = 1
// FOR LOOP i = 0, i <= 5, i++;
// LET a = "     ";
// di dalamnya taruh FOR LOOP j = 0, j <= i, j++;
// REASIGN a = a.replace(a[0], "");
// REASIGN a += num++ + " ";
// PRINT a
let num = 1;
for (let i = 0; i < 5; i++) {
  let a = "     ";
  for (let j = 0; j <= i; j++) {
    a = a.replace(a[0], "");
    a += num++ + " ";
  }
  console.log(a);
}

const integer = function (multiply) {
  for (let i = 1; i <= 10; ++i) {
    console.log(`${multiply} x ${i} = ${multiply * i}`);
  }
};
integer(10);

let paldet = function (strin) {
  let strg = strin.toLowerCase(/ /g);
  let revs = strg.replace(/" "/g, "").split("").reverse().join("");
  strg === revs ? console.log("palindrome") : console.log("not palindrome");
};
paldet("kasurRUSAK");

const CmKm = function (centi) {
  kiloM = centi / 100000;
  console.log(`${centi} cm → ${kiloM} km`);
};
CmKm(100000);

let numTIdr = (nums) => console.log(`Rp.${nums.toLocaleString("id-ID")},00`);
numTIdr(10000000);

const rmvFrs = function (clause, words) {
  let regexp1 = new RegExp(`${words}`, "g");
  console.log(`${clause.replace(regexp1, "")}`);
};
rmvFrs("hello world hello", "ell");

const rvrstr = (ssr) => console.log(`${ssr.split("").reverse().join("")}`);
rvrstr("abcd");
