export default class Person{
    name: string;
    yearOfBorn: number;
    gender: string;
    city: string;
    school: string;

    constructor(
        name: string, 
        yearOfBorn: number, 
        gender: string, 
        city: string, 
        school: string
    ){
        this.name = name;
        this.yearOfBorn = yearOfBorn;
        this.gender = gender;
        this.city = city;
        this.school = school;
    };

    // Encapsulamento, cliente/outro módulo usa sem que precise se importar com o funcionamento interno
    calculateAge(): number{
        return new Date().getFullYear() - this.yearOfBorn;
    };

    // Metódo abstrato
    bio(): void {
        throw new Error("Abstract Method")
    };
};