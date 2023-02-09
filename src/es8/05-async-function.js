const ensayo = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=> resolve('resuelto'), 2000)
        :reject(new Error('ERROR!!'));
  
});
}

const otroensayo  = async () =>{
    const something = await ensayo();
    console.log(something);
    console.log('Hello');
}
console.log('Before de promise');
otroensayo();
console.log('after de async');