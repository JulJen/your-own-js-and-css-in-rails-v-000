function hideWhenClicked(el) {
	$(el.target).hide();
}

// // vanilla javascript
// document.getElementById("hide_this").innerHTML = "";

$('#hide_this').click(hideWhenClicked);
