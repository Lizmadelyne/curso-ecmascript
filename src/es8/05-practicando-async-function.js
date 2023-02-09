const countriesList =(countrie)=>{
    const countries ={
        panama:"ciudad de Panama",
        Venezuela:"Caracas",
        Colombia:"Bogota",
        Argentina:"Buenos Aires",
        Peru:"Lima"
    };
    return new Promise ((response, reject) =>{
        setTimeout(()=>{
            const listArray = Object.keys(countries);
            if(listArray.includes(countrie)){
                const list = Object.entries(countries)
                for(const iterator of list){
                    if (iterator[0]==countrie)
                    response(`L acapital de ${countrie} es ${iterator[1]} `);

                }
                }else{
                    reject((`La capital de ${countrie} no esta en esta lista`));

                
            }

        }, 3000)
    
    });
}

const getCapital = async()=> {
    console.log('cargando...')
    await countriesList("China").then(resolve =>
        console.log(resolve))
}
getCapital().catch(reject => console.log(reject));