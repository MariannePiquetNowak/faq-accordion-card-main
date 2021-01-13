// Récupérer la class .accordeon-item
let section = document.querySelector('.accordeon-item');
// Récupérer la class .accordeon-item-element
let sectionItem = document.querySelectorAll(".accordeon-item-element");


// Au click sur la class arrow, on ajoute la class .active à la variable section
// Toggle ? 

const clickArrow = () => {
    console.log(sectionItem); // Renvoie ma collection de noeuds sectionItem
    // Boucler sur cette collection
    // on souhaite que si tel élément est ciblé, on lui ajoute .active
}

section.addEventListener("click", clickArrow);