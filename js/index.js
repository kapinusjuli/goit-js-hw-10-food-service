import menuCardTpl from '../src/templates/menu-card.hbs';
import menu from '../menu.json';


// console.log (menuCardTpl(menu[0]));
// console.log (menu);

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = JSON.stringify(createMenuMarkup (menu));


console.log (menuContainer);

function createMenuMarkup (menu) {
    return menu.map(menuCardTpl).join('');
}


menuContainer.insertAdjacentElement('beforeend', menuMarkup);
