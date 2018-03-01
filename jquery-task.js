$(document).ready(function() {

var catArray = [{name:'Marley', image: "ocicat.jpg"}, 
				{name: 'Link', image: "persian.jpg"},
				{name: 'Honey', image: "british-shorthair.jpg"},
				{name: 'Tommy', image: "siamese-cat.jpg"},
				{name: 'Graham', image: "ragdoll.jpg"}
				]
$('.cat').click(function() {

	var item = catArray[Math.floor(Math.random()*catArray.length)];
	$("#catImages").attr('src', item.image);
	$("p").text(item.name);
});


});

 