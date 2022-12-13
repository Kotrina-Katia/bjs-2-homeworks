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
        if (book.state > 30){
            if (this.books.length === 0){
                this.books = [book];
            } else {
                this.books.push(book);
            }
        }
        return this.books;
    }

    findBookBy(type, value){
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].type === value){
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName){
        for (let i =0; i < this.books.length; i++){
            if (this.books[i].name === bookName){
                let theBook = this.books.splice(i);
                return theBook;
            }
        }
        return null;
    }
}


//Задача №3. Журнал успеваемости*

class Student {
    constructor(name){
        this.name = name;
        this.subjects = [];
    } 

    addMark(mark, subject){
        if (mark < 1 || mark > 5){
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        } else {
            if (this.subjects.length === 0){
                this.subjects = [[mark, subject]];
            } else {
                this.subjects.push([mark, subject]);
            }
        }
        return this.subject;
    }

    getAverageBySubject(subject){
        if (subject === "biology"){
            console.log("Несуществующий предмет");
        }

        for (i = 0; i < this.subjects.length; i++){
            if (this.subjects[i][1] === subject){
                let theSubject = [];
                if (markSubject.length === 0){
                    theSubject = [this.subjects[i][1]];
                } else {
                    theSubject = theSubject.push(this.subjects[i][1]);
                }
                return theSubject;   
            }
        }
        let averageBySubject = theSubject.reduce((summaOfMarks, mark) => summaOfMarks + mark, 0) / theSubject.length;  
        console.log("Средний балл по предмету " + subject + averageBySubject);
    }

    getAverage(){
        let average = 0;
        for (i = 0; i < this.subjects.length; i++){
            average += this.subjects[i][0];
        }
        console.log("Средний балл по всем предметам " + (average / this.subjects.length));
    }

    exclude(){
        delete this;
        console.log("Исключен за попытку подделать оценки");
    };
}
  