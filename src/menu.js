let menu = () => {
    let divArray = [];
    const numberOfIteams = 10;

    for (let i=0;i<numberOfIteams;i++) {
        divArray[i] = document.createElement("P");
    }
    

    divArray[0].innerHTML = "Yam Tempura<br> $6.00";
    divArray[1].innerHTML = "Shrimp Tempura<br> $10.00";


    return divArray;
}

export default menu;