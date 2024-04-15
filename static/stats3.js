document.addEventListener('DOMContentLoaded', function(){
    var data = {
        labels: ['W', 'D', 'L'],
        datasets:[{
            label: 'Statistika utakmica',
            backgroundColor:['green', 'orange', 'red'],
            data:[21,8,3]
        }] 
    };
    var options = {
        title:{
            display: true,
            text: 'Statistika utakmica'
        }
    };

    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    document.getElementById('myChartContainer3').appendChild(myChart3.canvas);
});