$(document).ready(function() {
  $('button').on('click', function() {
var message = $('<img src = "siamese-cat.jpg"></img>');
	$(this).after(message);
  })
})
