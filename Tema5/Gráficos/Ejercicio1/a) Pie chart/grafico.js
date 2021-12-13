/*1. Crea una página en la que representarás 2 gráficas diferentes haciendo 
uso de Google Charts sobre los siguientes conjuntos de datos:

a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. 
Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).
*/
// a)

// Pie chart

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
  
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {

// Create the data table.

var data = new google.visualization.DataTable();
data.addColumn('string', 'Partido');
data.addColumn('number', 'Votos');
data.addRows([
  ['PSOE', 6792199],
  ['PP', 5047040],
  ['VOX', 3656979],
  ['UP', 3119364],
  ['ERC-SOBIRANISTES', 874.859],
  ['CS', 1650318],
  ['JxCAT-JUNTS', 530225],
  ['PNV', 379002]
]);

  // Set chart options
  var options = {'title':'Votos por partidos en las últimas elecciones generales',
                 'width':400,
                 'height':300,
                 is3D: true};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}
