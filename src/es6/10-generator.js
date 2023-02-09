/*function* iterate(array){
        for (let value of array){
            yield value;
        }
    }

const it= iterate(['liz', 'karla', 'gabirle', 'giovanna', 'luis']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
*/


function* climate(array){
    for(let value of array){
        yield value;
    }
}


const clim = climate(['sunny', 'snowy', 'rainy', 'stormy', 'windy', 'cloudy', 'foggy']);

console.log(clim.next().value);
console.log(clim.next().value);
console.log(clim.next().value);
console.log(clim.next().value);
console.log(clim.next().value);
console.log(clim.next().value);
console.log(clim.next().value);

function* numbers(array){ 
     for(let value of array){
        yield value
    } 
}
    const num = numbers([1, 2, 3, 4]) 
     console.log(num.next().value)
     console.log(num.next().value)