//load googles visualization library
//loads the core chart package (bar, pie, line, etc)
google.load('visualization', '1', {packages:['corechart']});

//once libraries are loaded... run function

google.setOnLoadCallback(drawChart);

//create drawChart function

function drawChart(){

    //create a data table
    //google can create one out of an array of data
    var data = google.visualization.arrayToDataTable([

        ['Task', 'kWh'],
        ['Heating', 3500],
        ['Cooling', 1800],
        ['Water Heater', 400],
        ['Dehumidifier', 160],
        ['Refrigerator', 200]
    ]);

    var options = {
        is3D:false, //true, false
        legend: {position:'labeled'}
    }

    //create the Chart

    var chart = new google.visualization.BarChart(document.getElementById('barchart'));

    //draw the chart

    chart.draw(data, options);


}
