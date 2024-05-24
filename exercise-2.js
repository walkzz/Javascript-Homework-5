// Задача 2.
// Напишете 5 функции кои враќаат Promise

// а. да се повикаат истите со .then() и .catch()

// б. да се повикаат истите со async await каде што ќе ги употребите и блоковите try и catch

// addition
function add(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('Both arguments must be numbers');
        }
    });
}
// subtraction
function subtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a - b);
        } else {
            reject('Both arguments must be numbers');
        }
    });
}
// multiplication
function multiply(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a * b);
        } else {
            reject('Both arguments must be numbers');
        }
    });
}
// division
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            if (b !== 0) {
                resolve(a / b);
            } else {
                reject('Cannot divide by zero');
            }
        } else {
            reject('Both arguments must be numbers');
        }
    });
}
// square root
function squareRoot(a) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number') {
            if (a >= 0) {
                resolve(Math.sqrt(a));
            } else {
                reject('Cannot calculate square root of a negative number');
            }
        } else {
            reject('Argument must be a number');
        }
    });
}
