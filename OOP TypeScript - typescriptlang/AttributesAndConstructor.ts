class Cat {
    // os campos/atributos devem ser declarados antes de serem passador dentro do metódo construtor
    name: string;
    color: string;
    weight: number;  // os tipos dos atributos devem ser especificados, do contrário serão inferidos

    constructor(name: string, color: string, weight: number){
        this.name = name;
        this.color = color;
        this.weight = weight;
    };
};

const cat1 = new Cat("Kiko", "cinza", 3.5);

console.log(cat1);