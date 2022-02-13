// <!--Задание 2-->

// <!--Раскрывающееся дерево-->
// <!--важность: 5-->
// <!--Создайте дерево, которое по клику на заголовок скрывает-показывает
// потомков: -->

// <!--Требования:-->

// <!--Использовать только один обработчик событий (применить делегирование)-->
// <!--Клик вне текста заголовка (на пустом месте) ничего делать не должен.-->

// <!-- Решение состоит из двух шагов:

// Оборачиваем текст каждого заголовка дерева в элемент <span>. Затем мы можем добавить стили CSS на :hover и обрабатывать клики только на тексте, т.к. ширина элемента <span> в точности совпадает с шириной текста.
// Устанавливаем обработчик на корневой узел дерева tree и ловим клики на элементах <span>, содержащих заголовки. -->

const animalContainer = document.getElementById('tree');
// console.log(animalContainer);

const allLi = animalContainer.querySelectorAll('li');
// console.log(allLi)

for (let li of allLi) {
	// console.log(li);

	const spanBox = document.createElement('span');
	li.prepend(spanBox);
	spanBox.append(spanBox.nextSibling);

	// console.log(li);
}

animalContainer.addEventListener('click', onClick);

function onClick(e) {
	// console.log(e.target.parentNode);

	const parentTarget = e.target.parentNode;
	// console.log(parentTarget);

	const childrenBox = parentTarget.querySelector('ul');
	console.log(childrenBox);
	/** 1-й вариант */
	childrenBox.hidden = !childrenBox.hidden;

	/** 2-й вариант */
	// if (!childrenBox) {
	// 	return;
	// }
	// if (childrenBox.hidden) {
	// 	// childrenBox.hidden = !childrenBox.hidden;
	// 	childrenBox.hidden = false;
	// } else {
	// 	childrenBox.hidden = true;
	// }
}
