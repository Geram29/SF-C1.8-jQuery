// Написать метод jQuery.prototype.html(), который возвращает или изменяет html-содержимое выбранных элементов.
jQuery.prototype.html = function(html_value){
	if (html_value !== undefined) {
		this.each(element => element.innerHTML = html_value)
	}
	return this;
}

// Написать метод jQuery.prototype.text(), который возвращает или изменяет текстовое содержимое выбранных элементов.
jQuery.prototype.text = function(text_value){
	if (text_value) {
		this.each(element => element.textContent = text_value)
	}
	return this;
}
