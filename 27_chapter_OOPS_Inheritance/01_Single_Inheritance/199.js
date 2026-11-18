class BaseTest{
    constructor(){
        console.log("Parent!");
    }
    setup()
    {
        console.log("Base:Open browser");
    }
    teardown()
    {
        console.log("Base:close browser");
    }
}
class UITest extends BaseTest{
    constructor()
    {
        super();
    }
    setup()
    {
        super.setup();
        console.log("UI:maximize window");
    }
    teardown()
    {
        console.log("UI:take screenshot");
        super.teardown();
    }
}