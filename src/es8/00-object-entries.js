//en ecmascript 8 se agregaron los siguintes  elementos
//object.entries que devuelve el objeto o la matriz completa

const countries = {
    mx: 'mexico',
    co: 'colombia',
    cl: 'chile',
    eu: 'estados unidos'
}
console.log(Object.entries(countries));


//otro ejemplo

const usuario = {
    name: 'liz',
    email: 'liz@gmail.com',
    age: 30

}
console.log(Object.entries(usuario));