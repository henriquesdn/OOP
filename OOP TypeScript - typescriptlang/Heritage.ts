// interfaces possuem um ou mais métodos, que obrigatoriamente não possuem corpo, as operações específicas para cada um desses métodos são realizadas pela classe que implementa/herda a interface
interface Example {
    talk(): void;
}

class Animal {
    jump(): void {
        console.log("*jumping*");
    };
};

// uma classe que extende outra herda todos os seus atributos e metódos
class Cow extends Animal implements Example {
    talk(): void {
        console.log("muu");
    };
};

class Dog extends Animal implements Example {
    talk(): void {
        console.log("au au");
    };
};

const cow1 = new Cow();
const dog1 = new Dog();

console.log(cow1.talk());
console.log(dog1.talk());
console.log(dog1.jump()); // classe Dog utilizando o metódo herdado da classe Animal