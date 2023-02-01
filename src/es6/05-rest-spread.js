//asignacion de desestructuracion con arrays

let fruits =['apple', 'banana', 'melon'];
let [a, b, c] = fruits;
console.log(c, fruits[0]);


/// dessestructuracion  de objetos

let user = { userName:'liz', age:15};
let{userName, age} = user;
console.log(userName, user.age);

//spread operator para la propagacion
let person ={name:'karla', age:7};
let country = 'colombia';
let data ={...person, country};

console.log(data);

//rest
function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3)

//el primer 1 lo cogio como si fuera del num