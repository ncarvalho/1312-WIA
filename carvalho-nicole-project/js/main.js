window.onload = function(){

    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {
            //variable full of text
            var theString = 'We are all about Energy';

            //draw a string and set some info
            ctx.font = '25pt Pacifico';
            ctx.fillStyle = '#A2B37D';
            ctx.fillText(theString, 1,35);

        }
    }


    $('.tradLabel, .halogenLabel, .fluorLabel, .ledLabel').hide();

    $('#showData').click(function(){

        $('#traditional').animate({width:'341.6px'}, 1000);
        $('#tradNumber').fadeIn(1000);

        $('#halogen').animate({width:'184px'}, 1000);
        $('#halogenNumber').fadeIn(1000);

        $('#fluorescent').animate({width:'78.8px'}, 1000);
        $('#fluorNumber').fadeIn(1000);

        $('#led').animate({width:'36.8px'}, 1000);
        $('#ledNumber').fadeIn(1000);

    });

    $('#cs-buttons-jumbo').hide();

    $('#show-photos').click(function(){
        $('#jumbo').slideDown(2000);
        $('#show-photos').hide();

    })

    var theCanvas2 = document.getElementById('Canvas2');
    if (theCanvas2 && theCanvas2.getContext) {
    var ctx2 = theCanvas2.getContext("2d");

        if (ctx2) {

            console.log('Im working');

//            image = new Image();
//            image.src = 'img/earth2.jpg';
//
//            ctx2.drawImage(image, 10,10);


            ctx2.fillStyle="rgb(77,102,174)";
            ctx2.beginPath();
            ctx2.moveTo(152,100);
            ctx2.bezierCurveTo(152,138,121,169,83,169);
            ctx2.bezierCurveTo(45,169,15,138,15,100);
            ctx2.bezierCurveTo(15,62,45,31,83,31);
            ctx2.bezierCurveTo(121,31,152,62,152,100);
            ctx2.fill();

            ctx2.fillStyle="rgb(128,159,85)";
            ctx2.beginPath();
            ctx2.moveTo(94,130);
            ctx2.bezierCurveTo(94,130,111,112,122,119);
            ctx2.bezierCurveTo(133,126,140,118,127,134);
            ctx2.bezierCurveTo(114,151,120,144,109,145);
            ctx2.bezierCurveTo(99,147,94,142,94,130);
            ctx2.fill();

            ctx2.fillStyle="rgb(128,159,85)";
            ctx2.beginPath();
            ctx2.moveTo(61,110);
            ctx2.bezierCurveTo(87,129,65,131,97,106);
            ctx2.bezierCurveTo(128,82,121,82,112,72);
            ctx2.bezierCurveTo(103,62,94,59,79,66);
            ctx2.bezierCurveTo(64,73,36,91,61,110);
            ctx2.fill();

            ctx2.fillStyle="rgb(128,159,85)";
            ctx2.beginPath();
            ctx2.moveTo(28,131);
            ctx2.bezierCurveTo(28,131,28,150,42,148);
            ctx2.bezierCurveTo(57,147,54,145,54,134);
            ctx2.bezierCurveTo(54,123,37,122,37,122);
            ctx2.bezierCurveTo(37,122,24,123,28,131);
            ctx2.fill();

            ctx2.fillStyle="rgb(223,231,212)";
            ctx2.beginPath();
            ctx2.moveTo(43,47);
            ctx2.bezierCurveTo(43,47,83,25,93,36);
            ctx2.bezierCurveTo(102,47,75,51,67,52);
            ctx2.bezierCurveTo(59,52,38,53,43,47);
            ctx2.fill();


            ctx2.lineStyle="black";
            ctx2.lineWidth=13;
            ctx2.beginPath();
            ctx2.moveTo(180,80);
            ctx2.lineTo(250,80);
            ctx2.stroke();

            ctx2.lineStyle="black";
            ctx2.lineWidth=13;
            ctx2.beginPath();
            ctx2.moveTo(180,110);
            ctx2.lineTo(250,110);
            ctx2.stroke();


            ctx2.lineStyle="rgb(244,119,124)";
            ctx2.lineWidth=16;
            ctx2.beginPath();
            ctx2.moveTo(364,79);
            ctx2.bezierCurveTo(364,79,356,42,317,49);
            ctx2.bezierCurveTo(277,56,289,116,328,135);
            ctx2.bezierCurveTo(367,154,367,154,367,154);
            ctx2.strokeStyle="rgb(244,119,124)";
            ctx2.stroke();

            ctx2.lineStyle="rgb(244,119,124)";
            ctx2.lineWidth=16;
            ctx2.beginPath();
            ctx2.moveTo(364,79);
            ctx2.bezierCurveTo(364,79,371,42,411,49);
            ctx2.bezierCurveTo(450,55,439,116,400,135);
            ctx2.bezierCurveTo(361,154,361,154,361,154);
            ctx2.strokeStyle="rgb(244,119,124)";
            ctx2.stroke();


        }
    }



}
