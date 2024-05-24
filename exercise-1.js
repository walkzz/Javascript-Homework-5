// Задача 1.
// Да се дефинира функција printFunc koja што ќе прима еден параметар seconds.
// Оваа функција треба да печати "Coding is not that hard!" во конзола после специфицираните секунди.
// Доколку ја повикаме функцијата со аргумент кој што не е број, 
// функцијата треба да испечати "Please enter number".Исто така потребно е да го лимитираме 
// бројот на секунди да биде едноцифрен број.Доколку аргументот не е едноцифрен број, треба да се испечати: 
// "Please enter one digit number" Пр.Ако аргументот е бројот 3, "Coding is not that hard!" ќе се 
// испринта во конзола после 3 секунди.
function printFnc(seconds){
    if(typeof seconds !== "number"){
        console.log("Please enter a number");
        return null;
    }
    else if(seconds > 9){
        console.log("Please enter one digit number");
    }
    let multiSeconds = seconds * 1000;
    setInterval(() =>{
        console.log("Coding is not that hard!");
    }, multiSeconds)
}
printFnc(3);