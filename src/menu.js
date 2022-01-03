let menu = () => {
    let divArray = [];
    const numberOfIteams = 14;

    for (let i=0;i<numberOfIteams;i++) {
        divArray[i] = document.createElement("P");
    }
    

    divArray[0].innerHTML = "Yam Tempura<br> $6.00";
    divArray[1].innerHTML = "Shrimp Tempura<br> $10.00";
    divArray[2].innerHTML = "Salmon Sushi<br> $1.50";
    divArray[3].innerHTML = "Tamago Sushi<br> $1.25";
    divArray[4].innerHTML = "Tuna Sushi<br> $1.50";
    divArray[5].innerHTML = "Scallop Sushi<br> $1.75";
    divArray[6].innerHTML = "Unagi Sushi<br> $1.75";
    divArray[7].innerHTML = "Toro Sushi<br> $1.50";
    divArray[8].innerHTML = "Salmon Sashima<br> $4.00";
    divArray[9].innerHTML = "Tuna Sashimi<br> $4.25";
    divArray[10].innerHTML = "Dynamite Roll<br> $5.00";
    divArray[11].innerHTML = "Volcano Roll<br> $5.00";
    divArray[12].innerHTML = "Avocado Roll<br> $4.25";
    divArray[13].innerHTML = "Yam Roll<br> $4.00";


    return divArray;
}

export default menu;