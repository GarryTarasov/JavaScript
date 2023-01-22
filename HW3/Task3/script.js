// 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


alert('Задача №3');

function findMax(a, b, c, ) {
    max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
alert(findMax(Number(prompt('Number 1')), Number(prompt('Number 2')), Number(prompt('Number 3'))));