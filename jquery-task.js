$(document).ready(function() {
  $('.cat').on('click', function() {
var message = $('<img src = "british-shorthair.jpg"></img>');
	$('.cat').after(message);
  });
});

