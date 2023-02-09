// optional changing  permite validar si una propiedad de un objeto existe o no 
//si no existte devuelve el valor undefined

const user ={
    karla : {
        city: 'cartagena',
    },
    gio: {
        city: 'Manizales',
    },
    gabri: {
        city: 'medellin',
    }

}
//console.log(user);
console.log(user?.age?.city);
