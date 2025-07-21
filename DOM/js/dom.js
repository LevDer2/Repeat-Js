// function openOrSenior(data) {
//   // Створюємо порожній масив для результату
//   let result = [];

//   // Перебираємо кожну пару [age, handicap]
//   for (let i = 0; i < data.length; i++) {
//     let age = data[i][0];
//     let handicap = data[i][1];

//     if (age >= 55 && handicap > 7) {
//       result.push("Senior");
//     } else {
//       result.push("Open");
//     }
//   }

//   // Повертаємо масив результатів
//   return result;
// }

// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));


// function evenOrOdd(number) {
//     const result = number / 2;
//   if (Number.isInteger(result)) {
//     return "Even"
//   }
//   else {
//     return "Odd"
//   }
// }

// console.log(evenOrOdd(6)); // Even
// console.log(evenOrOdd(5)); // Odd

// function solution(number){
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//        sum += i;
//     }
//   }
//   return sum;
// }

// console.log(solution(10));

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   }
//   else if (names.length === 1) {
//     return(`${names[0]} likes this`);
//   }
//   else if (names.length === 2) {
//     return(`${names[0]} and ${names[1]} likes this`);
//   }
//   else if (names.length === 3) {
//     return(`${names[0]}, ${names[1]} and ${names[2]} likes this`)
//   }
//   else if (names.length >= 4) {
//     return (`${names[0]}, ${names[1]} and ${names.length - 2} likes this`)
//   }
// }
// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Peter", "LEV"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Max", "John", "Mark", "Lev"]));
// console.log(likes(["Max", "John", "Mark", "Lev", "mark"]));


// function word(sentence) {
//   const words = sentence.split(" ");
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     const w = words[i];

//     if (w.length >= 5) {
//       result.push(w.split('').reverse().join(''));
//     } else {
//       result.push(w);
//     }
//   }

//   return result.join(" ");
// }

// console.log(word("Hello world this is amazing")); 
// // 👉 "olleH world this is gnizama"


// const word = "hello";
// const reversed = word.split('').reverse().join('');

// console.log(reversed); // 👉 "olleh"

// function sumTwoSmallestNumbers(numbers) {  
//     const minOne = Math.min(...numbers);
//     const minTwo =   numbers.sort((a, b) => a - b);
//     const result = minOne + minTwo[1];
//     return result;
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// let ops = {
//     "AND" : (a, b) => a && b,
//     "OR" : (a, b) => a || b,
//     "XOR" : (a, b) => a ^ b,
// }
// function logicalCalc(array, op){
//     return array.reduce(ops[op])
// }

// console.log(logicalCalc([true, true, false], "AND"));

// Compilator

// function generateHashtag(str) {
//     const words = str.split(" ");
//     let all = "";

//     if (str.trim() === "") {
//         return false;
//     }

//     for (let i = 0; i < words.length; i++) {
//         const element = words[i];
//         if (element === "") continue;
//         const capitalized = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
//         all += capitalized;
//     }

//     const hashtag = `#${all}`;

//     if (hashtag.length > 140) {
//         return false;
//     }

//     return hashtag;
// }

// console.log(generateHashtag("yes baby yeah"));

// function generateHashtag (str) {
//     const words = str.split(" ")
//     let all = "";
//     for (let i = 0; i < words.length; i++) {
//         const element = words[i];
//         console.log(element);
// //         const capitalized = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
// // console.log(capitalized);
// let a = ""
// if (words == a || words.length >= 140) {
//     return false
// }
// else {
//             const capitalized = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
// console.log(capitalized);
// all += capitalized;
// }
//     }
    // let a = ""
    // const b = str.split(" ").join(""); 
    // if (b == a) {
    //     return false
    // }
    // else {
    //     const space = str.split(" ").join(""); 
    // return `#${space}`
    // }
// }


// const word = "freecodecamp"

// const capitalized =
//   word.charAt(0).toUpperCase()
//   + word.slice(1)
// console.log(capitalized);


function duplicator(text) {
    const duplicate = "";
    
}

console.log(duplicator("lol"));
