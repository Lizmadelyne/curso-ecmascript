//nullish esta validando con ?? si hay un valor o es null
// si es null le agrega vallor

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"; // aquii como estta nulo agrega el nombre

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Luis";

console.log(nombre1) 
console.log(nombre2) 

// otro ejemplo

 const num = null;
 const validate = num?? 1;
 console.log(validate);
