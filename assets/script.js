const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]
console.log(slides.length);

// Ici on déclare la contante pour les fleches et on récupère le document déclarer dans css
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// on ajoute le addevent listener à chaque fleche 
leftArrow.addEventListener('click', function() {
    console.log('Left arrow clicked');
   // on verifie avec console log 
});

rightArrow.addEventListener('click', function() {
    console.log('Right arrow clicked');
   
});

// on décalare la varaible dots caroussel pour les points et on recupère le documents dots dans le css
const dotsCarroussel = document.querySelector('.dots');

// on utilise la boucle foreach pour chaque slide du tableau et son index
slides.forEach((slide, index) => {
	const dot = document.createElement('span'); // on créer un élément pour le html "span"
	dot.classList.add('dot'); // on ajoute la classe css dot à notre span
	// si l'image est la N1 alors on affiche le dot selected 
	if (index === 0) {
        dot.classList.add('dot_selected');
    }
	dotsCarroussel.appendChild(dot); // on utilise la fonction appenchild pour afficher le sapn dans le carroussel
});