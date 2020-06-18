/* Variables */

const hamburger = document.querySelector('.icon');
const menu = document.getElementById("myLinks");
const mobileNav = document.querySelector('.mobile-nav');
const modalOverlay = document.getElementById('modal-overlay');
const pfCard = document.querySelector('.pf-cards');
const projectImage = document.querySelectorAll('.project-images');
const projectDetailsBtn = document.querySelectorAll('.project-details-btn');

/* Mobile Navigation Function */

hamburger.addEventListener('click', () => {
    if (menu.style.display === "block") {
        mobileNav.classList.remove('animate__fadeIn'); 
        mobileNav.classList.add('animate__fadeOut');
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        mobileNav.classList.remove('animate__fadeOut');
        mobileNav.classList.add('animate__fadeIn');
    }
    
    // if (mobileNav.classList.contains('animate__fadeIn')) {
    //     mobileNav.classList.remove('animate__fadeIn');
    // } else if (mobileNav.classList.contains('animate__fadeOut')) {
    //     mobileNav.classList.remove('animate__fadeOut');
    // }
});

// function mobileMenu() {
//     var menu = document.getElementById("myLinks");
//     if (menu.style.display === "block") {
//         menu.style.display = "none";
//     } else {
//         menu.style.display = "block";
//     }
// }

/* Overlay & Image Modal Event Listeners */

pfCard.addEventListener('click', e => {
    projectImage.forEach((image, index) => {
        if (e.target === image) {
            modalOverlay.style.display = 'flex';
            modalOverlay.innerHTML = `
                <span class="close-icon">X</span>
                <img class="overlay-project-image" src="img/screen-shots/${projectInfo[index].projectName}.png" alt="Modal Project Image">
            `;
            modalOverlay.classList.add('animate__flipInY');   
        }
    });

    modalOverlay.addEventListener('animationend', () => {
        if (modalOverlay.classList.contains('animate__flipInY')) {
            modalOverlay.classList.remove('animate__flipInY');
        } else if (modalOverlay.classList.contains('animate__flipOutY')) {
            modalOverlay.classList.remove('animate__flipOutY');
            modalOverlay.style.display = 'none';
        }
    });

    const closeIcon = document.querySelector('.close-icon');
    closeIcon.addEventListener('click', () => {
        modalOverlay.classList.add('animate__flipOutY');
    });
});

/* Overlay & Project Details Modal Event Listeners */

pfCard.addEventListener('click', e => {
    projectDetailsBtn.forEach((button, index) => {
        if (e.target === button) {
            modalOverlay.style.display = 'flex';
            modalOverlay.innerHTML = `${projectInfo[index].projectDetails}`;

            modalOverlay.classList.add('animate__fadeIn');
        }
    });

    modalOverlay.addEventListener('animationend', () => {
        if (modalOverlay.classList.contains('animate__fadeIn')) {
            modalOverlay.classList.remove('animate__fadeIn');
        } else if (modalOverlay.classList.contains('animate__fadeOut')) {
            modalOverlay.classList.remove('animate__fadeOut');
            modalOverlay.style.display = 'none';
        }
    });

    const closeIconDetails = document.querySelector('.close');
    closeIconDetails.addEventListener('click', () => {
        modalOverlay.classList.add('animate__fadeOut');
    });
});
