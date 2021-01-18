/* Задача 1:
   Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы
   должны получить на выходе объект, в котором в соответствующих свойствах описаны
   единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
   {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
   соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

console.log("Задача 1: Написать функцию, преобразующую число в объект.");
var theNum = +prompt('Введите число не более 999: ');
var theObj = {};

function expNum(theNum) {

    if (theNum > 999) {
        console.log("Число больше 999");
        return theObj;
    }

    var x = theNum / 100;
    console.log("x: " + x)
    //возвращаем целую часть
    var hundreds = Math.trunc(x);

    var y = (x - hundreds) * 10;
    console.log("y: " + y)
    //возвращаем целую часть
    var tens = Math.trunc(y);

    var z = (y - tens) * 10;
    console.log("z: " + z)
    //здесь пробуем округлить
    var units = Math.round(z);

    //записываем в наш объект
    theObj.hundreds = hundreds;
    theObj.tens = tens;
    theObj.units = units;

    return theObj;
}

console.log("Число: " + theNum);
console.log(expNum(theNum));