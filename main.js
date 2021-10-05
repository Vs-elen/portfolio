let flashButton = document.querySelector('#flash-button');
let pianoButton = document.querySelector('#piano-button');
let windowContent = document.querySelector('.window-content');
let popup = document.querySelector('.window');
let closeButton = document.querySelector('.window-closer');
let popupTitle = document.querySelector('.window-title')
let popupText = document.querySelector('.window-info')
let popupA = document.querySelector('.window-a')

let menu = document.querySelector('.navigation__links');
let menuItems = document.querySelectorAll('.navigation__item');
let openMenu = document.querySelector('.navigation__menu');
let closeMenu = document.querySelector('.navigation__menu-close');

let popupFlashText = 'I did this project when I was studying the Frontend on Hyperskill. I created a web page with flip-down flash cards using HTML and CSS';
let popupPianoText = 'I did this project when I was studying the Frontend on Hyperskill. I created a web page with virtual piano app using HTML, CSS and JS';

function createCard(title, link, linkName, text) {
    popupTitle.textContent = title;
    popupA.setAttribute('href', link);
    popupA.textContent = linkName;
    popupText.textContent = text;
}

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeMenu.style.display = 'none';
        openMenu.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeMenu.style.display = 'block';
        openMenu.style.display = 'none';
    }
}

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menuItems.forEach(
    function (item) {
        item.addEventListener('click', toggleMenu)
    }
)


flashButton.addEventListener('click', function() {
    createCard('Flashcards', 'https://vs-elen.github.io/Grammar-game/', 'Flashcards', popupFlashText);
    popup.classList.remove('window-closed');
})

pianoButton.addEventListener('click', function() {
    popup.classList.remove('window-closed');
    createCard('Virtual Piano', 'https://vs-elen.github.io/piano/', 'Virtual Piano', popupPianoText);
})

closeButton.addEventListener('click', function () {
    popup.classList.add('window-closed');
})



