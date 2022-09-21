import Person from "./Person";

// Herança, o metódo super chama o construtor da classe pai
export default class Student extends Person{
    stream: string;
    id: number;

    constructor(
        name: string, 
        yearOfBorn: number, 
        gender: string, 
        city: string, 
        school: string, 
        stream: string,
        id: number
    ){
        super(
            name,
            yearOfBorn,
            gender,
            city, 
            school
        );
        this.stream = stream;
        this.id = id;
    };
    
    getSchoolYear(): string {
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

    bio(): string {
        let pronoun: string = "";
    
        if (this.gender == "female"){
            pronoun = "She";
        }
        else {
            pronoun = "He";
        };
    
        return `${this.name} is born in ${this.yearOfBorn}.
        <br> ${pronoun} lives in ${this.city}.
        <br> ${pronoun} is ${this.calculateAge()} yers old.
        <br> ${pronoun} studies in ${this.school} and ${pronoun} ${this.getSchoolYear()}.
        <br> Student ID of ${this.name} is ${this.id}.`;
    };
};