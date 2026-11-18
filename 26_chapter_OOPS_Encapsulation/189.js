class Car{
    #engine;
    constructor(name,engineName)
    {
        this.name = name;
        this.#engine =engineName
    }
    setEngine(nameEngine){
        this.#engine =nameEngine;
    }
    getEngine()
    {
        return this.#engine;
    }
}
let tesla = new Car("Tesla","V8");
console.log(tesla.getEngine());
tesla.setEngine("V9");
console.log(tesla.getEngine());