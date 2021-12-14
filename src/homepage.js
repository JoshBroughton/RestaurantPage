let homepage = () => {
   
    let message = "A locally owned sushi shop\n known for the lightest, crispiest tempura in Calgary";
    
    let description = document.createElement("P");
    
    description.innerHTML = message;
    description.id = "mainContent";
    

    return description;
}

export default homepage;