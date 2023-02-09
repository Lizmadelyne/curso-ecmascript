
//finally es otro metodo de js  que ejecuta el codigo despues
// que una promesa haya sido ejecutada como  resolve o rejectpasa a catch o finally
//es util  para hecer el cieer de una conexion a BD o actualizar un estado de loading
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey");
        } else {
            reject("Whooops!");
        }
    })
}

anotherFunction()
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));
