class SBI{
    #balance;
    constructor(name, balance)
    {
        this.#balance =balance;
        this.name =name;

    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(balance,isCashier){
        if(isCashier)
        {
            this.#balance =balance;
        }
        else{
            console.log("Not Allowed");
        }
    }
}
let prateek = new SBI('Prateek',10000);
console.log(prateek.getBalance);
prateek.setBalance(1000,false);
console.log(prateek.getBalance());

let prateek_father = new SBI('prateek',100000);
console.log(prateek_father.getBalance());
prateek_father.setBalance(10000000,true);
console.log("Updated Amount:",prateek_father.getBalance());
