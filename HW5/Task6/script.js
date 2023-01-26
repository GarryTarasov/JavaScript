//  7 Создайте объект riddles 
//  Добавьте свойства question, answer
//  создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//  Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
    question: 'Висит груша - нельзя скушать. что это ?',
    answer: 'лампочка',
    hints: ['в 90-е годы их часто тырили в подъездах. Наверняка соседи.', 'у каждой из этих груш есть по патрону. А что поделать, лихие 90-е же'],
    askQuestion() {
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert(this.hints[0]);
        } else {
            return alert('прикинь это и правда лампочка. а я всегда думал, что это боксерская груша');
        }
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert(this.hints[1]);
        } else {
            return alert('прикинь это и правда лампочка. а я всегда думал, что это елочная игрушка');
        }
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert('Ну е-маё! Да это лампочка же. Каждый ребёнок знает это. Иди учись-ты не отгадал.');
        } else {
            return alert('прикинь это и правда лампочка. а я всегда думал, что это гнилая груша');
        }
    }
}
riddles.askQuestion();