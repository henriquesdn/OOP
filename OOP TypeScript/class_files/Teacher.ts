import Person from "./Person";

// Herança, o metódo super chama o construtor da classe pai
export default class teacher extends Person{
    subject: string;
    enrollYear: number;
    baseSalary: number;
    salary: number;
    teacherId: string;

    constructor(
        name: string, 
        yearOfBorn: number,
        gender: string,
        city: string, 
        school: string, 
        subject: string,
        enrollYear: number,
        baseSalary: number,
        teacherId: string
    ){
        super(
            name,
            yearOfBorn,
            gender,
            city, 
            school
        );
        this.subject = subject;
        this.enrollYear = enrollYear;
        this.baseSalary = baseSalary;
        this.teacherId = teacherId;

        let bonus: number = 1000;
        let getFullSalaryPermonth = function(): number {
            return baseSalary + bonus;
        };

        this.salary = getFullSalaryPermonth();
        };

    // Encapsulamento, cliente/outro módulo usa sem que precise se importar com o funcionamento interno
    getTeacherId(): string {
        return this.teacherId;
    };

    setTeacherId(teacherId: string): void {
        this.teacherId = teacherId;
    };
 
    getServiceYears(): number {
        return new Date().getFullYear() - this.enrollYear;
    };

    getRetireFund(): number {
        return this.getServiceYears() * 50000;
    };

    bio(): string {  
        let pronoun = "";
        if (this.gender == "female"){
            pronoun = "She";
        }
        else {
            pronoun = "He";  
        };
       
       return `${this.name} is born in ${this.yearOfBorn}.
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