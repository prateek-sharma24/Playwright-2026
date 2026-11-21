//Mixin concept help you to perform the multiple inheritance

//Mixin 1: Adds logging ability

let LoggerMixin =function(Base){
    return class extends base{
        log(msg){
            console.log("[Log]"+msg);
        }
    }
}
let ScreenshotMixin = function(Base){
    return class extends Base {
        takeScreenshot(){
            console.log("[SCREENSHOT] captured" );
        }
    };
};
//base class
class TestCase{
    constructor(name){
        this.name = name;
    }
    run()
    {
        console.log("Running: "+ this.name);
    }
}

//Apply both mixin
class SmartTest extends ScreenshotMixin(LoggerMixin(login)){
    constructor(name){
        super(name);
    }
}

let t = new SmartTest("Login Flow");
t.run();
t.log("Test started");
t.takeScreenshot();