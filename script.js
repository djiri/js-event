// Savoir detecter un evenement utilisateur

// Etape 1 -> Selectionner les elements 

let btn = document.querySelector('#toggle-rectangle');
let rect = document.querySelector('.rectangle');

// console.log(btn, rect);
// console.log(btn);
// console.log(rect);

// Etape 2 -> Créer les fonctions qui seront executés par l'evenement

function cacherAfficher() {
    rect.classList.toggle('hide');
    // toggle -> si la classe existe alors il la supprime, dans le cas inverse, il ajoute la classe
    // classlist -> pour gerer les classes (les ajouter ou les supprimer)
}

function addColorChange() {
    rect.classList.add('important');
    // add -> ajoute la classe spécifiée en paramètre
}

function removeColorChange() {
    rect.classList.remove('important');
    rect.classList.add('retireSouris');
    rect.classList.remove('doubleClick');
    // remove -> supprime la classe spécifiée en paramètre
}

function removeChangeGreen() {
    rect.classList.remove('good');
}

// Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
btn.addEventListener('click', cacherAfficher);
rect.addEventListener('mouseover', addColorChange);
rect.addEventListener('mouseout', removeColorChange);

function doubleColor() {
    rect.classList.add('doubleClick');
    // console.log(rect);
}

rect.addEventListener('dblclick', doubleColor);
rect.addEventListener('mouseout', removeColorChange);

// // Syntaxe différente 
// document.querySelector('#toggle-rectangle').addEventListener('click', function() {
//     rect.classList.toggle('hide');
// }
// );

// // Syntaxe avec la fonction fléchée
// document.querySelector('#toggle-rectangle').addEventListener('click', () => {
//     rect.classList.toggle('hide');
// }
// );


// --------------------------- La propagation d'evenement ----------------------------

// Gestion du click sur le document
document.addEventListener('click', function(){
    console.log('Gestionnaire document');
});

// Gestion du click sur le paragraphe
document.querySelector('#para').addEventListener('click', function(){
    console.log('Gestionnaire paragraphe');
});

// Gestin du click sur le bouton 
document.querySelector('#propa').addEventListener('click', function(){
    console.log('Gestionnaire Bouton');
});

// Arret de la propagation
document.querySelector('#propa').addEventListener('click', function(event){
    console.log('Gestionnaire Bouton');
    event.stopPropagation();

    // Lors d'une action utilisateur via un écouteur d'evenement, un objet event est crée, et 
    // est récupérable via les paramètres de ma fonction. Cet objet a des méthodes disponibles dont
    // event.stopPropagation()
});