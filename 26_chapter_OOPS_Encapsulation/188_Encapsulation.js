class Person{
    //hide my variables
    #child1;
    #child2;
    constructor(name,child1,child2)
    {
        this.name =name;
        this.#child1 =child1;
        this.#child2 =child2;

    }
    getChild()//Mother
    {
        return this.#child1;
    }
    setChild(changed_name)//Wife
    {
        this.#child1 =changed_name;
    }
}
let prateek = new Person("Prateek","Pratham","Siddhi");
// console.log(p#child1);//not able to access the same from outside the class
console.log(prateek.getChild());
prateek.setChild("Parikshit");
console.log(prateek.getChild());