//Задача №1. Форматтер чисел

function parseCount(string){
    let result = Number.parseInt(string, 10);
    if (isNaN(result)){
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(string){
    try {
        let res = parseCount(string);
        return res;
    } catch(error) {
        return error;
    }
}


//Задача №2. Треугольник

class Triangle{
    constructor(firstSide, secondSide, thirdSide){
        if ((firstSide + secondSide < thirdSide) || (secondSide + thirdSide < firstSide) || (firstSide + thirdSide < secondSide)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }


    getPerimeter(){
        const perimeter = parseFloat(this.firstSide + this.secondSide + this.thirdSide);
        return perimeter;
    }

    getArea(){
        const halfOfPermeter = (this.firstSide + this.secondSide + this.thirdSide) / 2;
        const area = parseFloat(Math.sqrt(halfOfPermeter * (halfOfPermeter - this.firstSide) * (halfOfPermeter - this.secondSide) * (halfOfPermeter - this.thirdSide)).toFixed(3));
        return area;
    }
}

function getTriangle(firstSide, secondSide, thirdSide){
    try {
        let triangle = new Triangle(firstSide, secondSide, thirdSide);
        return triangle;
    } catch(error) {
        let string = () => "Ошибка! Треугольник не существует";
        return {getPerimeter: string, getArea: string};
    }
}