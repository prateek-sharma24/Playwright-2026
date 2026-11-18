class BaseTest{
    setup(){
        console.log("Base:open brpwser");
    }
}
class APITest extends BaseTest{
    setup()
    {
        console.log("APITest:open browser")
    }
}
let test = new APITest();
test.setup();
