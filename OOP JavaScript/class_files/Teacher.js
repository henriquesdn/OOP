let person = require("./Person.js");

// Herança, o metódo super chama o construtor da classe pai
class Teacher extends person.Person{
    constructor(name, city, school, subject, enrollYear, baseSalary){
        super(
            name, 
            city, 
            school
        );
        this.subject = subject;
        this.enrollYear = enrollYear;
        this.baseSalary = baseSalary;

        let bonus = 1000;
        let getFullSalaryPermonth = function (){
            return baseSalary + bonus;
        };

        this.salary = getFullSalaryPermonth();
        };

    // Encapsulamento, cliente/outro módulo usa sem que precise se importar com o funcionamento interno
    getTeacherId(){
        return this.teacherId;
    };

    setTeacherId(teacherId){
        this.teacherId = teacherId;
    };
 
    getServiceYears(){
        return new Date().getFullYear() - this.enrollYear;
    };

    getRetireFund(){
        return this.getServiceYears() * 50000;
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
       <br> ${pronoun} is ${this.calculateAge()} years old.
       <br> ${pronoun} is a teacher who works at ${this.school}.
       <br>${pronoun} is a ${this.subject} teacher. 
       <br>the ID of ${this.name} is ${this.getTeacherId()}.
       <br>${pronoun} has a monthly salary of ${this.salary}.
       <br> ${pronoun} has ${this.getServiceYears()} of service years.
       <br>If ${pronoun} retires now, ${pronoun} has a retire fund of ${this.getRetireFund()}.`;
   };
};

module.exports = {
    Teacher: Teacher
};