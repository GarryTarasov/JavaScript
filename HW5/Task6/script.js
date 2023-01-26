//  7 Создайте объект riddles 
//  Добавьте свойства question, answer
//  создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//  Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
    question: 'Висит груша - нельзя скушать. что это ?',
    answer: 'Лампочка',
    hints: [
        'спасает от темноты',
        'у каждой из этих груш есть по патрону'
    ],
    askQuestion() {
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert(this.hints[0]);
        } else {
            return alert('Молодец');
        }
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert(this.hints[1]);
        } else {
            return alert('Молодец');
        }
        if (prompt(this.question).toLowerCase() !== riddles.answer) {
            alert('Вы проиграли');
        } else {
            return alert('Молодец');
        }
    }
}
riddles.askQuestion();