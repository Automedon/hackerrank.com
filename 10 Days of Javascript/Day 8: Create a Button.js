/*
Objective

In this challenge, we practice creating buttons in JavaScript. Check out the attached tutorial for learning materials.

Task

Complete the code in the editor so that it creates a clickable button satisfying the following properties:

The button's id is btn.
The button's initial text label is . After each click, the button must increment by . Recall that the button's text label is the JS object's innerHTML property.
The button has the following style properties:
A width of 96px.
A height of 48px.
The font-size attribute is 24px.
The .js and .css files are in different directories, so use the link tag to provide the CSS file path and the script tag to provide the JS file path:

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
    	<script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
Submissions

This is a new style of challenge involving Front-End rendering. It may take up to  seconds to see the result of your code, so please be patient after clicking Submit. The Submissions page contains screenshots to help you gauge how well you did.

Ask questions in the Discussions forum and submit any bug reports to support@hackerrank.com. Enjoy!

Explanation

Initially, the button looks like this:

initial

After the first  clicks, it looks like this:

four clicks

After  more clicks, it looks like this:

nine clicks
*/
//css
.btnClass {
    width: 96px;
    height: 48px;
    font-size: 24px;
}
//js
var btn = document.createElement("Button");

btn.innerHTML = 0;
btn.id = "btn";
btn.className = "btnClass";

document.body.appendChild(btn);

btn.onclick = function() {
    btn.innerHTML++;
}
//html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/button.css" type="text/css">
    </head>
    
    <body>
        <script src="js/button.js" type="text/javascript"></script>
    </body>
</html>
