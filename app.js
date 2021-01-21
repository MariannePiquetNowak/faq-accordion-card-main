// Récupérer la class .accordeon-item
let section = document.getElementsByClassName('accordeon');

for(let i = 0; i < section.length; i++) {
    section[i].addEventListener("click", () => {
        // ajoute et retire la class active 
        section[i].classList.toggle("active");

        // Cible la flèche
        let arrow = section[i].children[0].children[1]

        // Je cible l'enfant souhaité (la div ".accordeon-item-parr")
        let panel = section[i].children[1];

        // Si section contient une class active
        if (section[i].classList.contains("active")) {
            // Je fais apparaitre son enfant "a"ccordeon-item-parr"
            panel.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        } else {
            // Si, je le "cache"
            panel.style.display = "none";
            arrow.style.transform = "rotate(360deg)";
        }  
    })

}

