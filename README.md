# Содержание
:arrow_down: [Модуль E1. Знакомство с Web](README.md#-🟩Модуль-E1.-Знакомство-с-Web)
<br>
:arrow_down: [Модуль E2. Введение в JavaScript](README.md#-🟩Модуль-E2.-Введение-в-JavaScript)
<br>
:arrow_down: [Модуль Е3. Функции](README.md#-🟩Модуль-Е3.-Функции)
<br>
:arrow_down: [Модуль E4. Объекты](README.md#Модуль-E4.-Объекты)
<br>
:arrow_down: [Модуль E5. Документ](README.md#🟩Модуль-E5.-Документ)
<br>
:arrow_down: [Модуль E6. AJAX](README.md#-🟩Модуль-E6.-AJAX)
<br>
:arrow_down: [Модуль E7. API браузера](README.md#-🟩Модуль-E7.-API-браузера)
<br>
:arrow_down: [Модуль E8. HTML. Основы HTML. Структурные, текстовые, строчные элементы](README.md#-🟩Модуль-E8.-HTML.-Основы-HTML.-Структурные,-текстовые,-строчные-элементы)
<br>
:arrow_down: [Модуль E9. Основы CSS. Layouts](README.md#-🟩Модуль-E9.-Основы-CSS.-Layouts)
<br>
:arrow_down: [Модуль E10. Advanced CSS](README.md#-🟩Модуль-E10.-Advanced-CSS)
<br>

# 🟩Модуль E1. Знакомство с Web

В ходе прохождения модуля было изучено:

<p>1. Сетевые технологии</p>
<ul>
<li>Инфраструктура сети состоит из трёх категорий компонентов</li>
<li>Клиент и сервер</li>
<li>Модель OSI</li>
</ul>

<p>2. Работа веб-браузера</p>

<p>3. Инструменты для создания сайта</p>

<p>4. Анатомия веб-страницы</p>
<ul>
<li>Структура страницы</li>
</ul>

<p>5. Теги</p>
<ul>
<li>Популярные теги</li>
<li>Атрибут href и title</li>
<li>Атрибут src</li>
</ul>

<p>6. Стили</p>
<ul>
<li>Встроенный CSS</li>
<li>Internal или внутренний CSS</li>
<li>Внешние CSS</li>
<li>Создаём и подключаем внешний CSS-файл</li>
</ul>

## Техническое задание

Критерии оценивания:

<li>На страничке есть название хобби и меню в шапке — 2 балла.
<li>Элементы меню подсвечиваются при наведении на них курсора — 2 балла.
<li>На сайте есть фотография, обтекаемая текстом — 2 балла.
<li>Стили вынесены в отдельный файл — 2 балла.
  
⭐Моя оценка 8/8 баллов

Сам сайт должен выглядеть примерно следующим образом:

![FPW_E1 8_1](https://user-images.githubusercontent.com/109171276/224118652-fb691198-38aa-4177-9644-b8b9db95411a.png)

При наведении на слова «Главная», «Обо мне», «Обратная связь» и т. д. надписи должны подсвечиваться.

На страничке «Обо мне» расскажите о себе буквально в 2-3 предложениях, приложив фотографию. На страничке с обратной связью оставьте ваши контакты (мессенджеры, социальные сети).

# 🟩Модуль E2. Введение в JavaScript

В ходе прохождения модуля было изучено:

<p>1. Программирование на JavaScript: основы</p>
<ul>
<li>Так какой же язык JavaScript?</li>
<li>Что такое скрипты?</li>
<li>Где и как запускать JavaScript</li>
<li>Подключение скриптов</li>
<li>Выражения</li>
<li>Типы данных</li>
<li>Примеры валидных значений:</li>
<li>Основные конструкции языка (операторы)</li>
<li>Типы операторов</li>
<li>Соглашение об именованиях</li>
<li>Как выбрать имя для переменной (identifier)</li>
<li>Как объявить переменную</li>
<li>Оператор Typeof</li>
</ul>

<p>2. Логический тип и ветвление</p>

<p>3. Строки. Числа</p>
<ul>
<li>Работа со строками</li>
<li>Числа</li>
</ul>

<p>4. Массивы и базовые методы работы с ними. Практикуемся с командой debugger</p>
<ul>
<li>Методы работы с массивами</li>
</ul>

<p>5. Циклы</p>

<p>6. Ассоциативные массивы</p>

  Решение заданий: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/tree/main/Module%20E2.%20Introduction%20to%20JavaScript

## Задание 1

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

## Задание 2

Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

## Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

## Задание 4

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

## Задание 5

Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

## Задание 6

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

## Задание 7

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

## Задание 8

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.

# 🟩Модуль Е3. Функции

В ходе прохождения модуля было изучено:

<p>1. Функции без параметров</p>
<ul>
<li>Что такое функция</li>
</ul>

<p>2. Function declaration vs Function expression</p>
<ul>
<li>Два способа объявления функции</li>
<li>Объявление через var, let и const</li>
</ul>

<p>3. Параметры и возвращаемое значение</p>
<ul>
<li>Параметры и аргументы</li>
<li>Функция и процедура</li>
<li>Функция return</li>
</ul>

<p>4. Функции высшего порядка</p>
<ul>
<li>Функциональное программирование</li>
</ul>

<p>5. Замыкания</p>
<ul>
<li>Область видимости</li>
<li>Замыкания</li>
</ul>

<p>6. Функции обратного вызова</p>
<ul>
<li>Анонимные функции</li>
<li>Callbacks</li>
<li>Методы setTimeout, setInterval</li>
</ul>

<p>7. Функции в ES6</p>
<ul>
<li>Стрелочные функции</li>
</ul>
  
Решение заданий: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/tree/main/Module%20E3.%20Functions

## Задание 1
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

## Задание 2
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

## Задание 3
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

## Задание 4
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

## Задание 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.

# Модуль E4. Объекты

В ходе прохождения модуля было изучено:

<p>1. Объекты</p>
<ul>
<li>Доступ к свойствам объекта</li>
<li>Добавление, изменение и удаление свойства</li>
<li>Сравнение объектов</li>
<li>Сравнение объектов</li>
</ul>

<p>2. Прототип и конструктор объекта</p>
<ul>
<li>Функции как объекты</li>
<li>Встроенные объекты и объекты-обертки</li>
</ul>

<p>3. ООП в JS</p>

<p>4. ООП в ES6</p>

Решение заданий: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/tree/main/Module%20E4.%20Objects

## Задание 1

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

## Задание 2

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

## Задание 3

Написать функцию, которая создает пустой объект, но без прототипа.

## Задание 4

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

<b>План:

1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4. Создать экземпляры каждого прибора.
5. Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

<b>Общие требования:

1. Имена функций, свойств и методов должны быть информативными.
2. Соблюдать best practices:
<li> использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
<li> информативные имена (а не a, b);
<li> четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
<li> использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

## Задание 5

Переписать консольное приложение из предыдущего юнита на классы.

# 🟩Модуль E5. Документ

В ходе прохождения модуля было изучено:

<p>1. Возможности JavaScript в браузере</p>
<ul>
<li>Работа с DevTools</li>
<li>Рендеринг. Объект Window</li>
<li>Работа с document</li>
</ul>

<p>2. Работа с DOM</p>
<ul>
<li>Навигация и классификация узлов</li>
<li>Поиск элемента в DOM</li>
<li>Изменение элементов</li>
<li>Добавление и удаление элементов</li>
</ul>

<p>3. Работа с событиями</p>
<ul>
<li>Введение в события</li>
<li>Назначение события</li>
</ul>

<p>4. Объект события</p>
<ul>
<li>Объект события</li>
<li>Фазы</li>
<li>Удаление обработчика</li>
</ul>

<p>5. Работа с HTML-формами</p>
<ul>
<li>Из чего состоят формы</li>
<li>Отправка формы на сервер</li>
<li>Method</li>
<li>Валидация</li>
<li>Пример формы</li>
</ul>

# 🟩Модуль E6. AJAX

В ходе прохождения модуля было изучено:

<p>1. Веб-запросы в браузере</p>
<ul>
<li>API и другие адресаты запросов</li>
</ul>

<p>2. XHR</p>
<ul>
<li>Инструменты реализации запросов в JS</li>
<li>XHR как метод реализации запросов</li>
<li>Запрос и обработка JSON-данных с удалённого сервера с помощью XHR</li>
<li>Введение в асинхронность. Как работает асинхронный код</li>
<li>Некоторые способы реализации асинхронного кода на callback: setTimeout, setInterval, XHR</li>
</ul>

<p>3. Форматы передачи данных в сети</p>
<ul>
<li>XML. Что это такое, и как он устроен</li>
<li>JSON</li>
<li>Запрос и обработка JSON-данных с удалённого сервера с помощью XHR</li>
<li>Введение в асинхронность. Как работает асинхронный код</li>
<li>Некоторые способы реализации асинхронного кода на callback: setTimeout, setInterval, XHR</li>
</ul>

<p>4. Механизмы хранения данных на клиенте</p>
<ul>
<li>Хранение данных и выделение памяти</li>
<li>Хранение данных на стороне клиента (в браузере)</li>
<li>Работа с localStorage и sessionStorage</li>
<li>Получение данных из API и запись в localStorage</li>
<li>Работа с cookie</li>
</ul>

<p>5. Асинхронный код — Promises, Async/Await, JSONP</p>
<ul>
<li>Основные способы реализации асинхронного кода в JS</li>
<li>Promise (обещание)</li>
<li>Цепочки promise и методы</li>
<li>Конструкция async/await</li>
<li>Комбинирование с promise</li>
<li>JSONP («JSON with Padding»)</li>
</ul>

<p>6. Работа с HTTP (Fetch, Async/Await)</p>
<ul>
<li>Протоколы передачи данных. HTTP</li>
<li>Fetch как замена XHR на promise</li>
<li>Комбинирование fetch и async/await</li>
<li>Различные методы запросов и настройка запроса</li>
</ul>

<p>7. WebSockets</p>
<ul>
<li>Виды клиент-серверного взаимодействия</li>
<li>WebSocket</li>
</ul>

<hr>

Ваше задание: нужно реализовать базовый мессенжер со следующими функциями:

<li>отправка и получение сообщений;
<li>создание, редактирование и удаление групповых чатов и переписка в них (подсказка — управлять чатами лучше по REST API, а переписываться так же, как в обычных чатах, но с использованием на сервере идеологии «комнат»);
<li>редактирование личной информации пользователя (имя и аватар);
<li>просмотр списка других пользователей с переходом на отправку им сообщений.
<br><br>
Ссылка на репозиторий в котором находятся: подробный разбор ТЗ, инструкция по установке, скриншоты проекта:

https://github.com/VasiliyZaharov/ChatBoard

# 🟩Модуль E7. API браузера

В ходе прохождения модуля было изучено:

<p>1. Drag & Drop</p>
<ul>
<li>Что такое Drag and Drop</li>
<li>Области применения</li>
<li>Реализация</li>
</ul>

<p>2. SVG</p>
<ul>
<li>Основы синтаксиса</li>
</ul>

<p>3. Canvas</p>
<ul>
<li>Методы для рисования</li>
</ul>

<p>4. Geolocation. Notification. Screen size</p>

<p>5. WebWorkers</p>

<p>6. EventSource</p>
<ul>
<li>EventSource. Реализация и применение</li>
</ul>

# 🟩Модуль E8. HTML. Основы HTML. Структурные, текстовые, строчные элементы

В ходе прохождения модуля было изучено:

<p>1. Краткий обзор HTML. Спецификация</p>

<p>2. Поток и дерево документа</p>

<p>3. iframe</p>

<p>4. Семантическая верстка</p>

<p>5. Accessibility</p>

<p>6. Работа с Figma и создание сайта</p>

# 🟩Модуль E9. Основы CSS. Layouts

<p>1. Подключение стилей к HTML</p>
<ul>
<li>Глобальные стили</li>
<li>Внутренние стили</li>
<li>Внешние стили</li>
</ul>

<p>2. Синтаксис CSS. Простые и комбинированные селекторы</p>
<ul>
<li>Синтаксис CSS</li>
<li>Виды селекторов</li>
</ul>

<p>3. Селекторы псевдоклассов и псевдоэлементов</p>
<ul>
<li>Псевдоклассы</li>
<li>Псевдоэлементы</li>
</ul>

<p>4. Приоритет селекторов</p>

<p>5. Цвета в CSS</p>
<ul>
<li>Цвета в шестнадцатеричном представлении</li>
<li>Функциональная запись цветов</li>
<li>Запись цветов в системах HSL и HSLA</li>
<li>Свойства CSS, связанные с цветами</li>
</ul>

<p>6. Размеры в CSS</p>
<ul>
<li>Единицы измерения</li>
<li>Базовые свойства, связанные с размерами</li>
</ul>

<p>7. Блочная модель документа</p>

<p>8. Слои, позиционирование и z-index</p>

# Технические задания

## 1. Подключение стилей

### Задание 1
Установите для страницы красный цвет фона (background-color: red;), используя глобальные стили.
<p>Решение: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/1.%20Connecting%20Styles/task_1.html</p>

### Задание 2
Установите белый цвет заголовка (color: white;), используя внутренние стили.
<p>Решение: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/1.%20Connecting%20Styles/task_2.html</p>

### Задание 3
Теперь вынесите стили (background-color: red; и color: white;) в отдельный CSS-файл, удалив глобальное и внутреннее подключения.

Соберите все селекторы, свойства и значения в отдельный файл style.сss и подключите его к вашей HTML-странице.
<p>Решение: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/1.%20Connecting%20Styles/task_3.html</p>

## 2. Поток документа

### Задание 1
Оберните строки в теги так, чтобы они располагались одна над другой.
<p>Решение: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/2.%20Document%20Flow/task_1.html</p>

### Задание 2
Теперь замените тег, расположив все элементы в одной строке.
<p>Решение: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/2.%20Document%20Flow/task_2.html</p>

## 3. Цвета

### Задание 1
Установите для заголовка красный цвет в шестнадцатеричной системе
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/3.%20Colors/task_1.html</p>

### Задание 2
Установите для страницы фоновое изображение, для заголовка сделайте белый цвет фона с прозрачностью 80%. Используйте систему RGBA.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/3.%20Colors/task_2.html</p>

### Задание 3
Установите для нечётных строк фоновый цвет — 70% серый, для чётных — 30% серый. Цвет шрифта сделайте белым. Используйте систему HSLA и селекторы :nth-child.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/3.%20Colors/task_3.html</p>

## 4. Размер

### Задание 1
Установите для html-элемента размер шрифта 16px, а для заголовка h1 — 40px. Для величины шрифта заголовка используйте относительные величины.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_1.html</p>

### Задание 2
Напишите стили для .title-block, h1 и h2 так, чтобы размер шрифта h1 остался 40px, а размер шрифта подзаголовка был в два раза меньше. Для размеров heading-элементов используйте величины em.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_2.html</p>

### Задание 3
Установите стиль для ul так, чтобы каждая следующая строка была в два раза больше предыдущей.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_3.html</p>

### Задание 4
Установите синему блоку ширину, равную ширине страницы, а красный растяните на всю высоту.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_4.html</p>

### Задание 5
В прошлом задании вы увидели, что синий блок вышел далеко за границы родительского красного блока. Замените свойство width на min- и max-width так, чтобы красный блок растянулся вслед за синим, но не сжимался меньше 40px.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_5.html</p>

### Задание 6
Задайте синему блоку высоту, равную половине высоты родительского элемента.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/4.%20Dimensions/task_6.html</p>

## 5. Границы. Внутренние и внешние отступы

### Задание 1
Задайте заголовку h2 горизонтальные margin так, чтоб он всегда был по центру страницы. Обратите внимание, что для центрирования элемента таким способом он должен быть блочным и иметь заданную ширину.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/5.%20Boundaries.%20Internal%20and%20external%20indents/task_1.html</p>

### Задание 2
Задайте заголовку h2 отступ по вертикали таким образом, чтоб расстояние между h1 и h2 было 50px. Учтите, что h1 уже имеет вертикальный отступ в 25px.


Несмотря на то, что первый заголовок уже имеет отступ в 25px, мы должны задать второму заголовку отступ в 50px, если нам требуется такое расстояние между элементами. Это явление называется схлопыванием внешних отступов.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/5.%20Boundaries.%20Internal%20and%20external%20indents/task_2.html</p>

### Задание 3
Задайте подзаголовку padding: 25px по горизонтали, 10px сверху и 20px снизу.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/5.%20Boundaries.%20Internal%20and%20external%20indents/task_3.html</p>

## 6. Слои, позиционирование, z-index

### Задание 1
Сместите все блоки с нечётными цифрами на 50px вправо.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_1.html</p>

### Задание 2
Зафиксируйте последний элемент .item в самом низу viewport так, чтобы при прокрутке он не менял своего положения.

Вы можете заметить, что как только блочный элемент получает position: fixed, он сразу же перестает занимать все отведённое ему место. Это происходит потому, что элемент покидает нормальный поток документа и в этом случае ширина (если она явно не указана), определяется его контентом. То же касается и position: absolute.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_2.html</p>

### Задание 3
Укажите первому элементу .item стили так, чтоб при прокрутке он «прилипал» к верхней части viewport.

Эту задачу нельзя решить, просто указав элементу position: sticky, поскольку такое позиционирование начинает работать, только если у элемента указано хотя бы одно из свойств: top, bottom, left или right.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_3.html</p>

### Задание 4
Расположите заголовок поверх розового фона. Эту задачу можно решить двумя способами, изменив стили либо фона, либо заголовка. Попробуйте оба варианта.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_4.html</p>

### Задание 5
Поместите красный круг внутрь синего квадрата, изменив стили только у синего квадрата.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_5.html</p>

### Задание 6
Выведите заголовок «Position» поверх геометрических фигур.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/6.%20Layers%2C%20positioning%2C%20z-index/task_6.html</p>

## 7. Flexbox

### Задание 1
Измените стиль родительского блока так, чтоб цифры выстроились в колонку в обратном порядке.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_1.html</p>

### Задание 2
Измените стиль родительского блока, разрешив перенос блоков и разместив их в несколько строк.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_2.html</p>

### Задание 3
Измените стиль родительского блока так, чтобы все блоки поместились в контейнер и выстроились в обратном порядке от 10 до 1. Используйте свойство flex-flow.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_3.html</p>

### Задание 4
Распределите дочерние элементы так, чтоб они заполняли всё пространство по вертикали и имели равные межблочные расстояния.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_4.html</p>

### Задание 5
Теперь сгруппируйте дочерние элементы в центре родительского блока по вертикали и по горизонтали. Ширина каждого блока не должна превышать 30%.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_5.html</p>

### Задание 6
Сгруппируйте все дочерние элементы в центре родительского блока по горизонтали и по вертикали.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_6.html</p>

### Задание 7
Установите порядок дочерних элементов так, чтоб сначала шли нечётные, а потом чётные числа. Используйте свойство order и псевдокласс :nth-child.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_7.html</p>

### Задание 8
Теперь растяните последний элемент на всю доступную ширину.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_8.html</p>

### Задание 9
Установите синему блоку стили так, чтоб его ширина не могла быть меньше заданной.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_9.html</p>

### Задание 10
Задайте синему блоку высоту в 20px и расположите его относительно родительского контейнера в центре по вертикали.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/7.%20Flexbox/task_10.html</p>

## 8. Свойство display

### Задание 1
Измените стиль элемента .item так, чтоб цифры выстроились в колонку.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/8.%20Display%20property/task_1.html</p>

### Задание 2
Теперь снова выстройте цифры в ряд, но при этом каждый элемент .item должен иметь ширину 50px. Изменяйте стили только у класса .item.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/8.%20Display%20property/task_2.html</p>

### Задание 3
Скройте все блоки с чётными цифрами.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/8.%20Display%20property/task_3.html</p>

## 9. Медиазапросы

### Задание 1
Дополните стили так, чтобы на ширине экрана >= 600px навигация выстраивалась в строку. Ширина блока навигации при этом должна быть 100%, а расстояние между соседними пунктами меню — 50px.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/9.%20Media%20Queries/task_1.html</p>

### Задание 2
Теперь дополните условие так, чтоб на ширине экрана >= 1000px навигация возвращалась к прежнему виду. Нужно именно дополнить существующее условие.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/9.%20Media%20Queries/task_2.html</p>

### Задание 3
Задайте условие для блока .wrapper так, чтобы при ширине экрана >= 600px блоки с числами выстроились в ряд.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/9.%20Media%20Queries/task_3.html</p>

### Задание 4
Теперь скройте все блоки с чётными числами при разрешении >= 600px и все с нечётными — при разрешении < 600px.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/9.%20Media%20Queries/task_4.html</p>

### Задание 5
Задайте условие для синего квадрата, чтобы при ширине экрана < 600px его высота менялась на 400px. Сделайте изменение плавным, пользуясь свойством transition. Время анимации поставьте .2s.
<p>https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/blob/main/Module%20E9.%20CSS%20basics.%20Layouts/9.%20Media%20Queries/task_5.html</p>

# 🟩Модуль E10. Advanced CSS

<p>1. Типы шрифтов</p>
<ul>
<li>Типы шрифтов</li>
<li>Как указывать тип шрифта в CSS?</li>
<li>Подключаем шрифты</li>
<li>Как скачать шрифт на сайте свободных шрифтов Google Fonts?</li>
<li>Использование шрифта</li>
</ul>

<p>2. Свойство display</p>

<p>3. Flexbox</p>
<ul>
<li>Как устроен флексбокс?</li>
<li>Расположение по осям</li>
<li>Выравнивание по главной оси</li>
<li>Выравнивание по дополнительной оси</li>
<li>Порядок элементов</li>
</ul>

<p>4. CSS Grid</p>
<ul>
<li>Как устроена grid-раскладка</li>
<li>Адаптивные гриды</li>
</ul>

<p>5. Адаптивный дизайн и стратегии разработки</p>
<ul>
<li>mobile-first и desktop-first</li>
<li>Progressive enhancement и graceful degradation</li>
</ul>

<p>6. @-правила и медиа-запросы</p>
<ul>
<li>Медиа-типы</li>
<li>Медиа-функции</li>
<li>Медиа-запросы в CSS</li>
<li>Чек-лист верстальщика</li>
</ul>

<p>7. CSS-функции</p>
  
 # Техническое задание
  
Тема вашего проекта — ваше резюме. Ваша задача в том, чтобы красиво, лаконично и информативно рассказать о себе потенциальному нанимателю и сверстать этот рассказ так, чтобы он открывался и был читаем на поддерживаемых устройствах (то есть убить двух зайцев одним камнем — и о себе рассказать, и сразу показать часть своих web-навыков). Обязательно используйте фотографии, если есть встраиваемые видео — то вообще замечательно. В принципе не бойтесь экспериментировать: в этом проекте мы оцениваем не «презентабельность» резюме, а вынесенные вами из модуля знания о CSS.

Вам нужно обеспечить корректную работу двух версий страницы — десктопной и мобильной. Для расположения элементов на странице обязательно используйте CSS-Grid или flexbox, на ваш выбор.
1. Придерживайтесь полученных рекомендаций и best practices.
2. Держите ваш код чистым — отделяйте CSS-классы друг от друга, называйте их так, чтобы было понятно, в чем их функция, не плодите лишних сущностей
3. Поработайте со стилями и расположением элементов. Обратите внимание на то, чтобы не возникали дополнительные прокрутки, например, горизонтальный на мобильной версии.

Ссылка на выполненное задание: https://github.com/VasiliyZaharov/JavaScript-and-frontend-development/tree/main/Module%20E10.%20Advanced%20CSS
