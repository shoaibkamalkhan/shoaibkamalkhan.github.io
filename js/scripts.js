/* 

1. Make an overlay in HTML with CSS.

2. Select the overlay.

3. Create and event listener.

4. Check to see if this all works.

5. Create an object with the project image name and project details in HTML using string interpolation.

6. Create a counter and loop through the project names and use object iteration to use the project name in the URL.

*/

/* Modal Function */

const modalOverlay = document.getElementById('modal-overlay');
const projectImage = document.getElementsByClassName('project-images');

    for(let i = 0; i < projectImage.length; i += 1) {
        projectImage.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
        });
    }

console.log(projectImage);
