// class Stack {
//   #maxsize;
//   #container = [];
//   constructor(maxSize = 10) {
//     this.#maxSize = maxSize;
//   }
// }
// Declare variable s dan t
// s dan t di split check persamaan panjang
// sort s dan t terus bandingkan jika sama maka mereka anagram
const angrm = function (s, t) {
  let anagram = true;
  if (!(s.split("").length === t.split("").length)) {
    anagram = false;
  }
  if (!(s.split("").sort().join("") === t.split("").sort().join(""))) {
    anagram = false;
  }
  console.log(anagram);
};
angrm("abc", "bca");

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  hit(player) {
    return (player.health -= this.power);
  }
  useitem(item) {
    this.power += item.power;
    this.health += item.health;
  }
  show() {
    return `${this.name} => ${this.health}, ${this.power}`;
  }
}
class Shooting {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getItem() {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
      return { health: 10, power: 10 };
    } else if (num === 1) {
      return { health: 10, power: 0 };
    } else if (num === 2) {
      return { health: 0, power: 10 };
    } else if (num === 3) {
      return { health: 0, power: 0 };
    }
  }
  Start() {
    let turn = Math.floor(Math.random() * 2);
    while (this.player1.health > 0 || this.player2.health > 0) {
      if (turn === 0) {
        console.log(this.player1.show());
        console.log(this.player2.show());
        this.player1.useitem(this.getItem());
        this.player2.useitem(this.getItem());
        this.player1.hit(this.player2);
        this.player2.hit(this.player1);
      } else {
        console.log(this.player2.show());
        console.log(this.player1.show());
        this.player2.useitem(this.getItem());
        this.player1.useitem(this.getItem());
        this.player2.hit(this.player1);
        this.player1.hit(this.player2);
      }
    }
    if (this.player1.health <= 0) {
      console.log(`${this.player2.name} winner`);
    } else {
      console.log(`${this.player1.name} winner`);
    }
  }
}

const p1 = new Player("udin");
const p2 = new Player("ujang");

const game = new Shooting(p1, p2);
game.Start();
