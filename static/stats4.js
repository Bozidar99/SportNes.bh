document.addEventListener('DOMContentLoaded', function(){
    var data = {
        labels: ['W', 'D', 'L'],
        datasets: [{
            label: 'Statistika utakmica',
            backgroundColor:['green', 'orange', 'red'],
            data:[15,5,12]
        }]
    };
    var options = {
        title: {
            display: true,
            text: 'Statistika utakmica'
        }
    };

    var ctx = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options:options
    });
    document.getElementById('myChartContainer4').appendChild(myChart4.canvas)
});