let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //Constructor
}

function addBookToLibrary(title, author, pages) {
    let a = title;
    let b = author;
    let c = pages;
    console.log(a);
    myLibrary.push(new Book(a, b, c));
    console.log(myLibrary);
    //do stuff here
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
    titleInput.setAttribute('autofocus', '');
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

    addBookButton.addEventListener('click', () => {
        let title = titleInput.textContent;
        let author = authorInput.textContent;
        let pages = pagesInput.textContent;
        addBookToLibrary(title, author, pages);
        document.getElementById('main').removeChild(newForm);
    })
}

