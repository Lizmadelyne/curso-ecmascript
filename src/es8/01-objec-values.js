// objec.value devuelve el valor sin las propiedades como en entries
const countries = {
    mx: 'mexico',
    co: 'colombia',
    cl: 'chile',
    eu: 'estados unidos'
}
console.log(Object.values(countries));

//otyro ejemplo
const usuario = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

console.log(Object.values(usuario) );