window.onload = function() {
    const IMAGES = [
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    ];
    const TIME = 1000;
    let current = 0;
    let $prev = document.querySelector('#prev');
    let $next = document.querySelector('#next');
    let $image = document.querySelector('#image');
    let interval;

    function renderImage() {
        $image.style.backgroundImage = `url(${IMAGES[current]})`;
    };

    function nextImage() {
        if(current >= IMAGES.length - 1) current = 0;
        else current++;
        renderImage();
    };

    function prevImage() {
        if(current <= 0) current = IMAGES.length - 1;
        else current--;
        renderImage();
    };

    $next.addEventListener('click', nextImage);
    $prev.addEventListener('click', prevImage);
    renderImage();
};