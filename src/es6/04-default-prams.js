function newUser(name, age, country) {
    var name = name || 'liz';
    var age = age || 32;
    var country = country || 'colombia';
    console.log(name, age, country);
}
newUser();
newUser('luis', 50, 'usa');

///esta es otra nueva funcion mejor con sintaxis mas amigable
//agregado en ecma 6 para la posicion de parametros por defecto

function newAdmin (name = 'gabi', age =9, country = 'br'){
    console.log(name, age, country);
}
newAdmin();
newAdmin('karla', 7, 'fr');

function sumar(num1 =0, num2=0){
    sumar = num1 + num2;
    console.log(sumar);
}
sumar (1, 2)

// 
function restar(num1= 0, num2= 0){
    restar = num1 - num2;
    console.log(restar);
}
 
restar (8, 6);