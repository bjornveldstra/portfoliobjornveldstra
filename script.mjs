/*------------Fonction des cercles-------------*/

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const sections = document.querySelectorAll(".section");

    const updateActiveCircle = () => {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.id;
            }
        });
        if (window.scrollY === 0) {
            currentSection = "accueil";
        }
        circles.forEach((circle) => {
            if (circle.id === `circle-${currentSection}`) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    };

    updateActiveCircle();
    document.addEventListener("scroll", updateActiveCircle);
});


/*-----------Fonction de la bulle-------------*/

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const sections = document.querySelectorAll(".section");
    const speechBubble = document.querySelector(".speech-bubble p");

    const texts = {
        accueil: "Bienvenue sur mon portfolio ! Explorez les sections pour en apprendre davantage sur moi.",
        formations: "Ici, vous trouverez les formations que j'ai faites à partir de mon lycée. N'hésitez pas à en savoir plus !",
        experiences: "Parmi mes expériences professionnelles, j'ai pu travailler dans deux entreprises en alternance, et une en intérim.",
        realisations: "J'ai aussi eu l'opportunité de faire de nombreux projets à l'école, en entreprise, mais aussi chez moi !",
        centres: "Cliff jumping, sports nautiques, ski,... Découvrez en vidéo mes centres d'intérêt favoris !"
    };

    const updateActiveCircle = () => {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.id;
            }
        });
        if (window.scrollY === 0) {
            currentSection = "accueil";
        }
        circles.forEach((circle) => {
            if (circle.id === `circle-${currentSection}`) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
        if (speechBubble) {
            speechBubble.textContent = texts[currentSection] || "";
        }
    };

    updateActiveCircle();
    document.addEventListener("scroll", updateActiveCircle);
    circles.forEach((circle) => {
        circle.addEventListener("click", (event) => {
            const targetSection = document.querySelector(`#${circle.getAttribute('href').split('#')[1]}`);        
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                window.setTimeout(() => {
                    window.scrollBy(0, -80);
                }, 500);
            }
        });
    });
});


/*---------Fonction centres d'interet-------------*/

function navigateToPage() {
    if (document.getElementById('item-1').checked) {
        window.location.href = 'cliff.html';
    } else if (document.getElementById('item-2').checked) {
        window.location.href = 'ski.html';
    } else if (document.getElementById('item-3').checked) {
        window.location.href = 'nautique.html';
    }
}


/*--------------Fonction darkmode--------------*/

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            if (darkModeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
});

