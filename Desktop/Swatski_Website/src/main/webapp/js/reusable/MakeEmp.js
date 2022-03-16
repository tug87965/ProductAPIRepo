

function MakeEmp(name, img, title){

    var employeeObj = document.createElement("div"); 
    employeeObj.classList.add("emp");
    
    // Adds image
    var image = document.createElement("img");
    image.src = img;
    employeeObj.appendChild(image);

    // Add name
    var names = document.createElement("h3");
    names.innerHTML = name;
    employeeObj.appendChild(names);

    // Add title
    var titles = document.createElement("h4");
    titles.innerHTML = title;
    employeeObj.appendChild(titles);

    return employeeObj;

    /* Update this with the objectmake example that you have in 06_nav router adv */

    
    
    

}
