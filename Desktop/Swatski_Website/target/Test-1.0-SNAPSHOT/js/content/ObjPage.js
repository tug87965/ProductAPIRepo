
function ObjPage(){
    var content = ` 
      
        <h1> JS Object Homework Page</h1>
            
        <p> Here is the actual code for my books. If this is still here, then I was not able to finish everything in time to make it nice and presentable </p>

        <p> I am also planning on making it so the two books I am grabbing are not hard coded </p>

        <p> Will Get nicer looking images shortly </p>

        <p> Also these were the top two books on the site. I did not pick them </p>
    
        <p> I have also added a makeBook() that has nothing inside of it to show default </p>
        
    `;

        var ele = document.createElement("div");
        ele.innerHTML = content; 
        
        var objContainer = document.createElement("div");
        objContainer.classList.add('book'); 
        ele.appendChild(objContainer);
        
        //These two were default ones I made
        objContainer.appendChild(MakeBook("Besos Entres Lineas", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1454075242i/28799408._SY75_.jpg", "May R. Ayamonte ", "Young adult" , 0));
        objContainer.appendChild(MakeBook("Birth Control Is Sinful in the Christian Marriages and Also Robbing God of Priesthood Children!!", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347756389i/6324600._SX50_.jpg", " Eliyzabeth Yanne Strong-Anderson", "Religious" , 0));
        
        
        // Making a version without anything inside of it
        objContainer.appendChild(MakeBook());
        
        
        return ele;

}
