// Задача №1. Сравнить массивы

function compareArrays(arr1, arr2) {
  let result;
  if(arr1.length === arr2.length) {
    for(i = 0; i < arr1.length; i++) {
      if(arr1[i] === arr2[i]) {
        result = true;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result; // boolean
}

// Задача №2. Фильтрация и преобразование массива

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number > 0).filter(number => number % 3 ===0).map(number => number * 10);
  return resultArr; // array
}
