"use strict";

let array = [1, 2, 3, 4, 5, 6];

// Аналог forEach
function forEach(ar, fn) {
    for (let item of ar) {
        fn(item);
    }
}

// Аналог filter
function filter(ar, fn) {
    let result = [];

    for (let item of ar) {
        if (fn(item)) result[result.length] = item;
    }

    return result;
}

// Аналог map
function map(ar, fn) {
    let result = [];

    for (let item of ar) {
        result[result.length] = fn(item);
    }

    return result;
}

// Аналог slice
function slice(ar, from = 0, to = ar.length) {
    let result = [];

    to = (to > ar.length) ? ar.length : to;

    if (from < 0) {
        for (var i = ar.length - 1; i > Math.abs(from) + 1; i--) {
            result[result.length] = ar[i];
        }

    } else if (from >= 0 && to > 0) {
        for (var j = from; j < to; j++) {
            result[result.length] = ar[j];
        }
    } else if (to < 0) {
        for (var l = from; l < ar.length - Math.abs(to); l++) {
            result[result.length] = ar[l];
        }
    }
    return result;
}

// Аналог reduce
function reduce(ar, fn, initialValue = ar[0]) {

    let result;

    reduceInner(ar, 0, initialValue);
    function reduceInner(ar, index, previousValue) {
        result = fn(previousValue, ar[index], index, ar);
        if (++index < ar.length) reduceInner(ar, index, result);
    }

    return result;
}

// Вспомогательная функция-callback для reduce
function sumTest(previousValue, currentItem, index, array) {
    return previousValue + currentItem;
}

// Аналог splice
function splice(ar, start, deleteCount, ...newItems) {
    let arStart = [],
        arEndTemp = [],
        arEnd = [],
        removed = [];

    // Создаём arStart
    for (var i = 0; i < start; i++) {
        arStart[arStart.length] = ar[i];
    }

    // Создаём arEndTemp
    for (var j = arStart.length; j < ar.length; j++) {
        arEndTemp[arEndTemp.length] = ar[j];
    }

    // Удаляем елементы
    if (deleteCount >= 0) {
        for (var l = 0; l < arEndTemp.length; l++) {
            if (l < deleteCount) {
                removed[removed.length] = arEndTemp[l];
            } else {
                arEnd[arEnd.length] = arEndTemp[l];
            }
        }
    } else {
        throw new Error('deleteCount must be greater than zero!')
    }

    // TODO: array должен меняться глобально
    ar = concat(arStart, newItems, arEnd);

    return removed;
}

// Аналог concat
function concat(...ars) {
    let result = [];
    for (let ar of ars) {
        for (let item of ar) {
            result[result.length] = item;
        }
    }
    return result;
}


// Результаты
//forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let sqare = map(array, item => item * item);
let slicedAr = slice(array, 2, -2);
let reducedAr = reduce(array, sumTest);
let splicedAr = splice(array, 2, 2, 'test', 'test2');
console.log(splicedAr);
console.log(array);
