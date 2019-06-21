$(document).ready(function(){


$('#prenom').html('Rachel');
$('h1').text('Date :21 06 2019');

$('h2').click(function(){
	$(this).hide();
	});


/*(selection de id premier), au click, faire la fonction...*/
$('#updatePremier').on('click',function(){
	/*selection de la classe premier, charger la page html 
	//(donner le nom de page, function de CONTROL de réalisation
		dont l'action est "afficher dans la console un texte")*/
	$('.premier').load('update.html', function(){
		console.log('mise à jour toujours ok');
		})
})



$('#updateDeuxieme').on('click', function(){
	$.ajax({
		method:"POST",
		url:"grisi.html",
	})
	.done(function(data){
		$('.deuxieme').html(data);
	})
	.fail(function(jqXHR, textstatus){
		console.log("request failed"+ textstatus);
	})
})


$('#ajout').click(function(){
	$.ajax({
		method:"POST",
		url:"index.json",
		// dataType:"json",
	})
	.done(function(data){
		$('.quatrieme').html(data[1].name+' '+ data[0].age);
	})
	.fail(function(jqXHR, textstatus){
		console.log("request failed"+ textstatus);
	})
})


$('#ajout2').click(function(){
	$.ajax({
		method:"POST",
		url:"index.json",
		// dataType:"json",
	})
	.done(function(data){
		$('.cinquieme').empty();
		Object.values(data).forEach(function(value){
			$('.cinquieme').append(value.name+'<br>');
		})
	})
	.fail(function(jqXHR, textstatus){
		console.log("request failed"+ textstatus);
	})
})


});
