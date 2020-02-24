function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let bookList = {
  books: [new Book('Twist Of The Wrist', 'Keith Code', 135, true),
  new Book('A Perfect Day', 'Lady Teresa', 40, false),],
  displayBooks: function () {
    this.books.forEach(book => {
      console.log([book.title, book.author, book.pages, book.read ? "Read" : "Unread"].join(', '));
    });
  },
  addBook: function () {
    let title = document.getElementById('title');
    // author = document.getElementById('author'),
    // pages = document.getElementById('pages'),
    // read = document.getElementById('read');

    this.books.push(new Book(title.value, null, null));
    title.value = "";
    this.displayBooks();
  },
  changeBook: function (position, title, author, pages, read) {
    title ? this.books[position].title = title : null;
    author ? this.books[position].author = author : null;
    pages ? this.books[position].pages = pages : null;
    this.books[position].read = read;
    this.displayBooks();
  },
  deleteBook: function (position) {
    this.books.splice(position, 1);
    this.displayBooks();
  },
  toggleRead: function (position) {
    let book = this.books[position]
    book.read = !book.read;
    this.displayBooks();
  },
  toggleAll: function () {
    if (this.books.every(book => book.read)) {
      this.books.forEach(book => book.read = false)
    } else {
      this.books.forEach(book => book.read = true)
    }
    this.displayBooks();
  }
};

let view = {
  displayBooks: function () {
    let table = document.querySelector('.list');
    table.innerHTML = "";
    list = bookList.books;
    for (let i = 0; i < list.length; i++) {
      let row = document.createElement('tr');
      let html = "";
      for (let key in list[i]) {
        html += `<td>${list[i][key]}</td>`;
      }
      row.innerHTML = html;
      table.appendChild(row);
    }
  }
}


const showForm = () => {
  f = document.getElementsByClassName('hidden-form');
  f[0].style.display = 'block';
}

// let addButton = document.getElementById('submit');
// addButton.addEventListener("click", () => bookList.displayBooks());