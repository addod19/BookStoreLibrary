function Book(title, author, pages, read = 'Unread') {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let bookList = {
  books: [new Book('Twist Of The Wrist', 'Keith Code', 135, 'Read'),
  new Book('A Perfect Day', 'Lady Teresa', 40, 'Unread')],
  addBook: function () {
    let title = document.getElementById('title'),
      author = document.getElementById('author'),
      pages = document.getElementById('pages'),
      read = document.getElementById('read-status');
    this.books.push(new Book(title.value, author.value, pages.value, read.value));
    view.clearInputs();
    view.displayBooks();
  },
  changeBook: function (position, title, author, pages, read) {
    title ? this.books[position].title = title : null;
    author ? this.books[position].author = author : null;
    pages ? this.books[position].pages = pages : null;
    this.books[position].read = read;
    view.displayBooks();
  },
  deleteBook: function (position) {
    this.books.splice(position, 1);
    view.displayBooks();
  },
  toggleRead: function (position) {
    let book = this.books[position]
    book.read = book.read == "Read" ? "Unread" : "Read";
    view.displayBooks();
  },
  toggleAll: function () {
    if (this.books.every(book => book.read)) {
      this.books.forEach(book => book.read = false)
    } else {
      this.books.forEach(book => book.read = true)
    }
    view.displayBooks();
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
        if (key == 'read') {
          let btnClass = list[i][key] === 'Unread' ? "btn btn-info" : "btn btn-success";
          html += `<td id=${i}><button class="${btnClass} btn-block" onclick="bookList.toggleRead(${i})">${list[i][key]}</button></td>`
        } else {
          html += `<td class="book-text">${list[i][key]}</td>`
        }
      }
      html += `<td><button id=${i} onclick="bookList.deleteBook(${i})" class="btn btn-danger btn-block">Delete</button></td>`;
      row.innerHTML = html;
      table.appendChild(row);
      this.hideForm();
    }
    this.addEmptyRow();
  },
  showForm: () => {
    f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'block';
  },
  hideForm: () => {
    f = document.getElementsByClassName('hidden-form');
    f[0].style.display = 'none';
  },
  renderForm: () => {
    row = document.querySelector('.last-row');
    console.log(row);
    html = `<form id="form" class="form">
    <td>
    <div class="form-row">
                  <div class="form-group"><input type="text" maxlength="35" name="title" id="title"></div>
                </td>
                <td>
                  <div class="form-group"><input type="text" maxlength="35" name="author" id="author"></div>
                </td>
              <td>
                <div class="form-group"><input type="text" maxlength="5" name="pages" id="pages"></div>
              </td>
                <td>
                <div class="form-group">
                <select id="read-status" name="read-status" class="form-control form-control-md">
                  <option value="Read">Read</option>
                  <option value="Unread">Unread</option>
                </select>
                </div>
                </td>
                </div>
                <td><button id="add-book" onclick="bookList.addBook()" class="btn btn-success btn-block">Add book</button></td>
  </form>`;
    row.innerHTML = html;
  },
  clearInputs: () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  },
  addEmptyRow: () => {
    table = document.querySelector(".list");
    rowEmpty = document.createElement('tr');
    rowEmpty.className = 'last-row';
    rowEmpty.innerHTML = `<td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button onclick="view.renderForm()" class="btn btn-success btn-block">Add Book</button></td>`;
    table.appendChild(rowEmpty);
  }
}

view.displayBooks();

