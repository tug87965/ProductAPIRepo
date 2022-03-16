function MakeSlideShow (nameList, style) {    

    var minFunNum = 0;
    var funNum = 0;
    var maxFunNum = nameList.length;
    
    var slideShow = document.createElement("div");
    slideShow.classList.add(style);
    
    // add a div that will hold the image
    var div = document.createElement("div");
    slideShow.appendChild(div);
    
    function display(){
        
        var myItem = document.createElement("p");
        myItem = nameList[funNum].item;
        div.append(myItem);

        var myPrice = document.createElement("p");
        myPrice = nameList[funNum].price;
        div.append(myPrice);

        var myImage = document.createElement("img");
        myImage.src = nameList[funNum].image;
        div.append(myImage);
    }


    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);
    
    
    
    backButton.onclick = prev;
    fwdButton.onclick = next;
    
    function next(){
        if(funNum + 1 < maxFunNum){
            funNum+=1;
            display();
        }
    };
    
    function prev(){
        if(funNum - 1 >= minFunNum){
            funNum-=1;
            display();
        }
    };
    
    
    display();
    

    return slideShow;
}
