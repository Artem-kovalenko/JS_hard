// Замыкания
//  по сути - функция внутри другой фунции

function createCalcFunction (n) {
	return function() {
		console.log(1000 * n)
	}
}

const calc = createCalcFunction(42)
// calc - та функция, которая находится внутри главной функции, можем ёё вызвать
// n была замкнута в той функции которую мы возвращаем
// получили жоступ до скоупа верхней функции

//================ Пример 1 ======================

function createIncrementor(n) {
	return function(num) {
		return n + num
	}
}

const addOne = createIncrementor(1) // addOne будет являться функцией, потому что мы её получаем из другой функци
const addTen = createIncrementor(10)
console.log(addOne(10))
// addOne замкнула значение 1 в себе

console.log(addTen(10))
// addTen замкнула значение 10 в себе


//================ Пример 2 ======================

function urlGenerator(domain) {
	return function(url) {
		return `https://${url}.${domain}`
	}
}

// создаем функцию comUrl для выведения домена .com
const comUrl = urlGenerator('.com')
// создаем функцию ruUrl для выведения домена .ua
const uaUrl = urlGenerator('.ua')

console.log(comUrl('google'))
// чтоб создать другую ссылку - просто пишем другое название, всё остальное сгенерировано
console.log(comUrl('netflix'))
console.log(uaUrl('demos'))


//================ Пример 3 (!)======================

// Написать свою функцию bind которая принимает в себя некоторый контекст,
// баиндит контекст к нужной функции и возвращает нужную функцию


// Принимаем два парметра: 1 - контекст, 2 - функция
// 

function bind(context, fn) {
	return function(...args) { // Через оператор spread ( ...args ) - массив со всеми параметрами
		fn.apply(context, args) // вторым параметром передаём массив параметров
	}
}

function logPerson(job, age) {
	console.group('Пример 4');
	console.log(job, age);
	console.log(`Person ${this.name}`);
	console.groupEnd();
}

const person = {
	name: 'Artem'
}

bind(person, logPerson)('Front-End', 18);