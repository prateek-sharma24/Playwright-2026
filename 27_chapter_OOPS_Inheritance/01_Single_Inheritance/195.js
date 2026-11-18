class father{
    eat()
    {
        console.log("father is eating");
    }
}
class son extends father{
    walk()
    {
        console.log("Son is walking");
    }
}
const s = new son();
s.eat();
s.walk();
const f = new father();
//f.walk();//this will fail as the walk function is of son and can't be accessed by father in single inheritance
f.eat();
