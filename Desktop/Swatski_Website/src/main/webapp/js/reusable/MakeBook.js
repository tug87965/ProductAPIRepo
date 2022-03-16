//ratings will be able to be changed by the user I need to also adjust the sizes and colors and locations of everything so it comes up first in the thing
function MakeBook(name, img, author, genre, rating){
    
    var bookObj = document.createElement("div");
    bookObj.classList.add("book");

    var bookInfo = document.createElement("div");
    bookObj.appendChild(bookInfo);
    
    // Can update this stuff later to make it actually look right
    var image = document.createElement("img");
        // Need to make a default image I can pick later with the internet
    image.src = img;
    bookObj.appendChild(image);

    var names = document.createElement("p");
    names.innerHTML = name || "No Name";
    bookObj.appendChild(names);
    function getName(){ return names.innerHTML;}
    
    var authors= document.createElement("p");
    authors.innerHTML = author || "No author";
    bookObj.appendChild(authors);
    function getAuthor(){ return authors.innerHTML;}
    
    // Add genre
    var genres = document.createElement("p");
    genres.innerHTML = genre || "No genre";
    function getGenre(){ return genres.innerHTML;}
    bookObj.append(genres);
    
    
    // This is the rating section that will change when you press the button
    var rating = rating;
    
    var ratingButton = document.createElement("button");
    ratingButton.innerHTML = "Change Condition to: ";
    bookObj.appendChild(ratingButton);
    
    var ratingInput = document.createElement("input");
    bookObj.appendChild(ratingInput);
    
    ratingButton.onclick= function(){
        bookObj.setCondition(ratingInput);
    };

    bookObj.setCondition = function(newInput){
        rating = newInput.value;
        bookObj.display();
    };
    
    bookObj.display = function () {
        bookInfo.innerHTML = rating;
    };
    
    

    bookObj.display();
    return bookObj;
    
}
