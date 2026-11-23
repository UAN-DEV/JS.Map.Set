"use strict";

// 1.1. 📋 Завдання на Map
// Нехай даний масив масивів:[[1,"first"], [3,"third"]]
// Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
const myMap = new Map([
  [1, "first"],
  [3, "third"],
]);

// Отримайте кількість елементів.
console.log(myMap.size);

// Додати та видалити елемент.
myMap.set(2, "two").delete(3);
console.log("myMap :>> ", myMap);
myMap.set(3, "third");

// Здійсніть пошук за ключом.
console.log(myMap.get(2));

// Перевірити, чи є в мапі числівник для числа 2.
console.log(myMap.has(2));

// Отримайте список ключів та значень окремо.
console.log(myMap.keys());
console.log(myMap.values());

// 1.2. *(за бажанням) Написати функцію, яка перероблятиме текст з числами
// "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
// на текст з порядковими числівниками за допомогою мапи вище:
// "This year I will enter the first grade. I have two brothers. I am the third child of my parents."

const text =
  "This year I will enter the 1 grade. I have 2 brothers. I am the 3 child of my parents.";
const changeNumberToWord = (text) =>
  text
    .split(" ")
    .map((el) => (myMap.has(Number(el)) ? myMap.get(Number(el)) : el))
    .join(" ");
console.log(changeNumberToWord(text));


// 💡 Рекомендації щодо роботи з Git
// Для повторення та закріплення команд Git щодо роботи з гілками рекомендується дотримуватися такого ж підходу, як і в домашніх завданнях з JavaScript минулого модуля.

// Додатково:

// Для кожної частини завдання передбачити окрему гілку:

// hw-js-map

// hw-js-set
