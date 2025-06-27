// var and let, можна потім змінювати а const ні

// let name = "Lev"
// console.log(name);
// name = 12;
// console.log(name);
// var a;
// var b = 10;
// console.log(`a = ${a}`); // null
// console.log(`b = ${b}`); // 10

// a = 7
// b = a

// console.log(`a = ${a}`); // 7
// console.log(`b = ${b}`); // 7

// var reminder;
// reminder = 11 % 3; // Остаток від ділення
// console.log(reminder); // 2

// var a = 3;
// var b = 17;
// var c = 12;

// // Це буде теж саме що й  a = a + 12;
// a += 12;
// b += 9;
// c += 7;

// console.log(a); // 15
// console.log(b); // 26
// console.log(c);  // 19

// var a = 11;
// var b = 9;
// var c = 3;

// // Це буде теж саме що й  a = a - 6;
// a -= 6;
// b -= 15;
// c -= 1;

// console.log(a); // 5
// console.log(b); // -6
// console.log(c); // 2

// var firstName = "Lev";
// var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
// console.log(thirdToLastLetterOfFirstName); // L


// Task 1
// function isDivisibleBy3(number) {
//     if (number % 3 === 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isDivisibleBy3(6)); // true
// console.log(isDivisibleBy3(2)); // false


// Task 2
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


// Task 2 with function
// function coupleNumbers(i) {
//     for (let a = i; a <= 20; a += 2) {
//     console.log(a);
    
// }
// }

// coupleNumbers(2)


// Task 3
// function multiply(a, b) {
//     // console.log(a);
//     // console.log(b);
//     if (isNaN(a) && isNaN(b) ) {
//         alert("Перезагрузи сторінку та напиши цифрами відповідь")
//     }
//     else {
//         alert(`Вийшло число ${a*b}`)
//     }
// }

// console.log(multiply(prompt("Chose a first number for multiplication"), prompt(`Chose a second number for multiplication`)));

// var Myarray = ["Lev", "12"];
// Myarray.push(["happy", "programmer"]);
// console.log(Myarray); // ["Lev", "12", ["happy", "programmer"]]

// var element = ["name", "password", "age"];
// element.pop(); // .pop() видаляє останій елемент
// console.log(element); // ["name", "password"]

// var array = ["Stimpson", "J", "cat"];
// array.shift(); // .shift Видаляє найперший елемент
// console.log(array); // "J", "cat"
// array.unshift("dog"); // .unshift Добавляє ще один елемент в спочатку обєкта 
// console.log(array); // "dog", "J", "cat"

// Task 1

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(toCelsius(68)); // 20

// Task 2

let nums = [4, 9, 2, 99, 18];
function findMax(arr) {
        const maxNumber = Math.max(...nums);
        return maxNumber;
}
console.log(findMax(nums)); // 99

// Task 3

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// return у функції це коли ти возрашаешь значення якщо його не пыдставити то буде underfined а так ти зможеш її вернути значення.

// Щоб дізнатися довжину рядка або масиву потрібно зміна.length - 1 щоб дізнатися довжину

// Це оператор нестрогий тоесть він одобрювати якщо буде наприклад 3 == "3" а цей оператор не буде одобрювати 3 === "3" 