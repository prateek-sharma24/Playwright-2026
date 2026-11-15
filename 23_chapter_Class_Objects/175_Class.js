class Person{ //CAB
    //Attributes-also known as instance variables, data members, properties
     #name;// will be explained in constructor and encapsulation # means private
    #age;
    #rollNo;
    #phoneNo;

    //Behaviours-also known as methods or member functions
    eat(){}
    sleep(){}

    //Constructor, Attribute and Behaviour-CAB
    // Constructor is a special function that runs automatically, once at the moment an object is born
    constructor()
    {
        console.log("It will be called whenever an object is created");
    }
}
// # and we are not using function key in class for the f(n)

// CAB -> Class has the A, B

const prateek = new Person();//only one time the object reference will be stored, thats why const has been used
// Object -> new Person();
// Object Ref -> prateek

const sharma = new Person();
