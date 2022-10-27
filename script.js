
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

// todo: Creates a Read Element inside the book
function createReadElement(bookItem, book) {
  let read = document.createElement('div');
  read.setAttribute('class', 'book-read');
  read.appendChild(createBookElement('h1', 'Read?', "book-read-title"));
  let input = document.createElement('input');
  input.type = 'checkbox';
  input.addEventListener('click', (e) => {
    if(e.target.checked){
      bookItem.setAttribute('class', 'card book read-checked')
      book.read = true;
      // renderBooks();
    } else {
      bookItem.setAttribute('class', 'card book read-unchecked')
      book.read = false;
      //renderBooks();
    }
  });
  if (book.read) {
    input.checked = true;
    bookItem.setAttribute('class', 'card book read-checked');
  }
  read.appendChild(input);
  return read;
}


// todo: Creates a formatted Book Item for the library
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

  bookItem.appendChild(createReadElement(bookItem, book))

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



