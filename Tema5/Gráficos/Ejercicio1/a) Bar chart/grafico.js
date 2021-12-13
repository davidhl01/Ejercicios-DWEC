// a)

// Bar chart

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Partido', 'Votos', {role: 'style'}],
          ['PSOE', 6792199, 'color: #FA1906'],
          ['PP', 5047040, 'color: #066DFA'],
          ['VOX', 3656979, 'color: #06FA20'],
          ['UP', 3119364, 'color: #AD06FA'],
          ['ERC-SOBIRANISTES', 874859, 'color: #FAED06'],
          ['CS', 1650318, 'color: #FA9906'],
          ['JxCAT-JUNTS', 530225, 'color: #FA0699'],
          ['PNV', 379002, 'color: #178F05'],
        ]);

        var options = {
          chart: {
            title: 'Votos por partidos en las últimas elecciones generales'
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
