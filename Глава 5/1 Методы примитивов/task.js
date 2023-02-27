// Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// Ответ:
undefined (без strict)
Ошибка (strict mode)

