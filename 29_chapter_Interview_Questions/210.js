class A{
    who()
    {
        return "A";
    }
}
class b extends A{
    who()
    {
        return "B>"+super.who();
    }
}
class c extends b{
    who()
    {
        return "C>"+super.who();
    }
}
console.log(new c().who());