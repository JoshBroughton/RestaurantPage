import homepage from './homepage';
import menu from './menu';
import contact from './contact';
import anImage from './background.jpg';
import './style.css';

let loadHome = () => {
    contentWipe();
    content = document.getElementById("content");
    let items = homepage();
    items.forEach(element => content.appendChild(element));
}
let loadMenu = () => {
    contentWipe();
    let content = document.getElementById("content");
    let wrapper = document.createElement("div");
    wrapper.id = "menuWrapper";
    let items = menu();
    items.forEach(element => wrapper.appendChild(element));
    content.appendChild(wrapper);
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