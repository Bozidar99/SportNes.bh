document.addEventListener('DOMContentLoaded', function(){
    var data = {
        labels: ['W', 'D', 'L'],
        datasets: [{
            label: 'Statistika utakmica',
            backgroundColor: ['green', 'orange', 'red'],
            data: [26,5,1]
        }]
    };
    var options = {
        title:{
            display: true,
            text: 'Statistika utakmica'
        }
    };
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    document.getElementById('myChartContainer2').appendChild(myChart1.canvas)
});