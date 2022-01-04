let homepage = () => {
   
    let message = "A locally owned sushi shop<br>known for the lightest,<br> crispiest tempura in Calgary";
    let ourhours = "Sun-Wed: 10am-10pm<br>Thurs-Sat: 10am-11pm";

    let description = document.createElement("P");
    let hours = document.createElement("P");
    
    description.innerHTML = message;
    hours.innerHTML = ourhours;

    description.id = "mainContent";
    hours.id = "hours";

    let divArray = [];
    divArray[0] = description;
    divArray[1] = hours;
    

    return divArray;
}

export default homepage;