//el metodo flat aplanamiento de arrays, transforma un  array en una sola dimension
//devuelve un array donde los subarray han sido propagados hasta un profundidad especifica

const arr = [1, 1, 1, 2, 3, 4, [5, 6, 7, 8, [9, 1]]];
console.log(arr.flat(2));


//flatmap
const num =[1,2,3,4];
console.log(num.flatMap(value => {value, value  * 2}));
