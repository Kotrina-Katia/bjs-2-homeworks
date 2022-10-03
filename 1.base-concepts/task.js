"use strict";

// Задача №1

function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - (4*a*c);

  if (d === 0) {
    arr[0] = -b/(2*a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  }
  return arr;
}


// Задача №2

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution;
  let n = (mm - mm0) + ((dd - dd0)*12/365) + ((yyyy - yyyy0)*12);
  let payment = S*(P + (P/((1 + P)**n) - 1));
  totalAmount = payment * n;
  return totalAmount;
}
