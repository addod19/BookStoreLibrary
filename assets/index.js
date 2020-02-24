let myLibrary = [];


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}


const inputs = document.querySelectorAll('input');
function clear() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

// setting attributes
createBook.setAttribute('id', 'toggle');
table.setAttribute('class', 'tableWrap');

addButton.innerHTML = 'Add Book +';

document.body.appendChild(addButton);
// document.mainContainer.insertBefore(addButton, hidddenForm);
// Styling elements
addButton.classList.add('btnStyle');
mainContainer.classList.add('main');
table.classList.add('tableStyle');
tbody.classList.add('tableContent')

// setting id attribute to button
addButton.setAttribute('id', 'myToggle');
const btnStyle = document.querySelector('.btnStyle');


// toggle book form
document.querySelector('#myToggle').addEventListener('click', (e) => {
  alert('You ckicked me');
  
  // const toggleForm = document.querySelector('#toggle');
  // if (toggleForm.style.display === 'none') {
  //   toggleForm.style.display = 'block';
  // } else {
  //   toggleForm.style.display = 'none';
  // }
});
