"use strict"
class Persona{
    public name: string;
    private address: string;
    constructor(n: string, a: string){
        this.name = n;
        this.address = a;
    }

    // constructor(public name: string, private address: string = "mi dirección"){
        
    // }
}

class Hero extends Persona{
    public alterEgo: string;
    public age: number;

    constructor(alterEgo: string, age: number, realName: string){
        super(realName, "Sevilla");
        this.alterEgo = alterEgo;
        this.age = age;
    }
}

const p1 = new Persona("Profesor", "Sevilla y Córdoba");
const h1 = new Hero("Supermán", 31, "Clark Ken");