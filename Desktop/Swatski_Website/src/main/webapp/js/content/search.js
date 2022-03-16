/* Need to make this into drop down menu so I can add employees to it later */

function search(){
    /* Will edit this all later so it looks good */
    var content = `
        
        
        <h1> Employees of the company </h1>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content; // the HTML code specified just above...
        var objContainer = document.createElement("div");
        objContainer.classList.add('flexContainer'); // see styling in this file, above...
        ele.appendChild(objContainer);
        objContainer.appendChild(MakeEmp("Abha", "http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg", "CEO"));
        objContainer.appendChild(MakeEmp("Dominic", "http://cis-linux2.temple.edu/~sallyk/pics_users/dominic.jpg", "CFO"));
        

        return ele;

}
