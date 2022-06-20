"use strict";

// let number = 4;
// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     a:'a',
//     1:'b',
//     2:'c'
// };
// //коммит

// console.log(arr[1]);
// console.log(arrObj["1"]);
//alert("что-то тут");
//ввод пользователем со всплывающего окна
//const result = confirm('ты тут?');
//ответ на вопрос пользователя
//const answer = prompt('Вам есть 18?','')
//чтобы преобразовать из строки в число достаточно перед вырадением написать +
//const answer = +prompt('Вам есть 18?','')



let result = '';
const length = 7;

for (let i = 1; i<length; i++){
    for (let j = 0; j< i; j++){
        result +='*';
    };

    result += '\n';
}
console.log(result);

function firstTask() 
    // Пишем решение вот тут
    {
    for (let i = 5; i < 11; i++){
        console.log(i);
    }
    
}

firstTask();

function secondTask() {
    // Пишем решение вот тут
 for (let i = 20; i>9; i--){
    console.log(i);
    if (i == 13){
        break;
    }
 }   
    
}

function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i < 10; i++){
        i = i+1;
        console.log(i);
    }
    
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i<16){
    ++i;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
   
}

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i=5; i<=10; i++){
            arrayOfNumbers[i-5]=i;

}
console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();


// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i =0; i<arr.length; i++){
        result[i]=arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return data;
}

console.log(typeof(5));

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (i = 0; i< 5; i++){
        if (typeof(data[i]) == 'number'){
            data[i] = data[i]*2;
        } else {
            data[i] = data[i] + ' - done';
        }
    }   

    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 5; i>0; i--){
        for (let j=0; j<5; j++){
            result[j] = data[i];
            console.log(result);
        }

    }
    console.log(result);
    // Не трогаем
    return result;
}