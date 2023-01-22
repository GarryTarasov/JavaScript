// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomArr = new Array(5);
let elemSum = 0;
let findElem = 3;
for (let i = 0; i < randomArr.length; i++) {
    randomArr[i] = Math.floor(Math.random() * 10);
    elemSum += randomArr[i];
}
alert(randomArr);
alert(`Сумма элементов массива ${elemSum}`);
let minElem = randomArr[0];
for (let i = 0; i < randomArr.length; i++) {
    if (minElem > randomArr[i]) {
        minElem = randomArr[i];
    }
}
alert(`Минимальное число массива ${minElem}`);
for (let i = 0; i < randomArr.length; i++) {
    if (findElem === randomArr[i]) {
        findElem = true;
    }
}
if (findElem === true) {
    alert('В данном массиве есть число 3');
} else {
    alert('В данном массиве нет числа 3');
}