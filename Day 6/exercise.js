class Student {
    constructor (Name, Email, birthdate, Score) {
        this.Name = Name;
        this.Email = Email;
        this.birthdate= new Date(birthdate)
        this.Score = Score;
        this.Age = Math.floor(new Date() - Age / (1000 * 60 * 60 * 24 * 365));
    }
}
class HLA {
    constructor(highest, lowest, average){
        this.highest = highest;
        this.lowest = lowest;
        this.average = average;
    }
}
let student1 = new Student("Caca", "ccp@gmail.com", '2000/02/17', 90);
let student2 = new Student("Calvin", "cc@gmail.com", '2000/10/30', 100);
let student3 = new Student("Cacing", "caci@gmail.com", '2001/01/03', 80);
let students = [student1, student2, student3]
let arrAge = []
let arrScore = []
arrayStudent.map(val)


let scoreAge = (arrayOfStudent) {
    Age : {
        max : Math.max(...arrAge),
        min : Math.min(...arrAge),
        avg : arrAge.reduce(a, b) = (a + b) / arrAge.length
    },
    Score : {
        max : Math.max(...arrScore),
        min : Math.min(...arrScore),
        avg : arrScore.reduce(a, b) = (a + b) / arrAge.length
    }
}
console.log(new Date());