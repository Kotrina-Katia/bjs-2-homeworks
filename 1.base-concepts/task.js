"use strict";

// Задача №1

function solveEquation(a, b, c) {
  let arr = [];
  const descriminant = (b**2) - (4*a*c);

  if (descriminant === 0) {
    arr[0] = -b/(2*a);
  } else if (descriminant > 0) {
    arr[0] = (-b + Math.sqrt(descriminant) )/(2*a);
    arr[1] = (-b - Math.sqrt(descriminant) )/(2*a);
  }
  return arr;
}


// Задача №2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    let loanBody = amount - contribution;
    let S = loanBody;
    let numberOfMonths = (date.getFullYear() - new Date().getFullYear())*12 + date.getMonth() - new Date().getMonth();
    let n = numberOfMonths;
    let P = percent/(12*100);
    let payment = S*(P + (P/(((1 + P)**n) - 1)));
    totalAmount = payment*n;
    totalAmount = +totalAmount.toFixed(2);
  }
  return totalAmount;
}
