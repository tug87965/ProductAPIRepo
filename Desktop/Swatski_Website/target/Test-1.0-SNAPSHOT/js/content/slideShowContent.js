


function slideShowContent() {
    
    var content = `
    <h2> Slide Show </h2>
    
    <p> This is where I will be editing my slideshow content to make it look prety </p>
    
    <p> Reads in the ajax but does not deal with images properly </p>
    
    <p> Much of the slideshow movement is done in my MakeSlideShow.js file </p>
    
    <p> May need to make this into cleaner code where it works with all types of list inputs because currently it only works with funList inputs </p>
    
    <p> May need to combine all of the makeslideshow into slideshow content </p>
`;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    ele.classList.add("slideShow");  
    
    // Slide show is actually made and added here
    
   ajax("json/waterFun.json", processFunList, document.getElementById("firstSlideId"));

    //ajax("json/cars.json", processFunList, document.getElementById("firstSlideId"));
    function processFunList(funList) {
        var ss = MakeSlideShow(funList,"slideShow");
        ele.appendChild(ss);          
    }

    return ele;
}
