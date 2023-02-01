
//declarando
//class user{};
//intanciar una clase

class user{
//metodos
saludo(){
    return 'Hello'
}
};

const lm = new user();
console.log(lm.saludo());
const bebeloper = new user();
console.log(bebeloper.saludo());


//this
class users{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo
    speak(){
        return'Hello';
    }
    saludo(){
        return `Hello`
    }
    greetings(){
        return `${this.name} ${this.age}}` 
    }

}
 const ana = new users('Ana');
 console.log(ana.greetings());
