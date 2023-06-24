//Initial Array
let myLibrary = [];

//Initial example books
addBookToLibrary('Herr der Ringe - Die Gefährten','J.R.R. Tolkien','695');
addBookToLibrary('Harry Potter - und die Kammer des Schreckens','J.K. Rowling','720');
addBookToLibrary('Der Herr der Inge und das schmutzige Dutzend','JFCK Coop LLC','69');


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
    console.dir(myLibrary);
    output.textContent = "";
    createCard();
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
        if(titleInput.value == ""){
            titleInput.focus();
            titleInput.style.backgroundColor = 'red';
        }else if(authorInput.value == ""){
            authorInput.focus();
            authorInput.style.cssText = 'background: red;'
        }else if(pageInput.value == ""){
            pageInput.focus();
            pageInput.style.cssText ='background: red';
        } else {
            addBookToLibrary(titleInput.value, authorInput.value, pageInput.value);
            output.removeChild(newForm);
            createCard();
            update();
        }
    }

    cancelFormButton.onclick = function() {
        output.removeChild(newForm);
    }
}

//Function Create Cards
function createCard() {
    output.textContent = "";

    for(i=0; i<myLibrary.length; i++) {
        const cardWrapper = document.createElement('div');
        cardWrapper.setAttribute('id', 'card-wrapper');
        output.append(cardWrapper);
    
        //Title
        const newCardTitle = document.createElement('div');
        const newTitleOutput = document.createElement('p');
    
        newCardTitle.setAttribute('class', 'card-wrapper');
    
        newTitleOutput.setAttribute('id', 'newTitleOutput');
        newTitleOutput.textContent = myLibrary[i].title;
    
        cardWrapper.appendChild(newCardTitle);
        newCardTitle.appendChild(newTitleOutput);
    
        //Author
        const newCardAuthor = document.createElement('div');
        const newAuthorOutput = document.createElement('p');
    
        newCardAuthor.setAttribute('class', 'card-wrapper');
    
        newAuthorOutput.setAttribute('id', 'newAuthorOutput');
        newAuthorOutput.textContent = 'Author: ' + myLibrary[i].author;
    
        cardWrapper.appendChild(newCardAuthor);
        newCardAuthor.appendChild(newAuthorOutput);
    
        //Pages
        const newCardPage = document.createElement('div');
        const newPageOutput = document.createElement('p');
    
        newCardPage.setAttribute('class', 'card-wrapper');
    
        newPageOutput.setAttribute('id', 'newPageOutput');
        newPageOutput.textContent = 'Pages: ' + myLibrary[i].pages;
    
        cardWrapper.appendChild(newCardPage);
        newCardPage.appendChild(newPageOutput);

        //Remove-Button
        const removeCardButton = document.createElement('button');
        removeCardButton.setAttribute('type', 'button');
        removeCardButton.setAttribute('id', 'removeCardButton');
        removeCardButton.textContent = 'Remove Book';
        cardWrapper.appendChild(removeCardButton);

        removeCardButton.onclick = function() {
            removeCard(newCardTitle.textContent);
            update();
        }
    }
}

//delete card
function removeCard(parseTitle) {
    console.log(parseTitle);
    for(i=0; i<myLibrary.length;i++){
        if(myLibrary[i].title == parseTitle){
            myLibrary.splice(i,1);
        }
    }
}

//Element declaration
const output = document.querySelector('#output');

document.getElementById('createBook').onclick = function() {
    createForm();
}