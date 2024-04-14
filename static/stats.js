document.addEventListener('DOMContentLoaded', function(){
    var data = {
        labels: ["W", "D", "L"],
        datasets: [{
            label: "Statistika utakmica",
            backgroundColor: ['green', 'orange', 'red'],
            data: [15,5,12]
        }]
    };
    var options = {
        title:{
            display: true,
            text: "Statstike utakmica"
        }
    };
    
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    document.getElementById("myChartContainer").appendChild(myChart.canvas);

});
