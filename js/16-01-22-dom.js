const user = {
	tag: 'Mango',
	showTag() {
		console.log('show -> this', this);
	},
};
// const outerShowTag = user.showTag;
// outerShowTag()
// console.log(outerShowTag) // ƒ showTag() {
// 	// console.log('show -> this', this);
// 	// }
//------------
// const outerShowTag = user.showTag.bind(user);
// outerShowTag();
// console.log(outerShowTag);
//---------------------------------------------------------------------------------------
//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

// function letMeSeeYourName(callback) {
// 	// const userName = prompt('Enter your name');
// 	console.log(Boolean(userName));
// 	// if (!userName) { -  пустий рядок
// 	if (!userName) {
// 		return;
// 	}
// 	return callback(userName);
// }

// function greet(name) {
// 	console.log(`Привет ${name}`); // Привет sad
// }

// // letMeSeeYourName(greet);
// // console.log(letMeSeeYourName(greet)); // ƒ greet(name) { при 	return callback;
// // // 	console.log(`Привет ${name}`);
// // // }
// //-------
// letMeSeeYourName(greet);
// // console.log(letMeSeeYourName(greet));
//---------------------------------------------------------------------------------------
//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

function makeProduct(name, price, callback) {
	const product = {
		name,
		price,
		// id: Math.random(),
		id: Date.now(),
	};
	// console.log(product);
	callback(product);
}

const showProduct = product => console.log(product);

// makeProduct('sad', 120, showProduct);

// function showProduct(product) {
// 	console.log(product);
// }

//------------------------------------------------------------------------------------
//3. Выполни рефакторинг makeDish так, чтобы не нужно было
//каждый раз передавать имя шефа.
//Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове

const makeDish = function (shefName, dish) {
	console.log(`${shefName} is cooking ${dish}`);
};

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

function makeShef(shefName) {
	return function makeDish(dish) {
		console.log(`${shefName} is cooking ${dish}`);
	};
}

const mango = makeShef('Mango');
// console.log(mango); // ƒ makeDish(dish) { console.log(`${shefName} is cooking ${dish}`);}
// mango('apple pie'); // Mango is cooking apple pie

const geordge = makeShef('George');
// geordge('cake'); // George is cooking cake

//------------------------------------------------------------------------------------
//4. Исправьте ошибки, чтобы код работал
const product = {
	price: 5000,
	showPrice() {
		console.log(this.price);
	},
};
// product.showPrice(); // 5000

// const secondPrice = product.showPrice; // 5000
// secondPrice(); // TypeError: Cannot read properties of undefined (reading 'price')
//     // at showPrice 	console.log(this.price);
//     // at secondPrice();
//----------------
const secondPrice = product.showPrice.bind(product); //
// secondPrice(); // 5000
//------------------------------------------------------------------------------------
//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

function each(array, callback) {
	const resultArray = [];

	for (let i = 0; i < array.length; i += 1) {
		// console.log(i)
		resultArray.push(callback(array[i]));
	}
	// console.log(resultArray); // (4) [10, 4, 6, 20]
	return resultArray;
}

const numbers = [5, 2, 3, 10];

// console.log(each(numbers, value => value * 2)); // (4) [10, 4, 6, 20]
//------------------------------------------------------------------------------------
//7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
function makeCounter() {
	let counter = 0;

	// return () => (counter = counter += 1);
	return () => (counter += 1);
}

const calls = makeCounter();
// console.log(calls); // () => (counter += 1)
// console.log(calls()); // 1
// console.log(calls()); // 2
// console.log(calls()); // 3
//-----------------
const calls2 = makeCounter();
// console.log(calls2()); // 1
// console.log(calls2()); // 2
// console.log(calls2()); // 3
//
//------------------------------------------------------------------------------------
//8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

function savePassword(password) {
	// return userPassword => userPassword === password;
	// аналог
	return function (userPassword) {
		return userPassword === password;
	};
}

const ourPassword = savePassword('qwerty');

// console.log('ourPassword', ourPassword('qwerty')); // ourPassword true
// console.log('ourPassword', ourPassword('sdfg')); // ourPassword false
//------------------------------------------------------------------------------------
//9. Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.

function saveDiscount(discount) {
	return function makeDiscount(price) {
		console.log(`Discount = ${discount}% `); // Discount = 30%
		return price - price * (discount / 100);
	};
}

const ourDiscount = saveDiscount(30);
// console.log(' ourDiscount', ourDiscount(1000)); //  ourDiscount 700
//------------------------------------------------------------------------------------
//1. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

function User(objectUser) {
	const { userName, age, numbersOfPost } = objectUser;
	this.userName = userName;
	this.age = age;
	this.numbersOfPost = numbersOfPost;
	// аналог User.prototype.getInfo = function ()
	// this.getInfo = function () {
	// 	// console.log("getInfo", getInfo)
	// 	console.log(
	// 		`Пользователю ${this.userName} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`,
	// 	);
	// };
}

const tim = new User({ userName: 'Tim', age: 20, numbersOfPost: 100 });
console.log(tim); // User {userName: 'Tim', age: 20, numbersOfPost: 100}

const kim = new User({ userName: 'Kim', age: 19, numbersOfPost: 150 });
console.log('kim', kim); // kim User {userName: 'Kim', age: 19, numbersOfPost: 150}
//-----
// аналог  this.getInfo = function () {
User.prototype.getInfo = function () {
	console.log(
		`Пользователю ${this.userName} ${this.age} лет и у него ${this.numbersOfPost} публикаций.`,
	);
};

kim.getInfo(); // Пользователю Kim 19 лет и у него 150 публикаций.

const lina = {
	name: 'Lina',
};

const allUser = {
	showUsers: function () {
		console.log('allUser');
	},
};

Object.setPrototypeOf(lina, allUser);

console.log(lina);
console.log(allUser);
//
