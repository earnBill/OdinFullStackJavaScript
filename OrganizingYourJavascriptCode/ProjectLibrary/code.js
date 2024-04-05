const myLibrary = [];
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('button');
const closeButton = document.querySelector('dialog button');

showButton.addEventListener('click',() =>{
    dialog.showModal();
})

closeButton.addEventListener('click',() => {
    dialog.close();
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${(this.pa0ges === true)?"I haave read it!!":"not read it!!"}`
    }
}

function addBookToLibrary(library) {
    
}

function showLibrary(library) {
    for (let book of library) {
        console.log(book);
    }
}

myLibrary[0] = new Book('Harry Potter', 'Tatsopoulos', 1992, true);


showLibrary(myLibrary);