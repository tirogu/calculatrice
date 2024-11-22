/** @format */

//1-recuper les elements a l'interieur du DOM
const touslesboutonsnombers = document.querySelectorAll('.clavier .nomber');
const touslesboutonsope = document.querySelectorAll('.clavier .ope');
const touslesboutonsaction = document.querySelectorAll('.clavier .action');
const touslesboutonsdecimal = document.querySelectorAll('.clavier .decimal');
const ecranoperation = document.querySelector('body .operation');
const ecranresultat = document.querySelector('body .resultat');
const resuslt = document.querySelector('.resu');
console.log(resuslt);
let calcules = [];
let dernierelementtableau = calcules[calcules.length - 1];

const operations = ['+', '-', '*', '/'];

//2-rentre les boutons interactifs
//2.1 les nombres : vu que les nombres sont des tableaux nous devons boucler
touslesboutonsnombers.forEach(function (element) {
	//la methode 'foreach' permet de parcourir l'ensemble des elements d'un tableau, et pour chaque iteration il te renvoi l'element courant.
	element.addEventListener('click', function () {
		dernierelementtableau = calcules[calcules.length - 1];
		const value = element.textContent;

		if (!calcules.length) {
			calcules.push(value);
		} else if (operations.includes(dernierelementtableau)) {
			calcules.push(value);

			// ecranoperation.textContent = ecranoperation.textContent + value
		} else {
			calcules[calcules.length - 1] = dernierelementtableau += value;
		}

		ecranoperation.textContent = calcules.join(' ');
	});
});

// touslesboutonsope.forEach(function (element) {
// 	element.addEventListener('click', function () {
// 		if ((dernierelementtableau = element.textContent)) {
// 			calcules.push('');
// 			console.log('beuteu');
// 		} else calcules.push(element.textContent);
// 		ecranoperation.textContent = calcules.join(' ');
// 	});
// });
touslesboutonsope.forEach(function (element) {
	element.addEventListener('click', function () {
		const dernierElement = calcules[calcules.length - 1];
		if (dernierElement === element.textContent) {
			// Gérer les entrées dupliquées (par exemple, afficher un message d'erreur ou empêcher l'ajout)
			console.log('Entrée dupliquée détectée');
		} else {
			calcules.push(element.textContent);
			ecranoperation.textContent = calcules.join(' ');
		}
	});
});

touslesboutonsaction.forEach(function (element) {
	element.addEventListener('click', function () {
		const value = element.textContent;
		ecranoperation.textContent = '';
		ecranresultat.textContent = '';
		calcules = [];
	});
});

resuslt.addEventListener('click', function () {
	let resul = eval(ecranoperation.textContent);
	ecranresultat.textContent = resul;
});

// function forEachX(fn) {
// 	const x = 7;
// 	fn(x);
// }

// forEachX(function (number) {
// 	alert(number);
// });

// Explication des fonctions

// function ajouter(a, b) {
// 	return a + b;
// }

// ajouter(3, 2);

// function sayHello() {
// 	function direBonjour(nom) {
// 		alert('Bonjour ' + nom);
// 	}
// 	const nom = prompt('Nom client ');
// 	direBonjour(nom);
// }
// sayHello();
