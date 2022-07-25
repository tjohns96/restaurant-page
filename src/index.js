import createHomePage from './home.js';
import '../node_modules/normalize.css/normalize.css';
import './style.css';
const tabs = document.querySelectorAll('.nav-tab');
tabs.forEach((tab) => tab.addEventListener('click', () =>{
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    tab.classList.add('selected');
}));
createHomePage();
