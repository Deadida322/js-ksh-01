console.log("Скрипть работает, а я нет!"); //Вывод в консоль

let gleb = "loh"; //Объявление переменной типа строка

console.log(gleb);

gleb = "ne loh"; //переприсваиваем

console.log(gleb);

let digit1 = 12; //Объявление числовой переменной
let digit2 = 20;

let res = digit1 + digit2; //инициализация результата

console.log(res);

digit1 = 12;
digit2 = "20"; //Инициализирована как строка

console.log(digit1 + digit2); // ПОэтому результат 1220, потому что сложение выполняется как сложение строк

let name = "Gleb";
let surname = "Lohov";
let patronymic = "Sergeevich";

console.log(name, surname); //Консоль принимает много аргументов

let fio = name + " " + surname + " " + patronymic; //Сложение строк (конкатенация)
console.log(fio);

let firstChar = name[0]; //Получение первого символа строки
console.log(firstChar);

let l = name.length; //Получение длины строки
console.log(l);

let lastChar = name[l - 1]; //Получение последнего символа строки (-1, потому что индексы с нуля)
console.log(lastChar);

//Массивы

let arr = []; //Пустой массив
let noEmptyArr = ["Глеб", "Влад", "Маша", "Ира"]; //объявляем массив с элементами

console.log(noEmptyArr); //Вывод массива

let firstElem = noEmptyArr[0]; //Получаем первый элемент массива

console.log(firstElem);
let lastElem = noEmptyArr[noEmptyArr.length - 1]; //Получаем последний элемент массива
console.log(lastElem);

noEmptyArr.push("Пафнутий"); //Добавление нового элемента в конец массива
console.log(noEmptyArr);
noEmptyArr.unshift("Рябина"); //Добавление элемента в начало массива
console.log(noEmptyArr);

//Шаблонные строки - удобный вывод строк

//let fio = name + " " + surname + " " + patronymic; теперь можно сделать красивее

fio = `Имя: ${name}, Фамилия: ${surname}, Отчество: ${patronymic}`;
console.log(fio);

//Ветвление (условные конструкции)

let glebsDO = "бегает";

if (glebsDO == "спит") {
    //Код, который выполняется, если в скобках правда
    console.log("Gleb loh");
} else {
    console.log("Gleb молодец"); //Код, который выполняется, если в скобках неправда
}

if (glebsDO == "спит" || "бегает") {
    //Код, который выполняется, если в скобках правда
    console.log("Gleb loh");
} else if (glebsDO == "бегает") {
    //Эта конструкция выполняется, если не выполнилась первая,
    //а условие внутри правда
    console.log("Глеб бегун"); //сюда не доходит, потому что выполнилось уже первое условие
} else {
    console.log("Gleb молодец"); //Код, который выполняется, если в скобках неправда
}

//Функции

function simplelog() {
    //Объявление функции без параметров, которая ничего не возвращает
    console.log("Я функция лог, я бесполезна и ниче не делаю, кроме лога");
}

simplelog(); //вызов функции без параметров

function log(str) {
    //Функция принимающая аргумент и объявляеющая её, как str внутри функции
    console.log(str);
}

log("Некоторая строка"); //Вызов функции с аргументами
log("Другая строка для вывода"); //Вызов функции с другими аргументам

function sumLog(a, b) {
    console.log(a + b);
}

sumLog(2, 10); //вызов функции с двумя аргументами

let result = sumLog(1, 2); //функция ничего не возвращает, а следовательно не имеет результата работы, который можно присвоить
console.log(result);

function sum(a, b) {
    return a + b;
}

result = sum(10, 30); //теперь в result мы можем положить результат выполнения функции

console.log(result);

result = sum(digit1, digit2); //В функции мы можем передавать ещё и переменные, а не только строгие значения

function rate(val) {
    if (val <= 0) {
        return "Это мало";
    } else if (val > 0 && val <= 100) {
        return "Пойдёт";
        console.log("ААААААААААААААААААААа"); // этот код никогда не выполнится, потому что он идёт в одном блоке после return
    } else {
        return "Моё почтение";
    }
}
console.log(rate(-20));
console.log(rate(20));
console.log(rate(2000));

//Сейчас мы будем изучать циклы

let counter = 0; //объявили счётчик

while (counter < 10) {
    console.log(counter);
    counter = counter + 1; //увеличиваеми счётчик, пока не достигнем условия описанного в while
}

//i++  это то же самое, что и i=i+1 и то же самое, что и i+=1
for (let i = 0; i < 10; i++) {
    //тот же результат, что и вайл, только в фор
    //тело цикла фор
    console.log(i);
}
// console.log(i) //здесь i вывести нельзя, потому что она объявлена в цикле for

let students = [
    "Глеб",
    "Влад",
    "Маша",
    "Ира",
    "Гена",
    "Стаса",
    "Дюша Метёлкин",
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]); //каждый раз мы вызываем сначала students[0], потом students[1] и так пока не достигнем последнего...
}

//Вывод студентов только с чётным индексом

for (let i = 0; i < students.length; i++) {
    if (i % 2 == 0) {
        //Остаток от деления на 2 равен 0 ? Тогда у элемента чётная позиция
        console.log("Позиция студента чётная", students[i]);
    } else {
        console.log("Позиция студента не чётная", students[i]);
    }
}

//найдём сумму элементов массива

let numbers = [0, 2, 10, 15];

let resultsum = 0; //Объявляем начальное значение суммы, оно априори равно 0
for (let i = 0; i < numbers.length; i++) {
    //цикл прохода
    resultsum = resultsum + numbers[i]; // копим значение суммы
}
console.log(resultsum);

let resultStudents = "";

for (let i = 0; i < students.length; i++) {
    resultStudents += students[i] + " ";
    // resultStudents = resultStudents + students[i] то же самое, что и выше
}

console.log(resultStudents);

function arrayConcat(arr, delimeter = " ; ") { //функция по объединению массива delimeter = " ; " -разделитель по умолчанию ; если никакой другой не передан
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + delimeter;
    }
    return result
}

console.log(arrayConcat(students))  //не передан, а значит, будет по умолчанию
console.log(arrayConcat(numbers, "|")) //Так кака мы указали второй элемент, применится он
