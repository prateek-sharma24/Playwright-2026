// `var` is hoisted and not block-scoped, so this block reads and updates the existing binding.
var a = "Prateek";
//10,000 line of code
if(true)
{
    console.log(a);
    var a = "Sharma";
    console.log(a);
}