function about(){
    var content = ` 
            <h1> Design Experience </h1>
            
            <p> My website design experience is very limited. I have done some very basic stuff with html just to understand how to read it, but have never worked with css and javascript to actually build a functional website that isnt just displying images. </p><!-- comment -->
        <p> I found this homework to be challenging, yet very good at making me understand the basics of divs, footers, and using css to make a page not just lines and lines of text, but somewhat well designed. It was hard for me to folow the lecture perfectly, but with this I was able to actually put into practice the things we talked about in class as well as from the sample_layout you gave us on your website.</p>     
        
    `;

       var ele = document.createElement("div");
       ele.innerHTML = content;
       return ele;

}