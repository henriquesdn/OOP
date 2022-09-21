let person = require("./Person.js");

// Herança, o metódo super chama o construtor da classe pai
class Student extends person.Person{
    constructor(name, dateOfBorn, gender, city, school, stream){
        super(
            name, 
            dateOfBorn, 
            gender, 
            city, 
            school
        );
        this.stream = stream;
    };

    // Encapsulamento, cliente/outro módulo usa sem que precise se importar com o funcionamento interno
    getId(){
        return this.id;
    };

    setId(id){
        this.id = id;
    };
    
    getSchoolYear(){
        if (this.calculateAge() == 18){
            return "is in the Second Year of A/L";
        }
        else if (this.calculateAge() < 18){
            return "is in the First Year of O/L";
        }
        else if (this.calculateAge() > 18){
            return "has already left the School";
        }
        else {
            return "is a primary student";
        };
    };

    bio(){
        let pronoun = "";
    
        if (this.getGender() == "female"){
            pronoun = "She";
        }
        else {
            pronoun = "He";
        };
    
        return `${this.name} is born in ${this.getDateOfBorn()}.
        <br> ${pronoun} lives in ${this.city}.
        <br> ${pronoun} is ${this.calculateAge()} yers old.
        <br> ${pronoun} studies in ${this.school} and ${pronoun} ${this.getSchoolYear()}.
        <br> Student ID of ${this.name} is ${this.getId()}.`;
    };

};

module.exports = {
    Student: Student
};