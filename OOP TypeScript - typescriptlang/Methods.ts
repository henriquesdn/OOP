class Person {
    firstName: string;
    weight: number;
    height: number;

    constructor(firstName: string, weight: number, height: number){
        this.firstName = firstName;
        this.weight = weight;
        this.height = height;
    };

    // tipar um metódo previne um tipo de retorno inesperado
    getImc(): number {
        return this.weight / (this.height * this.height);
    };
};

const person1 = new Person("Henrique", 65, 1.77);

console.log(person1.getImc());