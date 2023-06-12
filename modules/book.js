class Book {
  constructor(title, author) {
    (this.title = title), (this.author = author);
  }

  getBook() {
    return { title: this.title, author: this.author };
  }
}

export default Book;