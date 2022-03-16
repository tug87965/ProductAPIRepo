function blog(){
    var content = ` 

      <h4>My Blog on my Databases</h4>
      
            
            
        <p> I am planning on making a website of a list of references to the 100 worst books on the goodreads website. I am planning on writing a script to grab all of the relevant information from the website and place in my own website of database.  </p><!-- comment -->
            
            <a href="https://www.goodreads.com/list/show/23974.Worst_Rated_Books_on_Goodreads"> Good reads link </a>
            <br></br>
                
            <!--This is my second database that is unique to my website -->
            <p> My database that is unique to my website will be information about each book: </p>
                <li>Book name</li>
                <li>Image of Book</li>
                <li>Author of Book</li>
                <li>Rating of Book</li>
                <li>Published date</li>
                <li>Book's Genre</li>
                <li>Date published</li>
            
                <!-- This is the third database for the website -->
                <p> My second database was going to be a database that users can upload recommendations of books that should be added to the website that are bad </p>
                <p> I am planning on pulling that information from the goodreads website and grabbing pertinent information from it by them entering the name and confirming that the information is accurate before adding it to the database.</p>
                <p> Besides similar information to the above database, I am also going to add the user who suggested it. </p> 

      
    `;
    
    var blogsOnHomeworks = '  <p> These are the blogs on my homework assignments. I have only started writing them on 03-08-22. </p>   ';
    
    var blogsOnHomeworksBefore09 = '<h1> Before 09 </h1> <p> Edit stuff in later </p>';
    
    var blogFor09 = ' <h1> Blog for 03-09-22 </h1> <p> I was able to actually get this stuff done on time. I believe I submitted everything properly. The only issue I really had was test';
    blogFor09 += '<p> I will be opening up the comment and social pages in another window later on in the assignment. </p>';
    
    var blogFor11 = '<h1> Blog for 03-11-22 </h1> <p> I was able to make changes to my code. Intially I had 3 js files and the index. I decided to implement the signup page directly into the homepage </p>';
    blogFor11 += '<p> I also was able to fix the issue when someone hits submit multiple comments and social pages appear. Now, it follows proper object coding. </p>';
    blogFor11 += '<p> Almost everything works except I have still not worked much on socials and making sure info actually appears on the index page when clicked. </p>';
    

       var ele = document.createElement("div");
       ele.innerHTML = content;
       ele.innerHTML += blogsOnHomeworks;
       ele.innerHtml += blogsOnHomeworksBefore09;
       ele.innerHTML += blogFor09;
       ele.innerHtML += blogFor11;
        return ele;

}
