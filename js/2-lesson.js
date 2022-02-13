// Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

const stones = [
	{ name: 'Изумруд', price: 1300, quantity: 4 },
	{ name: 'Бриллиант', price: 2700, quantity: 6 },
	{ name: 'Сапфир', price: 400, quantity: 7 },
	{ name: 'Щебень', price: 150, quantity: 100 },
];
const calcTotalPrice = (stones, stonesName) => {
	const arrStones = stones.filter(value => {
		// console.log(value.name);
		return value.name === stonesName;
	});
	// console.log(arrStones);
	// console.log(arrStones.price); // undefined

	// return arrStones[0].price * arrStones[0].quantity;
	// Деструктуризируем
	const { price, quantity } = arrStones[0];
	return price * quantity;
};
// console.log(calcTotalPrice(stones, 'Сапфир')); // 2800
//------------------------------------------------------------------------
//4. Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

const calculator = {
	read(a = 0, b = 0) {
		this.value1 = a;
		this.value2 = b;
	},
	sum() {
		return this.value1 + this.value2;
	},
	mult() {
		return this.value1 * this.value2;
	},
	devine() {
		if (this.value1 === 0) {
			return 'Invalid message';
		}
		return this.value1 / this.value2;
	},
	pow() {
		return this.value1 ** this.value2;
	},
};
// console.log(calculator.read(2, 5)); // undefined
// console.log(calculator); // {value1: 2, value2: 5, read: ƒ, sum: ƒ, mult: ƒ}

// console.log(calculator.read()); //  undefined
// console.log(calculator.sum()); // 0

// console.log(calculator.read(2, 3)); //  undefined
// console.log(calculator.sum()); // 5
// console.log(calculator.mult()); // 6
// console.log(calculator.devine()); // 0.6666666666666666
// console.log(calculator.pow()); // 8
//------------------------------------------------------------------
//5. Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1, b: 2}, 'b') => {a: 1}
{
	function updateObject(obj, objValue) {
		const newObj = {};
		// console.log(obj.b); // 2
		// console.log(obj[objValue]); // 2
		// delete obj.b;
		// console.log(obj); // {a: 1, b: 2}

		delete obj[objValue];
		console.log(obj); // {a: 1, b: 2}
	}
	// updateObject({ a: 1, b: 2 }, 'b'); // {a: 1}
	// updateObject({ a: 1, b: 2 }, 'a'); // {b: 2}
}
{
	function updateObject(obj, objValue) {
		const newObj = { ...obj }; // утворився новий об"єкт
		// console.log(obj); //

		delete newObj[objValue];
		console.log(obj); // {a: 1, b: 2}
		console.log(newObj); // {b: 2}

		return newObj;
	}
	// // updateObject({ a: 1, b: 2 }, 'b'); // {a: 1}
	// updateObject({ a: 1, b: 2 }, 'a'); // {b: 2}
}
//5.1 Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
{
	function updateObject(obj, ...objValue) {
		// console.log(objValue); // (3) ['a', 'b', 'c']

		const newObj = { ...obj }; // утворився новий об"єкт
		// console.log(obj); //
		for (const value of objValue) {
			delete newObj[value];
		}
		// delete newObj[objValue];
		// console.log(obj); // {a: 1, b: 2}
		console.log(newObj); // {d: 4}

		return newObj;
	}
	// updateObject({ a: 1, b: 2 }, 'b'); // {a: 1}
	// updateObject({ a: 1, b: 2, d: 4 }, 'a', 'b', 'c', 'd'); // {}
	// updateObject({ a: 1, b: 2, d: 4 }, 'a', 'b', 'c'); // {d: 4}
}
{
	const objectNumbers = { a: 1, b: 2, d: 4 };
	function updateObject(obj, ...objValue) {
		// console.log(objValue); // (3) ['a', 'b', 'c']

		// const newObj = { ...obj }; // утворився новий об"єкт
		const newObj = obj; // зміна обєкту напряму 	console.log(objectNumbers); // {d: 4}

		// console.log(obj); //
		for (const value of objValue) {
			delete newObj[value];
		}
		// delete newObj[objValue];
		// console.log(obj); // {a: 1, b: 2}
		console.log('newObj', newObj); // newObj {d: 4}

		return newObj;
	}

	// updateObject(objectNumbers, 'a', 'b', 'c'); //
	// console.log('objectNumbers', objectNumbers); // objectNumbers {d: 4}
}
//-------------------------------------------------------------------------
/** Напишите цикл, который предлагает ввести число больше 100 через prompt.
 * Если посетитель ввёл другое число - попросить ввести ещё раз и т.д.
 * Цикл должен спрашивать число, пока посетитель не введёт число
 * больше 100, либо не нажмет кнопку Отмена в prompt
 */
{
	const booksList = [
		{
			id: 1,
			title: 'The Dream of a Ridiculous Man',
			countDate: 10,
		},
		{
			id: 2,
			title: 'The Last Kingdom',
			countDate: 5,
		},
		{
			id: 3,
			title: 'Beside Still Waters',
			countDate: 100,
		},
	];

	// порівнюємо з к-тю днів = 90
	function checkReadingBooks(books, expiredDate = 90) {
		const resultItems = books.filter(el => el.countDate >= expiredDate);
		console.table(resultItems);
		// console.log('resultItems:', resultItems); //  {id: 3,
		// // title: 'Beside Still Waters', countDate: 100

		console.table(books);
		// console.log('books:', books);

		const upDateBooks = books.filter(el => {
			for (let resultItem of resultItems) {
				// console.log(resultItem.id);
				// console.log(el.id);
				if (resultItem.id === el.id) {
					return false;
				} else return true;
			}
		});
		console.table(upDateBooks); //
	}

	checkReadingBooks(booksList);
	// 	checkReadingBooks(booksList, 8); // 0: {id: 1, title: 'The Dream of a Ridiculous Man', countDate: 10}
	// //                                      1: {id: 3, title: 'Beside Still Waters', countDate: 100}

	// console.table(booksList);
}
