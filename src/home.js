import '../node_modules/normalize.css/normalize.css';
import './home-style.css';
export default function createHomePage() {
    const content = document.querySelector("#content");
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'The Gator Garden';
    const welcomeBlurb = document.createElement('div');
    welcomeBlurb.classList.add('welcome');
    welcomeBlurb.textContent = "Welcome to The Gator Garden, home of South Florida's best country bites since 1982. Enjoy juicy burgers, fresh and high-quality seafood, or some of our signature gator plates! Nothing tastes like home like some good gator. Come into our swamp and have a good time!"
    const gatorImg = document.createElement('img');
    gatorImg.src = '../src/crocodile2_larger.png';
    const gatorImg2 = gatorImg.cloneNode(true);
    gatorImg.classList.add('bottom-deco');
    gatorImg2.classList.add('top-deco');
    welcomeBlurb.append(gatorImg, gatorImg2);
    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Hours: ';
    let sundayHours = document.createElement('p');
    let weekHours = document.createElement('p');
    let saturdayHours = document.createElement('p');
    sundayHours.textContent = 'Sunday / Closed';
    weekHours.textContent = 'Monday-Friday / 11 a.m. - 10 p.m.';
    saturdayHours.textContent = 'Saturday / 12 p.m. - 8 p.m.';
    hours.append(sundayHours, weekHours, saturdayHours);
    content.append(title, welcomeBlurb, hours);
}