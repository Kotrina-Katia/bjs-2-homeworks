//Задача №1 Усовершенствованный кэширующий декоратор

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({hash: hash, value: result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}


//Задача 2. Debounce-декоратор с моментальным вызовом и подсчётом количества вызовов

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;

  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }

    timeoutId = setTimeout(() => {
      wrapper.count++;
      func(...args);
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
