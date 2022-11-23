// Задача №1. Инкапсуляция студента

// Пункт 1
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let stud1 = new Student("Gleb", "male", 32);
let stud2 = new Student("Olga", "female", 42);
let stud3 = new Student("Lev", "male", 22);

// Пункт 2
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

// Пункт 3
Student.prototype.addMark = function(mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

// Пункт 4
Student.prototype.addMarks = function(...mark1) {
  if(this.marks === undefined) {
    this.marks = [...mark1];
  } else {
    this.marks.push([...mark1]);
  }
}

// Пункт 5
Student.prototype.getAverage = function() {
  const average = this.marks.reduce((accumulator, mark) => accumulator + mark, 0) / this.marks.length;
  return average;
}

// Пункт 6
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
