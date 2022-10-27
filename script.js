
const books = document.querySelector(".books");

const myLibrary = [{
  title: 'Book1',
  author: 'me',
  pages: 500,
  read: true
},{
  title: 'Book2',
  author: 'you',
  pages: 500,
  read: true
}];


// todo: Creates an HTML Element inside the Book
function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}


// todo: Creates a Book Item for the library
function createBookItem (book, index) {
  const bookItem = document.createElement('div');
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'card book');
  bookItem.appendChild(
    createBookElement("h1", `Title: ${book.title}`, "book-title")
  );
  bookItem.appendChild(
    createBookElement("h1", `Author: ${book.author}`, "book-author")
  );
  bookItem.appendChild(
    createBookElement("h1", `Pages: ${book.pages}`, "book-pages")
  );
  books.insertAdjacentElement('afterbegin', bookItem) //todo: inserts the "bookItem" inside the "books" class
}


// todo: Renders the books of the library to the webpage
function renderBooks () {
  myLibrary.map((book, index) => {
    createBookItem(book, index)
  })
}


renderBooks();



// function Book(title, author, pages, read) {
//   // the constructor...
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }


// function addBookToLibrary() {
//   // do stuff here
// }



