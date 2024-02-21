interface Personaje{
    name:string,
    vida:number,
    skills:string[],
    puebloNatal?:string,
    mostrarPuntosDeVida: ()=>void,
    address:Address
}
interface Address{
    street:string,
    city:string,
    country:string
    showAddress: () => string
}
let myObject:Personaje = {
    name: "Supermán",
    vida: 100,
    skills: ["Volar", "Superfuerza"],
    mostrarPuntosDeVida(){
        console.log(`Tengo ${this.vida} puntos`)
    },
    address: {
        street: "Nº 16",
        city: "Cleveland",
        country: "EEUU",
        showAddress():string{
            return this.street + ", " + this.city + ", " + this.country
        }
    }
}

console.log(myObject.name);
//myObject.name=4;
myObject.puebloNatal = "Kripton";
console.table(myObject);
console.log(myObject);
myObject.mostrarPuntosDeVida();
console.log(myObject.address.showAddress());