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
        const findResult = this.books.find((item) => item[type] === value);
        return findResult || null;
    }

    giveBookByName(bookName){
        const findResult = this.books.find((item) => item.name === bookName);
        this.books = this.books.filter((item) => item.name !== bookName);
        return findResult || null;
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

        let marksOfSubject = [];
        let summaMarksBySubject = 0;
        for (let i = 0; i < this.subjects.length; i++){
            if (this.subjects[i][1] === subject){
                if (marksOfSubject.length === 0){
                    marksOfSubject = [this.subjects[i][0]];
                } else {
                    marksOfSubject.push(this.subjects[i][0]);
                } 
            }
            summaMarksBySubject = marksOfSubject.reduce((summa, mark) => summa + mark, 0);
        }
        return parseFloat((summaMarksBySubject / marksOfSubject.length).toFixed(1));
    }

    getAverage(){
        let summaMarks = 0;
        for (let i = 0; i < this.subjects.length; i++){
            summaMarks += this.subjects[i][0];
        }
        return parseFloat((summaMarks / this.subjects.length).toFixed(1));
    }

    exclude(reason){
        delete this;
        return reason;
    };
}
 
