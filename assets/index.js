// const myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary() {
//   // do some stuff here
// }

// const defaultBooks = [
//   new Book('Twist Of The Wrist', 'Keith Code', 135, true),
//   new Book('A Perfect Day', 'Lady Teresa', 40, false),
// ];
// defaultBooks.forEach(book => myLibrary.push(book));
// console.log(myLibrary);

// function renderBookHTML(book) {
//   return `<tr>
//   <td>${book.title}</td>
//   <td>${book.author}</td>
//   <td>${book.pages}</td>
//   <td>${book.read}</td>
//   <td><a href="">x</a></td>
// </tr>`;
// }



function renderLibrary() {
  const list = document.getElementsByClassName('list');
  // for (let i = 0; i < myLibrary.length; i++) {
  //   list[i].innerHTML = renderBookHTML(myLibrary[i]);
  // }
  // list[0].innerHTML = renderBookHTML(myLibrary[0]);
}

renderLibrary();

document.getElementById('one').style.color = '#045'

// `<tr>
//     <td>${}</td>
//     <td>${}</td>
//     <td>${}</td>
//     <td>${}</td>
//     <td><a href="">x</a></td>
//   </tr>`
