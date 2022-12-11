//Задача №1. Печатное издание

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(number){
        if (number >= 100) {
            this._state = 100;
        } else if (number <= 0) {
            this._state = 0;
        } else {
            this._state = number;
        }
    }

    get state(){
        return this._state;
    }

    fix(){
        this.state *= 1.5;
        return this.state;
    }  
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


//Задача №2. Библиотека

class Library{
    constructor(name = ""){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (this.books.length === 0){
            this.books = [book];
        } else {
            if (book.state > 30){
                this.books = this.books.push(book);
            }
        }
        return this.books;
    }

    findBookBy(type, value){
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value){
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName){
        for (let i =0; i < this.books.length; i++){
            if (this.books[i][this.name] === bookName){
                this.books.splice(i, 1);
                return this.books[i];
            }
        }
        return null;
    }
}



  