window.onload = function() {
    const IMAGES = [
        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    ];
    const TIME = 1000;
    let current = 0;
    let $image = document.querySelector('#image');
    let $prev = document.querySelector('#prev');
    let $next = document.querySelector('#next');
    let $play = document.querySelector('#play');
    let $stop = document.querySelector('#stop');
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

    function playImages() {
        interval = setInterval(nextImage, TIME);
        $next.setAttribute('disabled', true);
        $prev.setAttribute('disabled', true);
        $play.setAttribute('disabled', true);
        $stop.removeAttribute('disabled');
    };

    function stopImages() {
        clearInterval(interval);
        $next.removeAttribute('disabled');
        $prev.removeAttribute('disabled');
        $play.removeAttribute('disabled');
        $stop.setAttribute('disabled', true);
    };

    $next.addEventListener('click', nextImage);
    $prev.addEventListener('click', prevImage);
    $play.addEventListener('click', playImages);
    $stop.addEventListener('click', stopImages);
    renderImage();
};