const images = document.querySelectorAll('img');

window.addEventListener('scroll', checkImgs);

checkImgs();

function checkImgs() {
    const triggerBottom = window.innerHeight/5 * 4 // trigger point

    images.forEach(image => {
        const imgTop = image.getBoundingClientRect().top; // give location of the top of the box

        if(imgTop < triggerBottom) {
            image.classList.add('show');

        } else {
            image.classList.remove('show');
        }
    })
}