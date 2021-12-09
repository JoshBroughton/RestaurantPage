let homepage = (imageIn) => {
    //define all the content to be inserted
    let message = "A locally owned sushi shop known for the lightest, crispiest tempura in Calgary";
    
    
    //create the elements the content will be attached to
    let div = document.createElement("div");
    let description = document.createElement("P");
    //let imgElement = document.createElement("IMG");

    //append the content to their HTML element
    description.innerHTML = message;
    //imgElement.src = imageIn;
    div.append(description);

    return div;
}

export default homepage;