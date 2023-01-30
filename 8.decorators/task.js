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
  wrapper.allCount = [];

  function wrapper(...args) {
    wrapper.allCount.push(args);
    let timeoutId = null;

    func.count = [];
    return function(...args){
      func.count.push(args);
      if (timeoutId) {
        console.log("удалили текущий таймаут");
        clearTimeout(timeoutId);
      }
    
      console.log("создаём новый таймаут");
      timeoutId = setTimeout(() => {
        timeoutId = null;
        console.log(func(...args));
        console.log("вызвали колбек");
      }, delay);
    }
  }

  return wrapper;
}
