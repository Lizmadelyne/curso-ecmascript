var lastName = 'madelyne';
lastName="luis";
console.log(lastName);

//
let fruit ="apple";
fruit="pera";
console.log(fruit);

const animal ="cat";
animal ="dog";
console.log(animal);

//

const fruits = () => {
    if(true){
        var fruit1 ="grapes";    //function scope  funciona fuera del bloque
        let fruit2 = "kiwi";      //block scope solo funciona dentro del bloque
        const fruit3 = "banana";   //block scope
        
    }
    console.log(fruit1);
    console.log(fruit2);
        console.log(fruit3);
   
}
fruits();