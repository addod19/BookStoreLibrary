let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {

}

document.querySelector('#submit').addEventListener('click', (e) => {
  
  const toggleForm = document.querySelector('.hidden-form');
  // toggleForm.style.display = 'block';
  if (toggleForm.style.display === 'none') {
    toggleForm.style.display = 'block';
  } else {
    toggleForm.style.display = 'none';
  }
  // alert('hello');
});