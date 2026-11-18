class Credentials{
    #apiKey//private access modifier need to be initialized first so the value can be accessed by the user.
    user;
    constructor(user,key){
        this.user =user;
        this.#apiKey = key;



    }
    getAPI(){
        return this.#apiKey;
    }
}
let cred = new Credentials("admin","#secretkey_1234");
console.log(cred.user);
//console.log(cred.#apiKey);->not accesible outside class as the class attribute is private in nature