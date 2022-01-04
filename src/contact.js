let contact = () => {
    let map = document.createElement("iframe");
    map.id = "map";
    map.width = "750";
    map.height = "500";
    map.frameBorder = "0";
    map.style = "border:0";
    map.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCZq6nVxBEyLTj5Wuh5OPTyWQ-raOVWV7A&"+
    "q=Calgary+Tower,Calgary+Canada";
    return map;
}
//TODO: Dynamic resizing of map
export default contact;