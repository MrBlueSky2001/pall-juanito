function dimeMiTipo (argument: any){
    return argument;
}

console.log(dimeMiTipo(100));

//La tercera "T" es lo que se devuelve
function whatsMyType<T> (argument: T): T{
    return argument;
}

let amIString = whatsMyType<string>("Hola mundo");
console.log(amIString);

let amINumber = whatsMyType<number> (100);
console.log(amINumber);