var initViewabilityChart = function() {
    var index = 0;
    var ctx = document.getElementById("viewabilityChart").getContext('2d');
    var viewabilityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: '% in View',
                data: [],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                cubicInterpolationMode: 'monotone'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var addRandomData = function(){
        addData(Math.floor(Math.random()*100));
    };

    var addData = function(data){
        viewabilityChart.data.labels.push(index++ + "");
        viewabilityChart.data.datasets[0].data.push(data);
        viewabilityChart.update();
    };

    setInterval(addRandomData, 1000);
};
