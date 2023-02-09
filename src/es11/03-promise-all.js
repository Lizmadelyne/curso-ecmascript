//promise.all se usa si vas a usar varias promesas al mismo tiempo y si alguna es rechazada no funciona

const promise1 = new Promise((resolve, reject) =>reject('Reject'));
const promise2 = new Promise((resolve, reject) =>resolve('resolve'));
const promise3 = new Promise((resolve, reject) =>resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//AQUI COMPRUEBO QUE RESPONSE Y REJECT NO SON PALABRAS RESERVADAS
// SE USAN PERO CUALQUIER OTRA SIRVE COMO EN EL EJEMPLO
const usuario = new Promise((name, lastName) => name('Ana'));
const usuario2 = new Promise((name, lastName) => lastName('Rincon'));
Promise.allSettled([usuario, usuario2])
//.then(name => console.log(name))
.then(lastName => console.log(lastName))