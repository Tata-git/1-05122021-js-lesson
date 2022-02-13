/** Task 1 */
// <!--Спрячьте сообщения с помощью делегирования-->
// <!--важность: 5-->
// <!--Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.-->

// <!--В результате должно работать вот так:-->


// <!--P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.-->

// const container = document.querySelector('div');
// const container = document.querySelector('.container');
const container = document.querySelector('#container');

// console.log(container);

container.addEventListener('click', removeBox);

function removeBox(event) {
	// console.log(event);

	// console.log(event.target);
	// console.dir(event.target.className); // remove-button
	// console.dir(event.target.nodeName); // BUTTON

	if (event.target.className === 'remove-button') {
		// console.log(event.target.closest(".pane"));
		const paneBox = event.target.closest('.pane');
		paneBox.remove();
	}
}
//--------------------------------------------------------------------------
/** Task 2 */