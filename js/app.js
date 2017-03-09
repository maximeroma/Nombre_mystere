var solution = 3 * Math.random();
console.log(solution);
var response = prompt("Ajouter un nombre compris entre 0 et 3");
console.log(response);

if(response == solution){
	console.log("Bravo! Vous avez trouvé la solution!");
} else if(response < solution){
	console.log("La solution est plus grande.");
} else {
	console.log("La solution est plus petite.");
}