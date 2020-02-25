function Book(title, author, pages, read = 'Unread') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookList = {
  books: [new Book('Twist Of The Wrist', 'Keith Code', 135, 'Read'),
  new Book('A Perfect Day', 'Lady Teresa', 40, 'Unread')],
  addBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read-status');
    if (title.value === '' || author.value === '' || pages.value === '' || read.value === '') {
      view.showAlert('Please enter all fields', 'danger');
    } else {
      this.books.push(new Book(title.value, author.value, pages.value, read.value));
      view.clearInputs();
      view.displayBooks();
      view.showAlert('Book added successfully!!', 'success');
    }
  },
  deleteBook(position) {
    this.books.splice(position, 1);
    view.displayBooks();
    view.showAlert('Book delete successfully', 'success');
  },
  toggleRead(position) {
    const book = this.books[position];
    book.read = book.read == 'Read' ? 'Unread' : 'Read';
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
        if (key == 'read') {
          const btnClass = list[i][key] === 'Unread' ? 'btn btn-info' : 'btn btn-success';
          html += `<td id=${i}><button class="${btnClass} btn-block" onclick="bookList.toggleRead(${i})">${list[i][key]}</button></td>`;
        } else {
          html += `<td class="book-text">${list[i][key]}</td>`;
        }
      }
      html += `<td><button id=${i} onclick="bookList.deleteBook(${i})" class="btn btn-danger  btn-block">Delete</button></td>`;
      row.innerHTML = html;
      table.appendChild(row);
      this.hideForm();
    }
    this.addEmptyRow();
  },
  showForm: () => {
    const f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'block';
  },
  hideForm: () => {
    const f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'none';
  },
  closeButton: () => {
    const f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'none';
  },
  clearInputs: () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  },
  addEmptyRow: () => {
    table = document.querySelector('.list');
    rowEmpty = document.createElement('tr');
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

view.displayBooks();
