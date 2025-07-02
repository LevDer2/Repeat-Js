// switch заміна if..else, else if

// function caseInSwitch(val) {
//     var answer = ""; // тут буде потім виводитися
//     switch (val) { // Тут буде братися значеня з функції
//     case 1: // Він працює так val === 1
//         answer = "alpha" //Якщо значення буде првильне буде вивдодитися в answer "alpha"
//         break; // Якщо значення вірне то він зупинеться
        
//     case 2:
//         answer = "bata"
//         break;

//        case 3:
//         answer = "data"
//         break;

//     case 4:
//         answer = "delta"
//         break;

//         default: // если нечево не совподает то будет работать default
//             answer = "stuff";
//             break;
//     }

//     return answer; 
// }

// console.log(caseInSwitch(5)); // console.log должен быть обезателен

// function manyOpinions(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = "low"
//             break;
//     }
//     return answer;
// }

// console.log(manyOpinions(3));

// var count = 0;

// // function cc(card) {
// //     switch (card) {
// //         case 2:
// //         case 3:
// //         case 4:
// //         case 5:
// //         case 6:
// //             count++;
// //             break;
// //         case 10:
// //         case "J":
// //         case "Q":
// //         case "K":
// //         case "A":
// //             count--;
// //             break;
// //     }
// //     var holdbet = "Hold";
// //     if (count > 0) {
// //         holdbet = "Bet"
// //     }

// //     return count + " " + holdbet;
// // }

// // cc(2); cc(3); cc(7); cc('K'); cc('A');
// // console.log(cc(4));
// // cc(2); cc("K"); cc(10); cc('K'); cc('A');
// // console.log(cc(4));

// var count = 0;

// var count = 0;

// function cc(card) {
//     if ([2, 3, 4, 5, 6].includes(card)) {
//         count++;
//     } else if ([10, "J", "Q", "K", "A"].includes(card)) {
//         count--;
//     }

//     var holdbet = "Hold";
//     if (count > 0) {
//         holdbet = "Bet";
//     }
    
//     return count + " " + holdbet;
// }

// // Приклад викликів:
// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(4)); // показує стан після першої серії
// cc(2); cc("K"); cc(10); cc('K'); cc('A');
// console.log(cc(4)); // показує новий стан

// var testObj = {
//     hat: "ballcap",
//     shirt: "jersey"
// };
// var hatValue = testObj.hat;
// console.log(hatValue);


// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     // Якщо значення порожнє — видаляємо властивість
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     // Якщо поле "tracks" відсутнє — створюємо його
//     if (!records[id].hasOwnProperty("tracks")) {
//       records[id]["tracks"] = [];
//     }
//     // Додаємо нову пісню до списку
//     records[id]["tracks"].push(value);
//   } else {
//     // В іншому випадку — просто оновлюємо або додаємо властивість
//     records[id][prop] = value;
//   }

//   return records;
// }

// // ✅ Приклади виклику:
// updateRecords(recordCollection, 5439, "artist", "ABBA");
// updateRecords(recordCollection, 5439, "tracks", "Dancing Queen");
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// updateRecords(recordCollection, 2548, "artist", "");

// console.log(recordCollection);

// Task 1

// let book = {
//   title: "JavaScript Basics",
//   pages: 120
// };

// function addAuthor(obj, authorName) {
//   obj.author = authorName;
//   return obj
// }

// addAuthor(book, "Lev");
// console.log(book);
// // { title: "JavaScript Basics", pages: 120, author: "Lev" }


// Task 2

// function sumArray(arr) {
//   return arr[0] + arr[1] + arr[2] + arr[3];
// }

// sumArray([1, 2, 3, 4]); // => 10
// console.log(sumArray([1, 2, 3, 4]));

// or

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, 20, 30])); // 60
// console.log(sumArray([])); // 0


function converter(str) {
  return parseInt(str, 2);
}

console.log(converter("1110000"));