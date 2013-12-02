/*
     Name: NICOLE CARVALHO
     Date: NOV 25 2013
     Class & Section:  WIA-1312
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/


/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
// Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message


///*******************************************
//PART 1
//
//Draw a rectangle starting at point (0 ,0)
//That has a width of 50 px and a height of 100px
//Set the color of the rectangle to a shade of blue.
//Set the stroke color to black and the dimension of the stroke are the same as the rectangle.
//
//Reminder - set the style first then draw.
//********************************************/

//Draw Rectangle here
 window.onload = function(){
 	var theCanvas = document.getElementById("Canvas1");

 	if(theCanvas && theCanvas.getContext("2d")){
 		var ctx = theCanvas.getContext("2d");
 		if(ctx){
 			//Draw here
            //set stroke and lineWidth
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            
            //strokeRect(posX, posY, width, height)
            ctx.strokeRect(0,0,50,100);
            
            //fill rectangle
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(0,0,50,100);

 		}
 	}



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

 	var theCanvas2 = document.getElementById("Canvas2");

 	if(theCanvas2 && theCanvas2.getContext("2d")){
 		var ctx2 = theCanvas2.getContext("2d");
 		if(ctx2){
 			//Draw here
            ctx2.strokeStyle = 'black';
            ctx2.fillStyle = 'rgba(203,25,22,.5)';
            ctx2.lineWidth = 5;
            
            //stroke and fill circle
            var degrees = 360;
            var radians = (Math.PI/180)*degrees;
            ctx2.beginPath();
            ctx2.arc(50,50,20,0,radians);
            ctx2.closePath();
            ctx2.fill();
            ctx2.stroke();

 		}
 	}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
     
    var theCanvas3 = document.getElementById("Canvas3");

 	if(theCanvas3 && theCanvas3.getContext("2d")){
 		var ctx3 = theCanvas3.getContext("2d");
 		if(ctx3){
 			//Draw here
            ctx3.strokeStyle = 'blue';
            ctx3.lineWidth = 5;
            
            ctx3.beginPath();
            ctx3.moveTo(100,100);
            
            ctx3.lineTo(193,100);
            ctx3.lineTo(222,11);
            ctx3.lineTo(256,100);
            ctx3.lineTo(349,100);
            ctx3.lineTo(276,170);
            ctx3.lineTo(305,250);
            ctx3.lineTo(226,208);
            ctx3.lineTo(150,250);
            ctx3.lineTo(175,170);
            ctx3.closePath();
            ctx3.stroke();
 		}
 	}
 
     
/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
     
    var theCanvas4 = document.getElementById("Canvas4");

 	if(theCanvas4 && theCanvas4.getContext("2d")){
 		var ctx4 = theCanvas4.getContext("2d");
 		if(ctx4){
 			//Draw here
            ctx4.strokeStyle = 'red'; 
            ctx4.fillStyle = 'blue';
            ctx4.lineWidth = 3;
            
            var degrees = 180;
            var radians = (Math.PI/180)*degrees;
            ctx4.beginPath();
            ctx4.arc(200,175,150,0,(Math.PI/180)*180, true);
            
            ctx4.moveTo(50,175);
            ctx4.bezierCurveTo(75,150,100,150,125,175);
            ctx4.bezierCurveTo(150,150,175,150,200,175);
            ctx4.bezierCurveTo(225,150,250,150,275,175);
            ctx4.bezierCurveTo(300,150,325,150,350,175);
            
            ctx4.fill();
            ctx4.stroke();

 		}
 	}
 

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
     
    var theCanvas5 = document.getElementById("Canvas5");

    if(theCanvas5 && theCanvas5.getContext("2d")){
        var ctx5 = theCanvas5.getContext("2d");
        if(ctx5){
            //Draw here
            var theString = 'My name is Nicole!';
            ctx5.font = '28pt Arial';
            ctx5.fillStyle = 'purple';
            ctx5.fillText(theString, 20, 40);

        }
    }

///*******************************************
//PART 6
//
//Pixel manipulation.
//Draw the image logo.png into the canvas in the following 3 ways.
//1. The image exactly as it is.
//2. Shrink the image by 50%
//3. Slice a section of the logo out and draw that onto the canvas.
//
//Reminder to use the drawImage method for all 3 of the ways.
//
//********************************************/

//Draw images here



///*******************************************
//PART 7
//
//Putting it all together. 
//
//Using a combination of all the methods. 
//Create a complex scene.
//You must use at least 3 different methods.
//
//********************************************/

// Draw scene here

    var theCanvas7 = document.getElementById("Canvas7");

 	if(theCanvas7 && theCanvas7.getContext("2d")){
 		var ctx7 = theCanvas7.getContext("2d");
 		if(ctx7){
 			//Draw here
            
            //caption (text)
            var theString2 = 'How many licks does';
            ctx7.font = '18pt Arial';
            ctx7.fillStyle = 'green';
            ctx7.fillText(theString2, 10, 40);
            
            var theString3 = 'it take to get to';
            ctx7.fillText(theString3, 10, 70);
            
            var theString4 = 'the center of';
            ctx7.fillText(theString4, 10, 100);
            
            var theString5 = 'a lollipop?';
            ctx7.fillText(theString5, 10, 130);
            
            //lollipop (circle & rectangle)
            ctx7.lineWidth = 15;
            ctx7.strokeStyle = 'red';
            ctx7.beginPath();
            ctx7.moveTo(270,155);
            ctx7.lineTo(200,275);
            ctx7.stroke();
            
            ctx7.strokeStyle = 'lightgrey';
            ctx7.fillStyle = 'lightgreen';
            ctx7.lineWidth = 1;
            var degrees = 360;
            var radians = (Math.PI/180)*degrees;
            ctx7.beginPath();
            ctx7.arc(300,100,70,0,radians);
            ctx7.closePath();
            ctx7.fill();
            ctx7.stroke();
            
            ctx7.fillStyle = 'blue';
            var degrees = 360;
            var radians = (Math.PI/180)*degrees;
            ctx7.beginPath();
            ctx7.arc(300,100,50,0,radians);
            ctx7.closePath();
            ctx7.fill();
            ctx7.stroke();
            
            ctx7.fillStyle = 'lightgreen';
            var degrees = 360;
            var radians = (Math.PI/180)*degrees;
            ctx7.beginPath();
            ctx7.arc(300,100,30,0,radians);
            ctx7.closePath();
            ctx7.fill();
            ctx7.stroke();
            
            ctx7.fillStyle = 'blue';
            var degrees = 360;
            var radians = (Math.PI/180)*degrees;
            ctx7.beginPath();
            ctx7.arc(300,100,10,0,radians);
            ctx7.closePath();
            ctx7.fill();
            ctx7.stroke();
            
        

 		}
 	}

 }//end window.onload function
