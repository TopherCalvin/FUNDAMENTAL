const q = require("./classQueue.js");
let arr = [
  new q(1, "map"),
  new q(2, "find"),
  new q(3, "reduce"),
  new q(4, "filter"),
];
const lah = (arr) => {
  try {
    console.log("Orders :");
    arr.map((val) => {
      console.log(`   Queue ${val.queues} : ${val.name}`);
    });
  } catch (error) {
    console.log("error woy");
  }
};
lah(arr);
const lah2 = (arr) => {
  let ran = Math.floor(Math.random() * 1000);
  arr.map((val) => (val = val.queues));
};
lah2(arr);
