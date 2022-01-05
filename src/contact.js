let contact = () => {
    let message = document.createElement("p");
    message.innerHTML = "Come join us in the in arctic cold heart of Calgary, Alberta!";
    message.id = "contactText";

    let map = document.createElement("iframe");
    map.id = "map";
    map.width = "750";
    map.height = "500";
    map.frameBorder = "0";
    map.style = "border:0";
    map.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDZw24att9FHFo7w_s0LmD4fCEVtr7YiBk&"+
    "q=Calgary+Tower,Calgary+Canada";

    let divArray = [];
    divArray[0] = message;
    divArray[1] = map;
    return divArray;
}
//TODO: Dynamic resizing of map
export default contact;