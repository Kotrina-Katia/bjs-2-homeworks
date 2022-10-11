// Задание 1

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }

    if (max < arr[i]) {
      max = arr[i];
    }

    sum += arr[i];
  }
   
  avg = sum/arr.length;
  avg = +avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams([-99, 99, 10]))


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// arrOfArr = []
function makeWork(arrOfArr, worker) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = worker(arrOfArr[i]);

    if (max < sum) {
      max = sum;
    }
  }
  
  return max;
}


// Задание 3

function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  let distance;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }

    distance = Math.abs(max - min);
  }

  return distance;
}

