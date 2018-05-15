function getOptions(textToDisplay, xCoordinateLabel, yCoordinateLabel){
    return {
        responsive: true,
        title: {
            display: true,
            text: textToDisplay
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: xCoordinateLabel
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: yCoordinateLabel
                }
            }]
        }
    }
}

function update_chart(ids, ir, temp, smoke, predictions){

    var ctxTemperature = document.getElementById("temperature").getContext('2d');
    var ctxSmoke = document.getElementById("smoke").getContext('2d');
    var ctxIr= document.getElementById("ir").getContext('2d');
    try{
        var ctxML= document.getElementById("ML").getContext('2d');
        var ML = new Chart(ctxML, {
            type: 'line',
            data: {
                labels: ids,
                datasets: [{
                    label: 'IR',
                    data: predictions,
                    backgroundColor: [
                        'rgba(255, 100, 0, 0.2)',
                        'rgba(255, 100, 0, 0.2)',
                        'rgba(255, 100, 0, 0.2)',
                        'rgba(255, 100, 0, 0.2)',
                        'rgba(255, 100, 0, 0.2)',
                        'rgba(255, 100, 0, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 100, 0, 1)',
                        'rgba(255, 100, 0, 1)',
                        'rgba(255, 100, 0, 1)',
                        'rgba(255, 100, 0, 1)',
                        'rgba(255, 100, 0, 1)',
                        'rgba(255, 100, 0, 1)',
                    ],
                    borderWidth: 1.5,
                    fill: false,
                }]
            },
            options: getOptions('ML prediction value', 'ID', 'Machine State')
        });
    }

    catch(err)
    {
        console.log('HTML missing ML tag.');
    }

    var temperature = new Chart(ctxTemperature, {
        type: 'line',
        data: {
            labels: ids,
            datasets: [{
                label: 'Temperature',
                data: temp,
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                ],
                borderWidth: 1.5,
                fill: false,
            }]
        },
        options: getOptions('Temperature sensor readings', 'ID', 'Sensor Value')
    });

    var smoke = new Chart(ctxSmoke, {
        type: 'line',
        data: {
            labels: ids,
            datasets: [{
                label: 'Smoke',
                data: smoke,
                backgroundColor: [
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                ],
                borderWidth: 1.5,
                fill: false,
            }]
        },
        options: getOptions('Smoke sensor readings', 'ID', 'Sensor value')
    });

    var ir = new Chart(ctxIr, {
        type: 'line',
        data: {
            labels: ids,
            datasets: [{
                label: 'IR',
                data: ir,
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(255, 0, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 1.5,
                fill: false,
            }]
        },
        options: getOptions('IR sensor readings', 'ID', 'Sensor value')
    });

    var ML = new Chart(ctxML, {
        type: 'line',
        data: {
            labels: ids,
            datasets: [{
                label: 'ML Output',
                data: predictions,
                backgroundColor: [
                    'rgba(255, 100, 0, 0.2)',
                    'rgba(255, 100, 0, 0.2)',
                    'rgba(255, 100, 0, 0.2)',
                    'rgba(255, 100, 0, 0.2)',
                    'rgba(255, 100, 0, 0.2)',
                    'rgba(255, 100, 0, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 100, 0, 1)',
                    'rgba(255, 100, 0, 1)',
                    'rgba(255, 100, 0, 1)',
                    'rgba(255, 100, 0, 1)',
                    'rgba(255, 100, 0, 1)',
                    'rgba(255, 100, 0, 1)',
                ],
                borderWidth: 1.5,
                fill: false,
            }]
        },
        options: getOptions('ML prediction value', 'ID', 'Machine State')
    });
}