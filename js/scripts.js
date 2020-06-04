/* 

1. Make an overlay in HTML with CSS.

2. Select the overlay.

3. Create and event listener.

4. Check to see if this all works.

5. Create an object with the project image name and project details in HTML using string interpolation.

6. Create a counter and loop through the project names and use object iteration to use the project name in the URL.

7. Create a span to close the overlay.

*/

/* Modal Function */

const modalOverlay = document.getElementById('modal-overlay');
const pfCard = document.querySelector('.pf-cards');
const projectImage = document.querySelectorAll('.project-images');
const projectInfo = [
    {projectName: 'personal-profile-page-screen-shot'},
    {projectName: 'mobile-first-responsive-layout-screen-shot'},
    {projectName: 'online-registration-form-screen-shot'},
    {projectName: 'web-style-guide-screen-shot'},
    {projectName: 'interactive-photo-gallery-screen-shot'},
    {projectName: 'game-show-app-screen-shot'},
    {projectName: 'webapp-dashboard-screen-shot'},
    {projectName: 'api-employee-directory-screen-shot'}
];

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



console.log(projectImage);
console.log(projectInfo);
console.log(modalOverlay.style.display);
console.log(closeIcon);

