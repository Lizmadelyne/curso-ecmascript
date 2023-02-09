//esto es una funcion generadora con *

async function* numberGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);

}
const other = numberGenerator();
other.next().then(response =>console.log(response.value));
other.next().then(response =>console.log(response.value));
other.next().then(response =>console.log(response.value));
other.next().then(response =>console.log(response.value));
other.next().then(response =>console.log(response.value));
console.log('si funciono :)');


//iterador con for

async function names(array){
    for await (let value of array){
        console.log(value);
    }
}
const moreName = names(['karla', 'Gabriel', 'giovanna', 'Luis']);
console.log('After');