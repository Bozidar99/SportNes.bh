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

    var ctx = document.getElementById('myChart5').getContext('2d');
    var myChart5 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    document.getElementById('myChartContainer5').appendChild(myChart5.canvas);
});