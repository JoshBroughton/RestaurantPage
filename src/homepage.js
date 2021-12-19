let homepage = () => {
   
    let message = "A locally-owned sushi shop<br>known for the lightest,<br> crispiest tempura in Calgary";
    
    let description = document.createElement("P");
    
    description.innerHTML = message;
    description.id = "mainContent";
    

    return description;
}

export default homepage;