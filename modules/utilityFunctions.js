class UtilityFunctions {
  // Saving to Local Storage -> uses bookArray
  static setStorage = (array) => {
    localStorage.setItem('bookData', JSON.stringify(array));
  };

  // Getting from Local Storage
  static getStorage = () => {
    const retrievedBooks = JSON.parse(localStorage.getItem('bookData'));
    return retrievedBooks;
  };

  // Showing books on browser  -> uses container
  static showBooks = (element, template) => {
    const retrievedBooks = this.getStorage();
    element.innerHTML = retrievedBooks
      .map((book, index) => template(book, index))
      .join('');
  };

  static addBook(array, book) {
    array.push(book);
    this.setStorage(array);
  }

  static removeBook(array, idx) {
    array.splice(idx, 1);
    this.setStorage(array);
  }
}

export default UtilityFunctions;