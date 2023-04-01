class Employee {
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }
}
class Salary extends Employee {
    #hour
    constructor(name, position, age, type = 'part-time', hour) {
        super(name, position, age);
        this.type = type;
        this.#hour =  hour;
    }
    add (hour) {
        if (hour > 0 && hour < 25) this.hour = hour;
    }
    total () {
        let wh = (this.hour - 6 > 0? 6: this.hour);
        let sisa = (this.hour -6 < 0 ? 0 : this.hour - 6);
        let base = 0;
        let ot = 0
        if (this.type === "part-time") {
            base = 50000;
            ot = 30000;
        } else {
            base = 100000;
            ot = 75000;
        }
        return (base * wh) + (sisa * ot);
    }
    
}
let employee1 =new Salary("jabal", "sales", 30, "part-time")
employee1.add(6);
console.log(`${employee1.name}, ${employee1.total()}`) 

class Player {
    constructor (name) {
        this.name = name;
        this.healt = 100;
        this.power = 10;
    }
    hit (player) {
        player.healt -= this.power;
    }
    useItem (obj) {
        this.healt += obj.healt;
        this.power += obj.power;
    }
    show() {
        return `player ${this.name} healt => ${this.healt}, power => ${this.power}`
    }
}
class Shooting {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    getitem() {
        let random = Math.floor(Math.random() * 4)
        if (random == 0) {
            return {healt : 0, power : 0}
        } else if (random == 1) {
            return {healt : 10, power : 0}
        } else if (random == 2) {
            return {healt : 0, power : 10}
        } else {
            return {healt : 10, power : 10}
        }
    }
    start() {
        let random2 = Math.floor(Math.random() * 2)
        console.log(`${this.player1.name} VS ${this.player2.name}`)
        console.log("START!!!")
        while (this.player1.healt > 0 && this.player2.healt > 0) {
            if (random2 == 0) {
            console.log(this.player1.show());
            console.log(this.player2.show());
            this.player1.useItem(this.getitem())
            this.player2.useItem(this.getitem())
            this.player1.hit(this.player2);
            this.player2.hit(this.player1);
            } else {
            console.log(this.player2.show());
            console.log(this.player1.show());
            this.player2.useItem(this.getitem())
            this.player1.useItem(this.getitem()) 
            this.player2.hit(this.player1);
            this.player1.hit(this.player2);
            }
        }
        if (this.player1.healt > 0) {
            console.log(`Winner ${this.player1.name}!!!`)
        } else {
            console.log(`Winner ${this.player2.name}!!!`)
        }
    }
}
let p1 = new Player ("ajun", 100, 10);
let p2 = new Player ("adnan", 100, 10);
let game = new Shooting (p1, p2);
game.start()