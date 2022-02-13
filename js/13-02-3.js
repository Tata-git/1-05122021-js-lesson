/**
 * <!--Поймайте переход по ссылке-->
<!--Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" 
пользователю выводился вопрос о том, действительно ли он хочет
 покинуть страницу, и если он не хочет, то прерывать переход по ссылке.-->

<!--Так это должно работать:-->


<!--Детали:-->

<!--Содержимое #contents может быть загружено динамически и присвоено
 при помощи innerHTML. Так что найти все ссылки и поставить на них 
 обработчики нельзя. Используйте делегирование.-->
<!--Содержимое может иметь вложенные теги, в том числе внутри ссылок,
 например, <a href=".."><i>...</i></a>.-->


<!--Это – классическая задача на тему делегирования.-->

<!--В реальной жизни мы можем перехватить событие и создать AJAX-запрос
 к серверу, который сохранит информацию о том, по какой ссылке ушёл посетитель.
  Или мы можем загрузить содержимое и отобразить его прямо на странице
   (если допустимо).-->

<!--Всё, что нам необходимо, это поймать событие contents.onclick и 
использовать функцию confirm, чтобы задать вопрос пользователю. Хорошей
 идеей было бы использовать link.getAttribute('href') вместо link.href
  для ссылок. Смотрите решение в песочнице.-->
 */

const container = document.getElementById('contents');
console.log(container);

container.addEventListener('click', onLinkClick);

function onLinkClick(e) {
	e.preventDefault();

	const targetClick = e.target;
	const link = targetClick.closest('a');
	console.log(link);

	const url = link.getAttribute('href');
	console.log(url);

	if (link) {
		const answer = confirm(
			`Do you really want to leave main page an go to ${url}?`,
		);
		if (answer) {
			window.open(url, blank);
		}
	}
}
