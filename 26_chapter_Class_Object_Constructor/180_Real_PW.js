class TestCase{
    constructor(name_given,status_given,priority_given){
        this.name =name_given;
        this.status=status_given;
        this.priority =priority_given;
    }
    display(){
        console.log(this.name + "->"+this.status+"->"+this.priority)
    }
}
let loginTest_ref = new TestCase("login test","PASS","P0");
let signupTest_ref = new TestCase("Signup Test","Fail","P1");

loginTest_ref.display();
signupTest_ref.display();
//constructor is used in order to generate the default values