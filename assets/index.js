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
    console.log(read.value)
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
          html += `<td id=${i}><button onclick="bookList.toggleRead(${i})">${list[i][key]}</button></td>`
        } else {
          html += `<td>${list[i][key]}</td>`
        }
      }
      html += `<td><button id=${i} onclick="bookList.deleteBook(${i})">Delete</button></td>`;
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
  clearInputs: () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
  }
}

document.querySelector("#add-book").addEventListener("click", function (event) {
  event.preventDefault();
  bookList.addBook();
}, false);

view.displayBooks();


// setting attributes
// createBook.setAttribute('id', 'toggle');
// table.setAttribute('class', 'tableWrap');

// addButton.innerHTML = 'Add Book +';

// document.body.appendChild(addButton);
// // document.mainContainer.insertBefore(addButton, hidddenForm);
// // Styling elements
// addButton.classList.add('btnStyle');
// mainContainer.classList.add('main');
// table.classList.add('tableStyle');
// tbody.classList.add('tableContent')

// // setting id attribute to button
// addButton.setAttribute('id', 'myToggle');
// const btnStyle = document.querySelector('.btnStyle');


// toggle book form
// document.querySelector('#myToggle').addEventListener('click', (e) => {
//   alert('You ckicked me');

//   // const toggleForm = document.querySelector('#toggle');
//   // if (toggleForm.style.display === 'none') {
//   //   toggleForm.style.display = 'block';
//   // } else {
//   //   toggleForm.style.display = 'none';
//   // }
// });
