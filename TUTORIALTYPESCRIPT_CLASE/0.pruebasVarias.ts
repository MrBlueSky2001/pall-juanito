let myString = "hola mundo";

let a:string = "hola";

let b:String = "adiós";

console.log(a + " y " + b);

let c:number = 10;
let d:number = 6.5;
console.log(c+d);

let e:boolean = true;
console.log(typeof e);

let f:undefined;
console.log(typeof f);

let g:any = 6;
console.log(typeof g);

let h:string | number;
h = "son las 2";
h = 15;

function myFunction():string{
    return "false";
}

function sumar(a:number, b:number):number{
    return a+b;
}
console.log(sumar(3,4));

let miArray:Array<string | number | boolean> = ["hola", "adiós", 7, true, "true"];

let mySet:Set<string> = new Set (["elem1", "elem2", "elem3"]);
console.log(mySet);

let myMap:Map<string, number> = new Map ([["clave1", 1], ["clave2", 2], ["clave3", 3]]);
let myMap2:{}
console.log(myMap)