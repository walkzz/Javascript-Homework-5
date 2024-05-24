// Задача 5.
// Да се дефинира функција со име countdown која ќе прима еден параметар seconds.
// Внатре во функцијата, користете setInterval за да испринтате порака за одбројување во конзолата на секоја секунда, 
// почнувајќи од дадената вредност на секунди до 0. Откако одбројувањето ќе достигне 0, 
// да се испринта „Countdown complete!“.

function countdown(seconds) {
    const countInterval = setInterval(() => {
        if (seconds > 0) {
            console.log(`Countdown: ${seconds} seconds remaining`);
            seconds--;
        } else {
            console.log('Countdown complete!');
            clearInterval(countInterval);
        }
    }, 1000);
}

countdown(5);