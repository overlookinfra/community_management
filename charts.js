google.charts.load("current", { packages: ["corechart"] });
function drawRunsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 4353],
        ['Failure', 85]
    ]);
    var options = {
        title: 'Runs Overview for the last 5 runs',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_total_runs'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawRunsChart);

function drawChart_last_run() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 859],
        ['Failure', 18]
    ]);
    var options = {
        title: 'Runs Overview for last night run',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_last_run'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_last_run);

function drawStepsTotalChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  18],
               ['Install agent',  18],
               ['Install module',  0],
               ['Acceptance',  33],
            ]);

            var options = {title: 'Failed steps for the last 5 runs'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_total'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsTotalChart);

function drawStepsRunChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  5],
               ['Install agent',  3],
               ['Install module',  0],
               ['Acceptance',  6]
            ]);

            var options = {title: 'Failed steps for the last run'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_run'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsRunChart);google.charts.load("current", { packages: ["corechart"] });
function drawRunsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 4353],
        ['Failure', 85]
    ]);
    var options = {
        title: 'Runs Overview for the last 5 runs',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_total_runs'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawRunsChart);

function drawChart_last_run() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 859],
        ['Failure', 18]
    ]);
    var options = {
        title: 'Runs Overview for last night run',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_last_run'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_last_run);

function drawStepsTotalChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  18],
               ['Install agent',  18],
               ['Install module',  0],
               ['Acceptance',  33],
            ]);

            var options = {title: 'Failed steps for the last 5 runs'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_total'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsTotalChart);

function drawStepsRunChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  5],
               ['Install agent',  3],
               ['Install module',  0],
               ['Acceptance',  6]
            ]);

            var options = {title: 'Failed steps for the last run'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_run'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsRunChart);google.charts.load("current", { packages: ["corechart"] });
function drawRunsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 4353],
        ['Failure', 85]
    ]);
    var options = {
        title: 'Runs Overview for the last 5 runs',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_total_runs'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawRunsChart);

function drawChart_last_run() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 859],
        ['Failure', 18]
    ]);
    var options = {
        title: 'Runs Overview for last night run',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_last_run'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_last_run);

function drawStepsTotalChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  18],
               ['Install agent',  18],
               ['Install module',  0],
               ['Acceptance',  33],
            ]);

            var options = {title: 'Failed steps for the last 5 runs'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_total'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsTotalChart);

function drawStepsRunChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  5],
               ['Install agent',  3],
               ['Install module',  0],
               ['Acceptance',  6]
            ]);

            var options = {title: 'Failed steps for the last run'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_run'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsRunChart);google.charts.load("current", { packages: ["corechart"] });
function drawRunsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 4353],
        ['Failure', 85]
    ]);
    var options = {
        title: 'Runs Overview for the last 5 runs',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_total_runs'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawRunsChart);

function drawChart_last_run() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 859],
        ['Failure', 18]
    ]);
    var options = {
        title: 'Runs Overview for last night run',
        slices: [{ color: 'green' }, { color: 'red' }],
        pieHole: 0.4,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart_last_run'));
    chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart_last_run);

function drawStepsTotalChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  18],
               ['Install agent',  18],
               ['Install module',  0],
               ['Acceptance',  33],
            ]);

            var options = {title: 'Failed steps for the last 5 runs'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_total'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsTotalChart);

function drawStepsRunChart(){
    var data = google.visualization.arrayToDataTable([
               ['Steps', 'Failure'],
               ['Provision',  5],
               ['Install agent',  3],
               ['Install module',  0],
               ['Acceptance',  6]
            ]);

            var options = {title: 'Failed steps for the last run'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_run'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsRunChart);
