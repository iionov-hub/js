// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
// 2. Работа с переменными.
let tc = 45;
tf = (9 / 5) * tc + 32
alert('температура по Фаренгейту: ' + tf);

// 3. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
let admin;
let name = 'Василий';

admin = name;
alert(admin);

// 4. *Чему будет равно JS-выражение 1000 + "108"/
let result = 1000 + "108";
alert(result);
//Вывод:Если сложить два числа и при этом одно из чисел является
// в этом случае оба числа будут приведены к типу строки

// 5. *Самостоятельно разобраться с атрибутами тега script (async и defer)/
// Атрибут async означает, что скрипт абсолютно независим:
// Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
// Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга:
// Остальные скрипты не ждут async, и скрипты casync не ждут другие скрипты.

// Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.
// Скрипты с defer никогда не блокируют страницу.
// Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.
// Содержимое страницы отобразится мгновенно.
// Событие DOMContentLoaded подождёт отложенный скрипт.Оно будет сгенерировано, только когда скрипт  будет загружен и выполнен.
// Отложенные с помощью defer скрипты сохраняют порядок относительно друг друга, как и обычные скрипты