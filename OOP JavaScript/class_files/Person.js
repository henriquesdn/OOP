class Person{
    constructor(name, city, school){
        this.name = name;
        this.city = city;
        this.school = school;
    };

    // Encapsulamento, cliente/outro módulo usa sem que precise se importar com o funcionamento interno
    getGender(){
        return this.gender;
    };

    setGender(gender){
        this.gender = gender;
    };

    getDateOfBorn(){
        return this.dateOfBorn;
    };

    setDateOfBorn(dateOfBorn){
        this.dateOfBorn = dateOfBorn;
    };

    calculateAge(){
        return new Date().getFullYear() - this.getDateOfBorn();
    };

    // Metódo abstrato
    bio (){
        throw new Error("Abstract Method")
    };
};

module.exports= {
    Person: Person
};