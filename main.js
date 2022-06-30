let click_elements = [
    document.getElementById("header-activity"),
    document.getElementById("header-map"),
    document.getElementById("header-time")
];

let content_items = [
    document.getElementById("content-activity"),
    document.getElementById("content-map"),
    document.getElementById("content-time")
];

click_elements.forEach(element => {
    element.addEventListener("click", ()=>{
        let counter = 0;
        let a = 0;
        click_elements.forEach(elem => {
            elem.className = "item";
            if (element === elem){
              a = counter;  
            }
            counter = counter + 1;
        });
        element.className = "active-item";
        content_items.forEach(item => {
            item.className = "inactive";
        });
        content_items[a].className = "active";
    });
});
