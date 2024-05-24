// Задача 4.
// Во продолжение е дадена функција која што симулира API повик:
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30,
                email: "john@example.com",
            })
        }, 2000)
    });
}
// Ваша задача е да дефинирате асинхрона функција displayUserDetails која што ќе ги испечати податоците во конзола. 
// Да се употребат try/catch блокови.

async function displayUserDetails() {
    try {
        const data = await fetchData();
        console.log('User Details:');
        console.log(`Name: ${data.name}`);
        console.log(`Age: ${data.age}`);
        console.log(`Email: ${data.email}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

displayUserDetails();