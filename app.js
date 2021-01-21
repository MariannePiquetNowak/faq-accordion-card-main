// Récupérer la class .accordeon-item
let section = document.getElementsByClassName('accordeon');

for(let i = 0; i < section.length; i++) {
    section[i].addEventListener("click", () => {
        // ajoute et retire la class active
        section[i].classList.toggle("active");

        let panel = section[i].children[1];

        if (section[i].classList.contains("active")) {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }



        // Faire apparaitre l'enfant voulu => section[i].children
        
    })

}
