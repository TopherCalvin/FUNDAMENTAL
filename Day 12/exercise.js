const numbArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let o = arr.filter((val) => val == arr[i]);
    if (o.length > arr.length / 2) {
      console.log(`the majority in ${arr} is ${o[0]}`);
      break;
    } else {
      console.log(`no majority in ${arr}`);
      break;
    }
  }
};
numbArr([1, 2, 1, 2, 3, 3, 4, 5, 1, 1, 1]);

const convert = (roman = "") => {
  const roNum = [];
  roNum[1] = "I";
  roNum[5] = "V";
  roNum[10] = "X";
  roNum[50] = "L";
  roNum[100] = "C";
  roNum[500] = "D";
  roNum[1000] = "M";
  let arr1 = [];
  let out = 0;
  roman.split("").map((val) => arr1.push(roNum.indexOf(val)));
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr1[i + 1]) {
      out += arr1[i + 1] - arr1[i];
      i++;
    } else {
      out += arr1[i];
    }
  }
  console.log(out);
};
convert("CD");
