//spread operator
//sapara o divide lo que necesitamo ver aparte del resto
//es decir muestra el valor separado solito
//y el resto de valores juntos en otralinea
//como en este ejemplo

const user ={ username:'lizma', age: 32, country:'colombia'};
const {country, ...values} = user;
console.log(country);
console.log(values);

// otro ejemplo

const pet = {tipo:'perro', age:3, color:'black'};
const{tipo, ...val} = pet;
console.log(tipo);
console.log(val);