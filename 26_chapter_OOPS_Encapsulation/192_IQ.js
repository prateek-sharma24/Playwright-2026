class bug{
    constructor(title,severity){
        this.title =title;
        this.severity =severity;

    }
    display()
    {
        console.log("["+this.severity+"]"+this.title);
    }
}
let b1 = new bug("login crash","critical");
let b2 = new bug("Typo in footer","low");

b1.display();
b2.display();
