let myLibrary = [];

function Book(name,author,pages,haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function addBookToLibrary(name) {
    let newBook = new Book (name);
    myLibrary.push(newBook);
};

addBookToLibrary('Noli me Tangere');
addBookToLibrary('El Filibusterismo');

let shelf = document.querySelector('.shelf');

function display() {
myLibrary.forEach((elem) => {
    let newdiv = document.createElement('div');
    newdiv.textContent = elem.name;
    shelf.appendChild(newdiv); 
});
};

display()

let newBook = document.querySelector('.newbook');
newBook.addEventListener('click',() => {
    const value = document.querySelector('input#bookTitle');
    addBookToLibrary(value.value);

    let newdiv = document.createElement('div');
    newdiv.textContent = value.value;
    shelf.appendChild(newdiv); 
})