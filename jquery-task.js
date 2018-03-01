$(document).ready(function() {
	// var change = 0;
 //     $('.cat').click(function() {
 //          if(change == 0) {
 //          	$("#catImages").attr("src","ocicat.jpg");
 //          	$("p").text("Name: Marley");
 //          	change=1;
 //          }
 //          else if (change == 1) {
 //          	$("#catImages").attr("src","persian.jpg");
 //          	$("p").text("Name: Link");
 //          	change = 2;
 //          }       
 //          else if (change == 2) {
 //          	$("#catImages").attr("src","british-shorthair.jpg");
 //          	$("p").text("Name: Honey");
 //          	change=3;
 //          }
 //          else if (change == 3) {
 //          	$("#catImages").attr("src","siamese-cat.jpg");
 //          	$("p").text("Name: Tommy");
 //          	change=4;
 //          }
 //          else if (change == 4) {
 //          	$("#catImages").attr("src","ragdoll.jpg");
 //          	$("p").text("Name: Graham");
 //          	change=0;
 //          }
 //     });
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

 