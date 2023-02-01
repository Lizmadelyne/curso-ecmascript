const anotherFunction  =()=>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey si:)');

        }else{
            reject('noooooooo');
        }
    })
}
anotherFunction()
.then(response => console.log(response))
.catch(err => console.log(err));

//asi es una funcion que devuelve datos de un array con funcion arrow

const datos =[] /*[{
    id: 1,
    title:'Iron Man',
    year:2008
},{
    id:2,
    title:'spiderman',
    year: 2019
},{
    id:3,
    title:'Avengers',
    year:2019
}]
/*

//asi se consiguen los datos con una funcion sin asincronismo

/*const getDatos =() =>{    
    return datos;
}
console.log(getDatos());*/

//asi es con asincronismo y promesas
const getDatos =() =>{
    return new Promise ((resolve, reject)=>{
if(datos.length === 0){
    reject(new Error('No existen Datos'));
}
setTimeout(()=>{
    resolve(datos);
},1500)
    })
}
async function daticos(){
    try{
        const daticos = await getDatos();
        console.log(daticos);

    }catch (err){
        console.log(err.message)

    }
}
daticos();

//si comento los datos me muestra el error los descomento y funciona