// switch заміна if..else, else if

function caseInSwitch(val) {
    var answer = ""; // тут буде потім виводитися
    switch (val) { // Тут буде братися значеня з функції
    case 1: // Він працює так val === 1
        answer = "alpha" //Якщо значення буде првильне буде вивдодитися в answer "alpha"
        break; // Якщо значення вірне то він зупинеться
        
    case 2:
        answer = "bata"
        break;

       case 3:
        answer = "data"
        break;

    case 4:
        answer = "delta"
        break;

        default: // если нечево не совподает то будет работать default
            answer = "stuff";
            break;
    }

    return answer; 
}

console.log(caseInSwitch(5)); // console.log должен быть обезателен

function manyOpinions(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            break;
    }
    return answer;
}

console.log(manyOpinions(3));