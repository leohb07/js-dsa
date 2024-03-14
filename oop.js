class Book {
  constructor(title, page, isbn) {
    this.title = title;
    this.page = page;
    this.isbn = isbn;
  }
}

const book = new Book("JS", 2, 5);

// O uso do prototype economiza memoria e reduz o custo de processamento no que diz respeito a atribuir funcoes a instancia
Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle();

const newBook = new Book("TS", 1, 0);

newBook.printTitle();
