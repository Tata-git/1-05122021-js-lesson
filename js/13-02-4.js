/** <!--Выделяемый список-->
<!--Создайте список, в котором элементы могут быть выделены, как
 в файловых менеджерах.-->

<!--При клике на элемент списка выделяется только этот элемент
 (добавляется класс .selected), отменяется выделение остальных элементов.-->

<!--P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.-->

 */
const list = document.querySelector('#ul');
// console.log(list);

list.addEventListener('click', hightLightItem);

function hightLightItem(e) {
	// console.log(e.target.nodeName);

	if (e.target.nodeName === 'LI') {
		removeSelectedClasses(list);
		e.target.classList.add('selected');
	}
}

function removeSelectedClasses(list) {
	const selectedItems = list.querySelectorAll('.selected');
	console.log(selectedItems);
	for (let li of selectedItems) {
		li.classList.remove('selected');
	}
}
