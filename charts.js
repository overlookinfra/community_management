google.charts.load("current", { packages: ["corechart"] });
function drawRunsChart() {
    var data = google.visualization.arrayToDataTable([
        ['Job Status', 'Total'],
        ['Success', 4484],
        ['Failure', 76]
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
        ['Success', 892],
        ['Failure', 20]
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
               ['Provision',  15],
               ['Install agent',  12],
               ['Install module',  1],
               ['Acceptance',  35],
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
               ['Provision',  4],
               ['Install agent',  3],
               ['Install module',  1],
               ['Acceptance',  8]
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
        ['Success', 4484],
        ['Failure', 76]
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
        ['Success', 892],
        ['Failure', 20]
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
               ['Provision',  15],
               ['Install agent',  12],
               ['Install module',  1],
               ['Acceptance',  35],
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
               ['Provision',  4],
               ['Install agent',  3],
               ['Install module',  1],
               ['Acceptance',  8]
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
        ['Success', 4484],
        ['Failure', 76]
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
        ['Success', 892],
        ['Failure', 20]
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
               ['Provision',  15],
               ['Install agent',  12],
               ['Install module',  1],
               ['Acceptance',  35],
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
               ['Provision',  4],
               ['Install agent',  3],
               ['Install module',  1],
               ['Acceptance',  8]
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
        ['Success', 4484],
        ['Failure', 76]
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
        ['Success', 892],
        ['Failure', 20]
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
               ['Provision',  15],
               ['Install agent',  12],
               ['Install module',  1],
               ['Acceptance',  35],
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
               ['Provision',  4],
               ['Install agent',  3],
               ['Install module',  1],
               ['Acceptance',  8]
            ]);

            var options = {title: 'Failed steps for the last run'}; 

            // Instantiate and draw the chart.
            var chart = new google.visualization.ColumnChart(document.getElementById('steps_chart_run'));
            chart.draw(data, options);
         }
         google.charts.setOnLoadCallback(drawStepsRunChart);
