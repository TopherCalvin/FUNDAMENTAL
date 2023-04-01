const convert = (cT) => {
  const columnTitle = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  cT.split("");
  if (cT.length == 1) {
    colNum = columnTitle.indexOf(cT[0]) + 1;
  } else if (cT.length == 2) {
    colNum =
      (columnTitle.indexOf(cT[0]) + 1) * 26 + (columnTitle.indexOf(cT[1]) + 1);
  } else if (cT.length == 3) {
    colNum =
      (columnTitle.indexOf(cT[0]) + 1) * (26 * 26) +
      (columnTitle.indexOf(cT[1]) + 1) * 26 +
      (columnTitle.indexOf(cT[2]) + 1);
  }
  if (colNum <= 16384) {
    console.log(`Column Title "${cT}" is column number ${colNum}`);
  } else {
    console.log(`Column Title "${cT}" doesn't exist`);
  }
};
convert("ADC");

const filterSingle = (arr) => {
  let single = [];
  for (let i = 0; i < arr.length; i++) {
    let check = arr.filter((val) => val == arr[i]);
    if (check.length < 2) {
      single.push(...check);
    }
  }
  console.log(single.join(", "));
};
filterSingle([1, 1, 2, 1, 3, 4, 4, 4]);

const posible = (n) => {
  let n1 = 0;
  let n2 = 1;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n3;
};
console.log(posible(1));
