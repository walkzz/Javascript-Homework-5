// Задача 3.
// Да се креира функција checkNumber која што ќе прима еден параметар number. 
// Оваа функција треба да враќа Promise со тоа што доколку бројот е парен, 
// треба да се направи resolve и да се испринта пораката “The number is even” a ако бројот е непарен, 
// да се направи reject со пораката “The number is odd”.

// Да се дефинира функција handleSuccess koja што ќе има еден параметар message и ќе го принта во конзола

// Да се дефинира функција handleError која што ќе има еден параметар error и ќе го принта во конзола

// Да се повика функцијата checkNumber со неколку различни аргументи и соодветно во .then() и .catch 
// да се повикаат handleSuccess и handleError

function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject('Input must be a number');
        } else if (number % 2 === 0) {
            resolve('The number is even');
        } else {
            reject('The number is odd');
        }
    });
}
function handleSuccess(message) {
    console.log(message);
}

function handleError(error) {
    console.error(error);
}
checkNumber(2).then(handleSuccess).catch(handleError);
checkNumber(5).then(handleSuccess).catch(handleError);
checkNumber(7).then(handleSuccess).catch(handleError);
checkNumber(10).then(handleSuccess).catch(handleError);
checkNumber('Hello World').then(handleSuccess).catch(handleError);