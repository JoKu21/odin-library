//Initial Array
let myLibrary = [];

//Initial example books
addBookToLibrary('Herr der Ringe','J.R.R. Tolkien','695');
addBookToLibrary('Harry Potter','J.K. Rowling','720');
addBookToLibrary('Der Herr der Inge','Don Mucklon LLC','69');

//Book-Constructor
function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  }

//Function to push new Book to Library
function addBookToLibrary(title, author, pages) {
  // do stuff here
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

//Function to show array
function update() {
    for(i=0; i<myLibrary.length;i++) {
        console.dir(myLibrary[i]);
    }
}

//Create Form
function createForm() {
    let output = document.querySelector('#output');
    output.textContent = "";

    //Form
    let newForm = document.createElement('form');
    newForm.setAttribute('id', 'newForm');
    output.appendChild(newForm);

    //Title
    const newTitle = document.createElement('div');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    newTitle.setAttribute('class', 'form-wrapper');

    titleLabel.setAttribute('for', 'titleInput');
    titleLabel.setAttribute('class', 'form-label');
    titleLabel.textContent = 'Title';

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'titleInput');
    titleInput.setAttribute('placeholder', 'What is the title?');

    newForm.appendChild(newTitle);
    newTitle.appendChild(titleLabel);
    newTitle.appendChild(titleInput);

    //Author
    const newAuthor = document.createElement('div');
    const authorLabel = document.createElement('label');
    const authorInput = document.createElement('input');

    newAuthor.setAttribute('class', 'form-wrapper');

    authorLabel.setAttribute('for', 'authorInput');
    authorLabel.setAttribute('class', 'form-label');
    authorLabel.textContent = 'Author';

    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'authorInput');
    authorInput.setAttribute('placeholder', 'Who is the author?');

    newForm.appendChild(newAuthor);
    newAuthor.appendChild(authorLabel);
    newAuthor.appendChild(authorInput);

    //Pages
    const newPage = document.createElement('div');
    const pageLabel = document.createElement('label');
    const pageInput = document.createElement('input');

    newPage.setAttribute('class', 'form-wrapper');

    pageLabel.setAttribute('for', 'pageInput');
    pageLabel.setAttribute('class', 'form-label');
    pageLabel.textContent = 'Pages';

    pageInput.setAttribute('type', 'number');
    pageInput.setAttribute('id', 'pageInput');
    pageInput.setAttribute('placeholder', 'How many pages?');

    newForm.appendChild(newPage);
    newPage.appendChild(pageLabel);
    newPage.appendChild(pageInput);

    //Create Buttons
    const formButtonWrapper = document.createElement('dib');
    const createBookButton = document.createElement('button');
    const cancelFormButton = document.createElement('button');

    formButtonWrapper.setAttribute('class', 'form-wrapper');

    createBookButton.setAttribute('type', 'button');
    createBookButton.setAttribute('id', 'createBookButton');
    createBookButton.textContent = 'Create Book';

    cancelFormButton.setAttribute('type', 'button');
    cancelFormButton.setAttribute('id', 'cancelFormButton');
    cancelFormButton.textContent = 'Cancel';

    newForm.appendChild(formButtonWrapper);
    formButtonWrapper.appendChild(createBookButton);
    formButtonWrapper.appendChild(cancelFormButton);

    //Button functions
    createBookButton.onclick = function() {
        addBookToLibrary(titleInput.value, authorInput.value, pageInput.value);
        output.removeChild(newForm);
        update();
    }

    cancelFormButton.onclick = function() {
        output.removeChild(newForm);
    }
}

//Function Create Cards
function createCard() {
    
}

//Element declaration

const output = document.querySelector('#output');

document.getElementById('createBook').onclick = function() {
    createForm();
}