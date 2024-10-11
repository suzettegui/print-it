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
// on décalare la varaible dots caroussel pour les points et on recupère le documents dots dans le css
const dotsCarroussel = document.querySelector('.dots');
const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');


// définir la 1ére diapo sur index o du tableau
let slidePosition = 0;
updateSlide();

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


// Fonction pour mettre à jour l'affichage de la diapositive
function updateSlide() {
    // Mettre à jour l'image et le texte de la bannière
    bannerImg.src = `./assets/images/slideshow/${slides[slidePosition].image}`; // Utiliser slidePosition
    bannerTagline.innerHTML = slides[slidePosition].tagLine; // Utiliser slidePosition

    // Mettre à jour les points (dots)
    document.querySelectorAll('.dot').forEach((dot, index) => {
        if (index === slidePosition) { // Utiliser slidePosition
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}




// on ajoute le addevent listener à chaque fleche 
leftArrow.addEventListener('click', function() {
    console.log('Left arrow clicked');
   // on verifie avec console log 
   if (slidePosition === 0) {
	// Si on est à la première image, revenir à la dernière
	console.log('Première image, retour à la dernière');
	slidePosition = slides.length - 1;
} else {
	// Sinon, reculer à l'image précédente
	console.log('Retour à l\'image précédente');
	slidePosition--;
}
updateSlide();
});

rightArrow.addEventListener('click', function() {
    console.log('Right arrow clicked');
	if (slidePosition === slides.length - 1) {
        // Si on est à la dernière image, revenir à la première
        console.log('Dernière image, retour à la première');
        slidePosition = 0;
    } else {
        // Sinon, avancer à l'image suivante
        console.log('Passage à l\'image suivante');
        slidePosition++;
    }
    updateSlide();
});



