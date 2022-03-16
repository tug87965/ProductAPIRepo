function other(){
    var content = ` 
      
        <h1> Click Sort Assignment </h1>
            
        <p> May need to rename this page later on </p>
        <p> This is the other page for the click sort assignment I will be working on this later.</p>
        <p> I want to see if I can complete some of the other past homeworks before I move on. I understand if I get a 0 for now. </p>
        <p> Over break, all of these pages will look a lot better </p>
    
        <p> Need to get these ajax calls into a table that will make it look prettier </p> 
        <p> The ajax calls work properly but I cannot figure out how to get the calls into the tble </p>
        <p> When I make the call to the SortableTableUtils.js file, it says </p>
    
        <p> Will update my addedBooks json table later on </p>
        
        <p> May need to add more fields to the addedBooks file but will do later </p>
    
        <p> I can call all the ajax files but I have not been able to add them to the table and filter them efficiently and order them </p>
    
    
    `;
    
        

        var ele = document.createElement("div");
        ele.innerHTML = content;

        var bookList = document.getElementById("container");
        var call = 'json/addedBooks.json';
        ajax(call, makeBookTable, bookList);
        
        
        
        // Trying to figure out what is in the bookList function at the momement. It is not fully working but I am getting it
        //console.log("here"); 
        // The obje
        // console.log(bookList);
        
        function makeBookTable(obj) {
            
            if (obj.length < 1) {
                
                var errorMessage = document.createElement("p");
                errorMessage.innerHTML = "ERROR ERROR ERROR";
                bookList.appendChild(errorMessage);
                
            }
            
            // If an object has been returned
            else{
                
                for (var i = 0; i < obj.length; i++) {
                    
                    /*
                    bookList[i] = {};
                    bookList[i].name = SortableTableUtils.makeText(obj[i].name.innerHTML);
                    */
                    
                    
                    var book = document.createElement("div");
                    book.classList.add("addedBook");
                    bookList.appendChild(book);
                    
                    var name = document.createElement("p");
                    name.innerHTML = "Name: " + obj[i].name;
                    book.appendChild(name);  
                     
                     
                    
                }
                
            }
            
        }
       
       
       // This actual makes the table and adds it to the output
       //ele.appendChild(MakeTableBetter("Books to be Added" , bookList));
       
       return ele;
}
