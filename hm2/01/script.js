var allNumbers  = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers   = ['это', 'массив', 'без', 'чисел'],
    empty = [];


function isNumber(val) {
    return typeof val === 'number';
}

function isAllTrue(source, filterFn) {

    try {
        if (source.length) {
            var isNum = false;

            recIndexes(source, 0);
            function recIndexes(ar, index) {
                isNum = filterFn(ar[index]);
                if (++index < ar.length && isNum) recIndexes(ar, index);
            }

            return isNum;
        } else {
            throw new Error('Пустой sourse!');
        }

    } catch(e) {
        return e;
    }

}

console.log(isAllTrue(allNumbers, isNumber));
console.log(isAllTrue(someNumbers, isNumber));
console.log(isAllTrue(noNumbers, isNumber));
console.log(isAllTrue(empty, isNumber));