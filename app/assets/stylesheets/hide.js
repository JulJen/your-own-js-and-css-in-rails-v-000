function hideWhenClicked(event) {
	$(event.target)
  $ta.hide();
}

// // vanilla javascript
// document.getElementById("hide_this").innerHTML = "";

$('#hide_this').click(hideWhenClicked);
