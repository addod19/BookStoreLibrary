function Book(title, author, pages, read = 'Unread') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookList = {
  books: [], // [new Book('Twist Of The Wrist', 'Keith Code', 135, true),
  // new Book('A Perfect Day', 'Lady Teresa', 40, false)],
  addBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read-status');

    this.books.push(new Book(title.value, author.value, pages.value, read.value ? 'Read' : 'Unread'));
    // title.value = "";
    // author.value = "";
    // pages.value = "";
    // read.value = "";
    view.displayBooks();
  },
  changeBook(position, title, author, pages, read) {
    title ? this.books[position].title = title : null;
    author ? this.books[position].author = author : null;
    pages ? this.books[position].pages = pages : null;
    this.books[position].read = read;
    view.displayBooks();
  },
  deleteBook(position) {
    this.books.splice(position, 1);
    view.displayBooks();
  },
  toggleRead(position) {
    const book = this.books[position];
    book.read = !book.read;
    view.displayBooks();
  },
  toggleAll() {
    if (this.books.every(book => book.read)) {
      this.books.forEach(book => book.read = false);
    } else {
      this.books.forEach(book => book.read = true);
    }
    view.displayBooks();
  },
};

let view = {
  displayBooks() {
    const table = document.querySelector('.list');
    table.innerHTML = '';
    list = bookList.books;
    for (let i = 0; i < list.length; i++) {
      const row = document.createElement('tr');
      let html = '';
      for (const key in list[i]) {
        let id = '';
        if (key == 'read') {
          id = `data-id=${i}`;
        }
        html += `<td ${id}>${list[i][key]}</td>`;
      }
      row.innerHTML = html;
      table.appendChild(row);
      this.hideForm();
    }
  },
  showForm: () => {
    f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'block';
  },
  hideForm: () => {
    f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'none';
  },
};

document.querySelector('#add-book').addEventListener('click', (event) => {
  event.preventDefault();
  bookList.addBook();
}, false);

view.displayBooks();

// let addButton = document.getElementById('submit');
// addButton.addEventListener("click", () => bookList.displayBooks());