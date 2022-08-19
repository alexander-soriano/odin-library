let myLibrary = [];

function Book(name,author,pages,haveRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

let shelf = document.querySelector('.shelf');
function display(x) {
    let newdiv = document.createElement('div');
    newdiv.textContent = x;
    shelf.appendChild(newdiv);
};

function addBookToLibrary(name) {
    arr = [];
    myLibrary.forEach(elem => {
        arr.push(elem.name)
    })

    if (arr.includes(name)){
        alert('You already have this book');
    } else if(name==='') {
        alert('Your input is empty');
    } else {
        let newBook = new Book (name);
        myLibrary.push(newBook);
        display(name);
    }
    
};

addBookToLibrary('Noli me Tangere');
addBookToLibrary('El Filibusterismo');



// myLibrary.forEach(elem => {
//     display(elem.name)
// })

let newBook = document.querySelector('.newbook');
newBook.addEventListener('click',() => {
    const value = document.querySelector('input#bookTitle');
    addBookToLibrary(value.value);

    
});