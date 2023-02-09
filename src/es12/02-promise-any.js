//promise any es otra forma de manejar varias promesas, que retornaraa la primera que sea resuelta
//y rebotara si todas las promesas son rechazadas

const promise1 = new Promise ((resolve, reject) => reject('Rechazada'));
const promise2 = new Promise ((resolve, reject) => reject('Aceptada'));
const promise3 = new Promise ((resolve, reject) => resolve('Aceptada tambien'));
Promise.any([promise1, promise2, promise3]).then(response => console.log(response))