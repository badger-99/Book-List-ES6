//  Imports
import bookTemplate from './modules/bookTemplate.js';
import UtilityFunctions from './modules/utilityFunctions.js';
import BookCollection from './modules/bookCollection.js';
import Book from './modules/book.js';

// Variables
const bookList = document.querySelector('#book-list');
const bookForm = document.querySelector('#book-form');
const formVisibility = document.querySelector('#form-visibility');
const contactDetails = document.querySelector('#contact-details');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');
const heading = document.getElementById('header-name');
// const dateDiv = document.getElementById('date');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

// initializing new array, populating it with localStorage, and rendering it
const bookListObj = new BookCollection();
let bookArray = bookListObj.getArray();
bookArray = [...UtilityFunctions.getStorage()];
UtilityFunctions.showBooks(bookList, bookTemplate);

// ADD button event listener
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  const bookObj = book.getBook();
  bookForm.reset();
  UtilityFunctions.addBook(bookArray, bookObj);
  UtilityFunctions.showBooks(bookList, bookTemplate);
});

// Remove button event listener
bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const bookNum = event.target.dataset.index;
    const idx = parseInt(bookNum, 10);
    UtilityFunctions.removeBook(bookArray, idx);
    UtilityFunctions.showBooks(bookList, bookTemplate);
  }
});

// Nav event listeners
list.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.classList.remove('hidden');
  formVisibility.classList.add('hidden');
  contactDetails.classList.add('hidden');
  heading.innerHTML = 'Awesome Books';
});

addNew.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.classList.add('hidden');
  formVisibility.classList.remove('hidden');
  contactDetails.classList.add('hidden');
  heading.innerHTML = 'Add A New Book';
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.classList.add('hidden');
  formVisibility.classList.add('hidden');
  contactDetails.classList.remove('hidden');
  heading.innerHTML = 'Contact Information';
});
