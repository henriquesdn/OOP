// tanto classes quanto interfaces podem ser genéricas, uma classe genérica tem seu tipo inferido quando é instanciada
class Box<type> {
    contents: type;

    constructor(contents: type){
        this.contents = contents;
    };
};

const box1 = new Box("Opa"); // const box1: Box<string>