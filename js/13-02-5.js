/** Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд
 *  до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть
 конкретного значения сегодняшней даты.
*/
function getSecondsToTomorrow() {
	const currentDate = new Date();
	console.log(currentDate);

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();
	const day = currentDate.getDate();

	const tomorrow = new Date(year, month, day + 1);
	console.log(tomorrow);

	const ms = tomorrow - currentDate;
	const seconds = Math.round(ms / 1000);
	// console.log(ms / 1000);
	console.log(seconds);
	return seconds;
}

getSecondsToTomorrow();
