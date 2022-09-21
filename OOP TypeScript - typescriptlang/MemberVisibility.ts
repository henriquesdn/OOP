// os membros (metódos e propriedades) de uma classe por default são public, ou seja, podem ser vistos de qualquer escopo

// já um membro que é precedido pelo modificador de acesso "private" pode ser visto apenas dentro do escopo da classe em que se encontra
class Book {
  title: string;
  chapters: number;
  private pagesPerChapter = 20;

  constructor(title: string, chapters: number) {
    this.title = title;
    this.chapters = chapters;
  }

  getNumberOfPages(): number {
    return this.chapters * this.pagesPerChapter;
  }
}

const book1 = new Book("Harry Porco", 12);

console.log(book1.getNumberOfPages());
// console.log(book1.pagesPerNumber);   reberiamos um erro ao tentar imprimir o atributo pagesPerNumber pois ele está setado como privado

// existe também o modificador "protected", este torna o membro visível no escopo de todas as classes que extendem a classe em que ele se encontra
