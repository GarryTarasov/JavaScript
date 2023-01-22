// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayRandom = (b) => {
    for (let i = 0; i < b; i++) {
        arrRandom[i] = Math.floor(Math.random() * 10);
    }
}

function findNumber(arrRandom, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arrRandom[i] === elem) {
            return alert(`В этом массиве есть цифра ${elem}`);
        }
    }
    return alert(`В этом массиве нет цифры ${elem}`);
}

const arrRandom = [];
arrayRandom(5);
alert(arrRandom);
let sum = 0;
let min = arrRandom[0];
let elemFind = 3;
for (let i = 0; i < arrRandom.length; i++) {
    const element = arrRandom[i];
    if (element < min) {
        min = element;
    }
    sum += element;
}
alert(`Сумма всех элементов массива = ${sum}`);
alert(`Минимальное число массива = ${min}`);
findNumber(arrRandom, elemFind);