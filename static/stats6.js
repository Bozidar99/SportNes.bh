document.addEventListener('DOMContentLoaded', function(){
    var data = {
        labels: ['W', 'D', 'L'],
        datasets:[{
            label: 'Statistika utakmica',
            backgroundColor:['green', 'orange', 'red'],
            data:[10,9,12]
        }] 
    };
    var options = {
        title:{
            display: true,
            text: 'Statistika utakmica'
        }
    };

    var ctx = document.getElementById('myChart6').getContext('2d');
    var myChart6 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    document.getElementById('myChartContainer6').appendChild(myChart6.canvas);
});