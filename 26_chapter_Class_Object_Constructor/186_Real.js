class Student{
    static collegeName ="PW AT Batch";

    constructor(name,score){
        this.name = name;
        this.score =score;
    }
        static display(){
            console.log(this.name + "are a part of the",Student.collegeName + this.score);


    }
    nsf()
    {
        console.log(this.name);
    }
}
let prateek = new Student("Prateek",90);
let nidhi = new Student("Nidhi",80);
let swati = new Student("Swati",78);
let ashish  = new Student("Ashish",78);
console.log(Student.collegeName);
console.log(prateek.name);
console.log(nidhi.name);