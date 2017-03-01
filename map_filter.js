$(document).ready(function(){

  renderCategories();
  initInputs();

  
var map = L.map('map').setView([23.215757, 80.042289], 5);

L.tileLayer ('https://a.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
	id: 'dngupta.0hm7jnc4',
    accessToken: 'pk.eyJ1IjoiZG5ndXB0YSIsImEiOiI3ZTUzNDI5MmUyYTBmNDA1NjhmMjViNGI4YTBmNTAxYyJ9.qpu0vHj2vN-pyclLRaj2Uw'  } ).addTo(map);

	//Fetch some data from a GeoJSON file
	$.getJSON("testData.geojson", function(json) {
        var place = L.geoJson(json),
		.on('ready', function(layer)
            });
  this.eachLayer(function(marker) {
          
            // Bind a popup to each icon based on the same properties
            // Adds coloumns of extra info to circleMarker popup
				marker.bindPopup(marker.toGeoJSON().properties.Site + '<br><br>' +
                marker.toGeoJSON().properties.Year + '<br><br> ' +
                marker.toGeoJSON().properties.Acc + '<br><br> ' +
                marker.toGeoJSON().properties.Institute, {autoPanPadding: [5,55]});
        });
    )
            .addTo(map);
			
			
  var FJS = FilterJS("testData.geojson", '#institute', {
    template: '#institute-template',
	criteria: [{field: 'Year', ele: '#year_filter', type: 'range'}]
  });
  
  //Add criteria here
  FJS.addCriteria({field: 'Institute', ele: '#institute_criteria input:checkbox', all: 'all'});
  FJS.addCriteria({field: 'Ins_ID', ele: '#insID_criteria input:checkbox', all: 'all'});

  window.FJS = FJS;
});

function initInputs(){
  $("#year_slider").slider({
    min: 1953,
    max: 1960,
    values:[1953, 1960],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#year_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#year_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });


  $('#institute_criteria :checkbox').prop('checked', true);

  $('#all_institute').on('click', function(){
    $('#institute_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}

function renderCategories(){
  var institute = ["Survey", "Universities", "State Departments"]; 

  var html = $('#institute-template').html();
  var templateFn = FilterJS.templateBuilder(html)
  var container = $('#institute_criteria');

  $.each(institute, function(i, c){
    container.append(templateFn({ name: c, value: c }))
  });
}

};

