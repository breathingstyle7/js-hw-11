//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
let arrayWithNegativeNum = [3, -2, 5, 6, -8, 2];

function sortByNegativeNumbers (array) {
    return array.filter(num => num > 0)
};

console.log(sortByNegativeNumbers(arrayWithNegativeNum));


//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9

let array = [3, 5, -9, 7, 2, 8, -10, 6];

function sumOfNumbers(arr) {
  const filtered = arr.filter(num => num > 0 && num % 3 === 0);
  const sum = filtered.reduce((total, num) => total + num, 0);
  return sum;
}

console.log(sumOfNumbers(array));
