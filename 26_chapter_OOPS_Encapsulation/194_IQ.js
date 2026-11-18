class User{
    constructor(name){
        this.name = name;
    }
    greet()
    {
        console.log("Hi, I am"+ this.name);
    }
}
let u1 = new User("Rice");
let u2 = new User("Chawal");
u1.greet();
u2.greet();