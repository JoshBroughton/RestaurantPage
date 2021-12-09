import homepage from './homepage';
import anImage from './sushHomepage.jpeg';
import './style.css';

let myImage = new Image();
myImage.src = anImage;

content = document.getElementById("content");
content.appendChild(homepage(myImage));