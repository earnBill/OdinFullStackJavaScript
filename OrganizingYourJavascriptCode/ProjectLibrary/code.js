const myLibrary = [];
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('button');
const closeButton = document.querySelector('dialog button');
const container = document.querySelector('.container');
const submit = document.querySelector('.submit');
const dialogTitle = document.querySelector('#book-title');
const dialogAuthor = document.querySelector('#author');
const dialogPages = document.querySelector('#pages')


showButton.addEventListener('click',() =>{
    dialog.showModal();
})

closeButton.addEventListener('click',() => {
    dialog.close();
})

submit.addEventListener('click',(event)=> {
    
    console.log('submit');
    console.log(dialogTitle.value);
    let book = new Book(dialogTitle.value, dialogAuthor.value, dialogPages.value, true );
    myLibrary.push(book);
    createBook(myLibrary[myLibrary.length-1]);
    event.preventDefault();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${(this.pages === true)?"I haave read it!!":"not read it!!"}`
    }
}

function createBook(bookName) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const year = document.createElement('div');
    const button = document.createElement('button');
    const readButton = document.createElement('button');

    card.classList.add('card');
    container.appendChild(card);

    title.textContent = bookName.title;
    card.appendChild(title).classList.add('title');
    
    card.appendChild(author).classList.add('author');
    author.textContent = bookName.author;

    card.appendChild(year).classList.add('year');
    year.textContent = bookName.pages;

    card.appendChild(button).classList.add('removeButton');
    button.textContent = 'Remove';

    card.appendChild(readButton).classList.add('readButton');
    readButtonText();
    
    function readButtonText() {
        if (bookName.read === true) {
            readButton.textContent = 'Read';
            readButton.style.backgroundColor = 'green';
        }
        else {
            readButton.textContent = 'Not read';
            readButton.style.backgroundColor = 'red';
        }
    }


    const removeButtons = document.querySelectorAll('.removeButton');

    removeButtons.forEach((button) => {
        button.addEventListener('click', ()=> {
            button.parentNode.remove();
        })
    })

    let readButtons = document.querySelectorAll('.readButton');

    readButtons.forEach((button)=> { 
        button.addEventListener('click',()=> {
            console.log('click')
            if (button.textContent == 'Read') {
                bookName.read = false;
                console.log('red');
                // button.textContent = 'Not read';
                // button.style.backgroundColor = 'red';
            }
            else {
                console.log('green');
                bookName.read = true;
                // button.textContent = 'Read';
                // button.style.backgroundColor = 'green';
            }
        readButtonText();
            
            
        })
    })
}



function addBookToLibrary(library) {
    
}

function showLibrary(library) {
    for (let book of library) {
        // const div = document.createElement('div')
        
        // let text = book.title + " " + book.author + ' ' + book.pages;
        // div.textContent = text;
        // container.appendChild(div);
        
        createBook(book);
        console.log(book);

    }
}

myLibrary[0] = new Book('Harry Potter', 'Tatsopoulos', 1992, true);
myLibrary[1] = new Book('Hobbit', 'Tolkin', 1000, false);

showLibrary(myLibrary);