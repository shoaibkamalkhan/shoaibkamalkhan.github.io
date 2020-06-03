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
            modalOverlay.style.backgroundImage = `url('img/screen-shots/${projectInfo[index].projectName}.png')`;
        }
    });

    modalOverlay.innerHTML = '<span class="close-icon">X</span>';
    const closeIcon = document.querySelector('.close-icon');
    closeIcon.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });
});

console.log(projectImage);
console.log(projectInfo);
console.log(modalOverlay.style.backgroundImage);
console.log(closeIcon);

