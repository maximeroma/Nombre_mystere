var solution = Math.round(3 * Math.random());
console.log(solution);
var choice = true;

//for(var i = 0; i <= 2; i += 1){ /ne pas utiliser "+=" mais "++"
for(var i = 0; i <= 2; i++){
	var response = prompt("Ajouter un nombre compris entre 0 et 3");
	if (i === 2){ // === /difference: "2=='2'(true)" et "2==='2'(false)"
		console.log("Vous avez perdu!");
	} else {
		if (response == solution){
			console.log("Bravo! Vous avez trouve la solution!");
			break;
		} else if(response < solution){
			console.log("La solution est plus grande.")
		} else {
			console.log("La solution est plus petite.")
		}
	};
};

