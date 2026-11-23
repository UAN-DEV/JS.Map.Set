"use strict";

// 📋 Завдання на Set
// 2.1.Створіть колекцію Set із початковими значеннями 1, 2, 3.
const mySet = new Set([1, 2, 3]);

// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4.

console.log(mySet.has(3));
console.log(mySet.has(4));

// Додайте ще кілька елементів.
mySet.add(4);
mySet.add(6);
mySet.add(9);

// За допомогою циклу for..of переберіть колекцію та виведіть у консоль.
for (const el of mySet) console.log(el);

// Знайдіть суму цих значень.
console.log(Math.sumPrecise(mySet.values()));

// Видаліть елемент 2.
mySet.delete(2);
// Очистіть усю колекцію.
mySet.clear();

// 2.2. З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.

const unic1 = [...new Set([1, 6, 9, 4, 9, 1, 5, 6])];
console.log(unic1);

// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const unic2 = [...new Set([1,6,9,4,9,1,5,6].concat([5, 10, 11]))];
console.log(unic2);

// 2.3. **(за бажанням). З масиву

const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

// створити:

// 1) масив імен користувачів (унікальних)
const unicName = [...new Set(messages.map(({ name }) => name))];
console.log(unicName);

// 2) мапу вигляду

// Map (2) {Ivo => [{message, date}, {message, date}], Wally => [{message, date}, {message, date}]}
// тобто в мапі імені користувача має співставлятися масив його повідомлень, де кожне повідомлення представлене об'єктом з текстом повідомлення і його датою.
const messagesMap = new Map(
  Array.from(
    Map.groupBy(messages, ({ name }) => name),
    ([name, items]) => [name, items.map(({ message, date }) => ({ message, date }))]
  ),
);
console.log(messagesMap);

// 💡 Рекомендації щодо роботи з Git
// Для повторення та закріплення команд Git щодо роботи з гілками рекомендується дотримуватися такого ж підходу, як і в домашніх завданнях з JavaScript минулого модуля.

// Додатково:

// Для кожної частини завдання передбачити окрему гілку:

// hw-js-map

// hw-js-set
