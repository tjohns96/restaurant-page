import '../node_modules/normalize.css/normalize.css';
import './menu-style.css';
export default function createMenuPage(){
    const content = document.querySelector('#content');
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = "Menu";
    const platterSect = document.createElement('p');
    const platterSide = document.createElement('p');
    const soupSect = document.createElement('p');
    const soupSide = document.createElement('p');
    platterSect.textContent = "Platters"
    platterSide.textContent = "*All platters are served with a side of french fries";
    soupSect.textContent = 'Soups and stews';
    soupSide.textContent = '*All soups are served with a side salad and bread';
    platterSect.classList.add('section-head');
    soupSect.classList.add('section-head');
    platterSide.classList.add('side');
    soupSide.classList.add('side');
    const burgerContainer = document.createElement('div');
    const gatorNuggetsContainer = document.createElement('div');
    const gatorStewContainer = document.createElement('div');
    const chiliContainer = document.createElement('div');
    const tenderPlatterContainer = document.createElement('div');
    const ribsContainer = document.createElement('div');
    const shrimpGumboContainer = document.createElement('div');
    const fishChipsContainer = document.createElement('div');
    const friedShrimpContainer = document.createElement('div');
    let containers = [burgerContainer, gatorNuggetsContainer, gatorStewContainer, chiliContainer, tenderPlatterContainer, ribsContainer, shrimpGumboContainer, fishChipsContainer, friedShrimpContainer];
    containers.forEach(container => container.classList.add('menu-item'));
    const burgerImg = document.createElement('img');
    burgerImg.src = '../src/burger.jpg';
    const gatorNuggetsImg = document.createElement('img');
    gatorNuggetsImg.src = '../src/gatorNuggets.jpeg'
    const gatorStewImg = document.createElement('img');
    gatorStewImg.src = '../src/gatorStew.jpg';
    const chiliImg = document.createElement('img');
    chiliImg.src = '../src/chili.jpg';
    const tenderPlatterImg = document.createElement('img');
    tenderPlatterImg.src = '../src/chickenTenderPlatter.jpg'
    const ribsImg = document.createElement('img');
    ribsImg.src = '../src/ribs.jpg'
    const shrimpGumboImg = document.createElement('img');
    shrimpGumboImg.src = '../src/shrimpGumbo.jpg'
    const fishChipsImg = document.createElement('img');
    fishChipsImg.src = '../src/fishAndChips.jpg';
    const friedShrimpImg = document.createElement('img');
    friedShrimpImg.src = '../src/friedShrimpPlatter.jpg';
    chiliContainer.appendChild(chiliImg);
    burgerContainer.appendChild(burgerImg);
    gatorNuggetsContainer.appendChild(gatorNuggetsImg);
    gatorStewContainer.appendChild(gatorStewImg);
    tenderPlatterContainer.appendChild(tenderPlatterImg);
    ribsContainer.appendChild(ribsImg);
    fishChipsContainer.appendChild(fishChipsImg);
    shrimpGumboContainer.appendChild(shrimpGumboImg);
    friedShrimpContainer.appendChild(friedShrimpImg);
    content.append(title, platterSect, platterSide, burgerContainer, friedShrimpContainer, fishChipsContainer, gatorNuggetsContainer, tenderPlatterContainer, ribsContainer, soupSect, soupSide, shrimpGumboContainer, gatorStewContainer, chiliContainer);
}
