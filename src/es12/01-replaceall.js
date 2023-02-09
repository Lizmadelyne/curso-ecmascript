//metodo replaceAll
//retorna un nuevo string reemplazando todos los elementos por otro
//el patrona reemplazar puedeser un string o una expresion 
//ejemplo

const message = "Javascript es un lenguaje de  programacion maravilloso";

const replaceMessage = message.replace("Javascript", "Typescript");

console.log(replaceMessage);

//otro ejemplo divertido
const inputext = "If you are :) and you know it :clap your hands  :clap :clap"

const emojiReplace = (text) =>{
    let emojized =""
    emojized = text.replaceAll(':)','😃')
    emojized= emojized.replaceAll('clap', '👏')
    return emojized
}
console.log(emojiReplace(inputext))
