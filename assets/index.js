/* eslint-disable no-use-before-define */
function Book(title, author, pages, read = 'Unread') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let library = [];

const view = {
  displayBooks() {
    const table = document.querySelector('.list');
    table.innerHTML = '';
    library = JSON.parse(localStorage.getItem('books'));
    const list = library;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < list.length; i++) {
      const row = document.createElement('tr');
      let html = '';
      // eslint-disable-next-line no-restricted-syntax
      for (const key in list[i]) {
        if (key === 'read') {
          const btnClass = list[i][key] === 'Unread' ? 'btn btn-info' : 'btn btn-success';
          html += `<td id=${i}><button class="${btnClass} btn-block" onclick="bookList.toggleRead(${i})">${list[i][key]}</button></td>`;
        } else {
          html += `<td class="book-text">${list[i][key]}</td>`;
        }
      }
      html += `<td><button id=${i} onclick="bookList.deleteBook(${i})" class="btn btn-danger  btn-block">Delete</button></td>`;
      row.innerHTML = html;
      table.appendChild(row);
      this.closeButton();
    }
    this.addEmptyRow();
  },
  showForm: () => {
    const f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'block';
  },
  closeButton: () => {
    const f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'none';
  },
  clearInputs: () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => { input.value = ''; });
  },
  addEmptyRow: () => {
    const table = document.querySelector('.list');
    const rowEmpty = document.createElement('tr');
    rowEmpty.className = 'last-row';
    rowEmpty.innerHTML = `<td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button onclick="view.showForm()" class="btn btn-success btn-block">Add Book</button></td>`;
    table.appendChild(rowEmpty);
  },
  showAlert: (message, className) => {
    const div = document.createElement('div');
    div.className = ` alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const main = document.querySelector('.main');
    const table = document.querySelector('#table');
    main.insertBefore(div, table);

    // vanish in 2 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  },
};

// eslint-disable-next-line no-unused-vars
const bookList = {
  // If storage is empty we store the demo books
  populateStorage() {
    if (!localStorage.length) {
      library.push(new Book('Twist Of The Wrist', 'Keith Code', 135, 'Read'));
      library.push(new Book('A Perfect Day', 'Lady Teresa', 140, 'Unread'));
      localStorage.setItem('books', JSON.stringify(library));
    }
  },
  updateStorage() {
    localStorage.setItem('books', JSON.stringify(library));
  },
  addBook() {
    window.event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read-status');
    if (title.value === '' || author.value === '' || pages.value === '' || read.value === '') {
      view.showAlert('Please enter all fields', 'danger');
    } else {
      library.push(new Book(title.value, author.value, pages.value, read.value));
      this.updateStorage();
      view.clearInputs();
      view.closeButton();
      view.displayBooks();
      view.showAlert('Book added successfully!!', 'success');
    }
  },
  deleteBook(position) {
    library.splice(position, 1);
    this.updateStorage();
    view.displayBooks();
    view.showAlert('Book deleted successfully!!', 'info');
  },
  toggleRead(position) {
    const book = library[position];
    book.read = book.read === 'Read' ? 'Unread' : 'Read';
    this.updateStorage();
    view.displayBooks();
  },
  toggleAll() {
    if (this.books.every(book => book.read)) {
      this.books.forEach(book => { book.read = false; });
    } else {
      this.books.forEach(book => { book.read = true; });
    }
    view.displayBooks();
  },
};

// When the user clicks anywhere outside of the modal, close it
const modal = document.getElementById('id01');
window.onclick = (event) => {
  if (event.target === modal) {
    view.closeButton();
  }
};

bookList.populateStorage();

view.displayBooks();
