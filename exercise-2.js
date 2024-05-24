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

// calling the functions with .then() and .catch()
add(20, 3).then(result => {
    console.log('Addition result:', result);
}).catch(error => {
    console.error('Addition error:', error);
});

subtract(10, 3).then(result => {
    console.log('Subtraction result:', result);
}).catch(error => {
    console.error('Subtraction error:', error);
});

multiply(2, 3).then(result => {
    console.log('Multiplication result:', result);
}).catch(error => {
    console.error('Multiplication error:', error);
});

divide(5, 2).then(result => {
    console.log('Division result:', result);
}).catch(error => {
    console.error('Division error:', error);
});

squareRoot(4).then(result => {
    console.log('Square root result:', result);
}).catch(error => {
    console.error('Square root error:', error);
});

async function doOperations() {
    try {
        let result = await add(20, 3);
        console.log('Addition result:', result);
    } catch (error) {
        console.error('Addition error:', error);
    }

    try {
        let result = await subtract(10, 3);
        console.log('Subtraction result:', result);
    } catch (error) {
        console.error('Subtraction error:', error);
    }

    try {
        let result = await multiply(2, 3);
        console.log('Multiplication result:', result);
    } catch (error) {
        console.error('Multiplication error:', error);
    }

    try {
        let result = await divide(5, 2);
        console.log('Division result:', result);
    } catch (error) {
        console.error('Division error:', error);
    }

    try {
        let result = await squareRoot(4);
        console.log('Square root result:', result);
    } catch (error) {
        console.error('Square root error:', error);
    }
}

// calling the function
doOperations();