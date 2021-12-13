/*b) Ránking mundial de países más turísticos (por número de visitantes). 
Deberás representar estos datos mediante un gráfico Geográfico.*/

google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Países', 'Número de visitantes'],
      ['France', 89400],
      ['spain', 83509],
      ['United states', 79256],
      ['China', 65700],
      ['Italy', 64513],
      ['Turkey', 51192],
      ['Mexico', 45024],
      ['Tailandia', 39797],
      ['Germany', 39563],
      ['United Kingdom', 39418],
      ['Japan', 32182],
      ['Austria', 31884],
      ['Greece', 31348],
      ['Malaysia', 26101],
      ['Portugal', 24600],
      ['Russia', 24419],
      ['China', 23752],
      ['Canada', 22145],
      ['Poland', 21155],
      ['Netherlands', 20128]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }