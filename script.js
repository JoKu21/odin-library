//Initial Array
let myLibrary = [];

//Book-Constructor
function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }

//Function to push new Book to Library
function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  const newBook = new Book(title, author, pages, read);
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

    //Read-Button
    const readButtonWrapper = document.createElement('div');
    const readButtonLabel = document.createElement('label');
    const toggleWrapper = document.createElement('label');
    const readButton = document.createElement('input');
    const readButtonSpan = document.createElement('span');

    readButtonWrapper.setAttribute('class', 'form-wrapper');

    readButtonLabel.setAttribute('class', 'form-label');
    readButtonLabel.textContent = 'Read: no / yes';

    toggleWrapper.setAttribute('id', 'toggleWrapper');
    toggleWrapper.setAttribute('class', 'switch');

    readButton.setAttribute('id', 'readButton');
    readButton.setAttribute('type', 'checkbox');

    readButtonSpan.setAttribute('class', 'slider round');

    newForm.appendChild(readButtonWrapper);
    readButtonWrapper.appendChild(readButtonLabel);
    readButtonWrapper.appendChild(toggleWrapper);
    toggleWrapper.appendChild(readButton);
    toggleWrapper.appendChild(readButtonSpan);


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
            let variable = '';
            if(readButton.checked){
                variable = 'gelesen';
            } else{
                variable = 'nicht gelesen'
            }
            addBookToLibrary(titleInput.value, authorInput.value, pageInput.value, variable);
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

        //Read-Button
        const newReadButtonWrapper = document.createElement('div');
        const newReadButtonLabel = document.createElement('p');
        const newToggleWrapper = document.createElement('label');
        const newToggleInput = document.createElement('input');
        const newToggleSlider = document.createElement('span');

        newReadButtonWrapper.setAttribute('class', 'card-wrapper newReadButtonWrapper');

        newReadButtonLabel.setAttribute('class', 'newReadButtonLabel2');
        newReadButtonLabel.textContent = 'Read: ';

        newToggleWrapper.setAttribute('class', 'toggleWrappe2');
        newToggleWrapper.setAttribute('class', 'switch');

        newToggleInput.setAttribute('class', 'readToggleInput');
        newToggleInput.setAttribute('type', 'checkbox');

        if(myLibrary[i].read == 'gelesen'){
            newToggleInput.setAttribute('checked','');
        }

        newToggleInput.onclick = function() {
            for(i=0; i<myLibrary.length; i++) {
                
                if(newToggleInput.checked){
                    if(myLibrary[i].title == newTitleOutput.textContent && myLibrary[i].read == 'nicht gelesen'){
                        if(myLibrary[i].title == newTitleOutput.textContent) {
                            myLibrary[i].read = 'gelesen';
                        }
                    } 
                } else {
                    if(myLibrary[i].title == newTitleOutput.textContent && myLibrary[i].read == 'gelesen'){
                        if(myLibrary[i].title == newTitleOutput.textContent) {
                            myLibrary[i].read = 'nicht gelesen';
                        }
                    }
                }
                
                
                

            }
            console.dir(myLibrary);
        }

        newToggleSlider.setAttribute('class', 'slider round');

        cardWrapper.appendChild(newReadButtonWrapper);
        newReadButtonWrapper.appendChild(newReadButtonLabel);
        newReadButtonWrapper.appendChild(newToggleWrapper);
        newToggleWrapper.appendChild(newToggleInput);
        newToggleWrapper.appendChild(newToggleSlider);

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


//function toggle
function toggle(mode) {
    if(mode == true){
        return 'read'
    } else return 'not read';
}