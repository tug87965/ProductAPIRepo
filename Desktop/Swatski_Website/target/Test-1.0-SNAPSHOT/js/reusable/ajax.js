/* 
 * function ajax input parameters:
 *     url: the URL of the Web API for the AJAX call (expecting the result to be in JSON format).
 *     successCallBackFn: this function gets called (passing the response data to this function) once when the data is ready. 
 *     errorEle: a DOM element where an error message is injected if the AJAX call fails. e.g., URL not found.
 */

function ajax(url, successCallBackFn, errorEle) {

    var readyStates = ["unsent", "opened", "headers_received", "loading", "done"];

    // This httpReq Object is now local to function "ajax" (not global)
    // AND we get a new object each time we invoke the ajax function.
    var httpReq;
    if (window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest(); //For Firefox, Safari, Opera
    } else if (window.ActiveXObject) {
        httpReq = new ActiveXObject("Microsoft.XMLHTTP"); //For IE 5+
    } else {
        alert('ajax not supported');
    }

    httpReq.open("GET", url); // specify which page you want to get
    console.log("5 in fn ajax, just specifyied the url to be read: " + url);

    // We now define the function that the browser will "call back" when the data is available.
    // We do not bother naming the function. It's defined anonymously, in line. 

    httpReq.onreadystatechange = function () {
        console.log('10 in fn ajax, HttpRequest State ' + httpReq.readyState + ' which is ' + readyStates[httpReq.readyState]);

        if (httpReq.readyState === 4) {     // 4 means that the data transfer is complete
            if (httpReq.status === 200) {   // 200 means file found (unlike 404 which means not found)

                // The responseText property of the http request object holds the data. 
                // We are assuming that this data is in JSON format, and so we are converting it from a JSON 
                // String into a JavaScript object. 

                // Then we call function "successCallBackFn" (a parameter passed into function "ajax"). 
                // successCallBackFn will handle the details of what to do with the data. 

                console.log("11 in fn ajax (AJAX Success) before calling successCallBackFn");

                successCallBackFn(JSON.parse(httpReq.responseText));

                console.log("20 in fn ajax (AJAX Success) after calling successCallBackFn");

            } else {  // error, file not found

                console.log("10 in fn ajax - AJAX Failure");

                var errorMsg = "Error " + httpReq.status + "-" + httpReq.statusText +
                        " while attempting to read '" + url + "'";
                console.log(errorMsg);
                // One input parameter to this ajax function is a DOM element designed to hold any possible error message. 
                // Populate it with as much information as we know about the error. 
                errorEle.innerHTML += errorMsg + "<br/>";
            }
        }
    }; // end of anonymous callback function definition

    console.log('6 in fn ajax, just specified anonymous fn for the browser to call back');

    httpReq.send(null); // initiate ajax call

    console.log('7 in fn ajax, just asked the browser to initiate the HTTP Request');

    // Now this function is done running, but whenever the data is ready, 
    // the anonymous call back function will be invoked.

} // end function ajax




