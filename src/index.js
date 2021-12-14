import homepage from './homepage';
import anImage from './background.jpg';
import './style.css';

let loadHome = () => {
    let content = document.getElementById("content");
    content.appendChild(homepage());   
}
let contentWipe = () => {
    let content = document.getElementById("content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

loadHome();