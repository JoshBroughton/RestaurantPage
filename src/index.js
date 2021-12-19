import homepage from './homepage';
import menu from './menu';
import contact from './contact';
import anImage from './background.jpg';
import './style.css';

let loadHome = () => {
    contentWipe();
    let content = document.getElementById("content");
    content.appendChild(homepage());   
}
let loadMenu = () => {
    contentWipe();
    let content = document.getElementById("content");
    content.appendChild(menu());
}
let loadContact = () => {
    contentWipe();
    let content = document.getElementById("content");
    content.appendChild(contact());
}
let contentWipe = () => {
    let content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}
let homeButton = () => {
    document.getElementById("home").addEventListener("click", loadHome);

}
let menuButton = () => {
    document.getElementById("menu").addEventListener("click", loadMenu);
}
let contactButton = () => {
    document.getElementById("contact").addEventListener("click", loadContact);
}

loadHome();
homeButton();
menuButton();
contactButton();