//metodos privados de clases
//consisten en limitar el accesoa propiedades y  metodos agregando el caracter#
// por defecto , las propiedades y metodos de una clase en js son publicas, es decir se puede acceder a ellos fuera de la clases

class user{
    //cosntructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'Hello'
    }
    greetings(){
        return `${this.speak} ${this.name}`
    }
    
    // metodos get y set
    get  #uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;

    }
    get #uName(){ // aqui con # queda privado y muestra undefined
        return this.name;
    }
    set uName(s){
        this.name = s;

    }

}
const person = new user('david', 15);
console.log(person.uAge);
console.log(person.uName);