//global this es un  estandar que permite acceder en cualquier plataforma
// window es un objeto del navegador que no se lee en node
//el objeto global  es de node y no es compatible con navegadores
//con global this todo es compatible
// el motor de js es el que compila el archivo y lo convierte en cosigo que entiende el computador

console.log(window);
console.log(globalThis);
console.log(self);