var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "country": "Destoryed and Damaged Hospitals",
    "litres": 89
  }, {
    "country": "Undamaged",
    "litres": 11
 }],
  "valueField": "litres",
  "titleField": "country",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );