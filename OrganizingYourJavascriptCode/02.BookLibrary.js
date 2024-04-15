function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${(this.read===true)?"i read it":"not read yet"}`;
    }
}

let book1 = new Book('The Hobbit','J.R.R. Tolkien', 295, false);
console.log(book1);
console.log(book1.info());


