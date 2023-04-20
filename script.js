let title = 'Unknown1';
let author = 'Unknown2';
let pages = '0';
let read = true;
let bookCount = 0;

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookCount = bookCount;
    //Constructor
}

function addBookToLibrary() {
    title = document.getElementById('bookTitleInput').value;
    author = document.getElementById('bookAuthorInput').value;
    pages = document.getElementById('bookPagesInput').value;
    bookCount += 1;
    
    myLibrary.push(new Book(title, author, pages, read));
    console.dir(myLibrary);
}

function createForm() {

    //Create Form
    const newForm = document.createElement('form');
    newForm.setAttribute('onsubmit', 'return false;');
    newForm.setAttribute('method', 'post');
    newForm.setAttribute('id', 'formId')
    newForm.classList.add('form-body');
    document.getElementById('main').appendChild(newForm);

    //Create Content-Wrapper
    const divInputContentWrapper = document.createElement('div');
    divInputContentWrapper.setAttribute('id', 'divInputContentWrapper');
    newForm.appendChild(divInputContentWrapper);

    //Create div-wrapper
    const divTitleWrapper = document.createElement('div');
    divTitleWrapper.classList.add('div-wrapper');
    divTitleWrapper.setAttribute('id', 'divTitleWrapper');
    divInputContentWrapper.appendChild(divTitleWrapper);

    const divAuthorWrapper = document.createElement('div');
    divAuthorWrapper.classList.add('div-wrapper');
    divAuthorWrapper.setAttribute('id', 'divAuthorWrapper');
    divInputContentWrapper.appendChild(divAuthorWrapper);

    const divPagesWrapper = document.createElement('div');
    divPagesWrapper.classList.add('div-wrapper');
    divPagesWrapper.setAttribute('id', 'divPagesWrapper');
    divInputContentWrapper.appendChild(divPagesWrapper);

    //Create Input-Elements
    
    //Title
    const titleLabelInput = document.createElement('label');
    titleLabelInput.setAttribute('for', 'bookTitleInput');
    titleLabelInput.classList.add('form-label');
    titleLabelInput.textContent = 'Title: ';
    document.getElementById('divTitleWrapper').appendChild(titleLabelInput);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'bookTitleInput');
    titleInput.autofocus = true;
    titleInput.required = true;
    titleInput.classList.add('form-input')
    titleInput.setAttribute('type', 'text');
    document.getElementById('divTitleWrapper').appendChild(titleInput);

    //Author
    const authorLabelInput = document.createElement('label');
    authorLabelInput.setAttribute('for', 'bookAuthorInput');
    authorLabelInput.classList.add('form-label');
    authorLabelInput.textContent = 'Author: ';
    document.getElementById('divAuthorWrapper').appendChild(authorLabelInput);

    const authorInput = document.createElement('input');
    authorInput.setAttribute('id', 'bookAuthorInput');
    authorInput.required = true;
    authorInput.classList.add('form-input')
    authorInput.setAttribute('type', 'text');
    document.getElementById('divAuthorWrapper').appendChild(authorInput);

    //Pages
    const pagesLabelInput = document.createElement('label');
    pagesLabelInput.setAttribute('for', 'bookPagesInput');
    pagesLabelInput.classList.add('form-label');
    pagesLabelInput.textContent = 'Pages: ';
    document.getElementById('divPagesWrapper').appendChild(pagesLabelInput);

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('id', 'bookPagesInput');
    pagesInput.required = true;
    pagesInput.classList.add('form-input')
    pagesInput.setAttribute('type', 'number');
    document.getElementById('divPagesWrapper').appendChild(pagesInput);

    //Create button-wrapper
    const divButtonWrapper = document.createElement('div');
    divButtonWrapper.classList.add('div-wrapper');
    divButtonWrapper.setAttribute('id', 'divButtonWrapper');
    newForm.appendChild(divButtonWrapper);

    //"Create-Book-Button"
    const addBookButton = document.createElement('button');
    addBookButton.setAttribute('id', 'formAddBookButton');
    addBookButton.textContent = 'create Book';
    divButtonWrapper.appendChild(addBookButton);

    //Cancel Button
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancelButton');
    cancelButton.textContent = 'cancel';
    divButtonWrapper.appendChild(cancelButton);

    //Cancel-Function
    cancelButton.addEventListener('click', () => {
        document.getElementById('main').removeChild(newForm);
    })

    //Create Book Function
    addBookButton.addEventListener('click', () => {
        addBookToLibrary();
        createCard();
        document.getElementById('main').removeChild(newForm);
    })

    //Form-Validation

}

function createCard() {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    document.getElementById('content-section').appendChild(newCard);

    // const cardBookCount = document.createElement('h1');
    // cardBookCount.textContent = bookCount;
    // newCard.appendChild(cardBookCount);

    const cardWrapper = document.createElement('div');
    cardWrapper.id = 'cardWrapper';
    newCard.appendChild(cardWrapper);

    const cardTitle = document.createElement('h1');
    cardTitle.textContent = title;
    newCard.classList.add('card-content');
    cardWrapper.appendChild(cardTitle);

    const cardAuthor = document.createElement('h2');
    cardAuthor.textContent = 'Author: ' + author;
    newCard.classList.add('card-content');
    cardWrapper.appendChild(cardAuthor);

    const cardPages = document.createElement('h3');
    cardPages.textContent = 'Pages: ' + pages;
    newCard.classList.add('card-content');
    cardWrapper.appendChild(cardPages);

    const cardRemoveButton = document.createElement('button');
    cardRemoveButton.textContent = 'remove Book';
    cardRemoveButton.onclick = 'removeBook()';
    newCard.appendChild(cardRemoveButton);

    cardRemoveButton.addEventListener('click', () => {
        newCard.remove();
        updateLibrary();
        console.dir(myLibrary);
    });
}

function updateLibrary() {
    let index = myLibrary.indexOf(bookCount - 1);
    myLibrary.splice(-index, 1);

    let libLength = myLibrary.length;

    for(let i=0; i<libLength; i++){
        myLibrary[i].bookCount = i + 1;
        document.querySelectorAll('.card').bookCount = i;
    }

    bookCount += -1;
}
