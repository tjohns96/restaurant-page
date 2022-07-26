import createHomePage from './home.js';
import createMenuPage from './menu.js';
import '../node_modules/normalize.css/normalize.css';
import './style.css';
const tabs = document.querySelectorAll('.nav-tab');
const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');
homeBtn.addEventListener('click', ()=>{
    if(homeBtn.classList.contains('selected')){
        return;
    }
    else{
        document.querySelectorAll('#content>*').forEach(item => item.parentElement.removeChild(item));
        createHomePage();
    }
});
menuBtn.addEventListener('click', ()=>{
    if(menuBtn.classList.contains('selected')){
        return;
    }
    else{
        document.querySelectorAll('#content>*').forEach(item => item.parentElement.removeChild(item));
        createMenuPage();
    }
});
tabs.forEach((tab) => tab.addEventListener('click', () =>{
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    tab.classList.add('selected');
}));
createHomePage();
