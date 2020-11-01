import menuCardTpl from '../src/templates/menu-card.hbs';
import menu from '../menu.json';


// console.log (menuCardTpl(menu[0]));
// console.log (menu);

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup (menu);


console.log (menuContainer);

function createMenuMarkup (menu) {
    return menu.map(menuCardTpl).join('');
}


menuContainer.insertAdjacentHTML('afterbegin',menuMarkup);

// Переключатель тем

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


  
const bodyColor = document.querySelector('body');

const themeChange = document.querySelector('.theme-switch__toggle')

themeChange.addEventListener('change', clickHandler);
themeChange.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getThemeFromLocalStorage);


function clickHandler(evt) {
if (themeChange.checked) {
    setDarkTheme()
} else {
    setLightTheme()
}
}

function setLocalStorage(evt) {
    if (themeChange.checked) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function getThemeFromLocalStorage() {
    const themeInLocalStrg = localStorage.getItem('theme');
    if (themeInLocalStrg === Theme.DARK) {
        bodyColor.classList.add(Theme.DARK);
        themeChange.checked = true;
    }
}

function setDarkTheme() {
    bodyColor.classList.add(Theme.DARK);
    bodyColor.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
    bodyColor.classList.add(Theme.LIGHT);
    bodyColor.classList.remove(Theme.DARK);
}