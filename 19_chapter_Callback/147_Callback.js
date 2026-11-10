function placeOrder(item,callback)
{
    console.log("place an order");
    console.log("Order placed", item);
    callback();
}
// First Way
console.log("First Way...........");
function CompleteOrderPrint()
{
    console.log("Normal function");
}

placeOrder("Burger",CompleteOrderPrint);

//Second Way
console.log("Second Way.............");
placeOrder("Burger",function(){
    console.log("Order is ready, pick it up");
})

//Third Way- Arrow function
console.log("Third way................");
placeOrder("Burger",()=>{
    console.log("Arrow function, I am also function without a name");
});

test('has title',async({page})=>{

});

test('has title',async({page})=>{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});


