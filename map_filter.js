$(document).ready(function(){

  renderCategories();
  initInputs();


function initInputs(){
  $("#rating_slider").slider({
    min: 1953,
    max: 1960,
    values:[1953-1960],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });


  $('#categories_criteria :checkbox').prop('checked', true);

  $('#all_categories').on('click', function(){
    $('#categories_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
};


function renderCategories(){
  var categories = ["Survey", "University", "State Department"]; 

  var html = $('#category-template').html();
  var templateFn = FilterJS.templateBuilder(html)
  var container = $('#categories_criteria');

  $.each(categories, function(i, c){
    container.append(templateFn({ name: c, value: c }))
  });
};
});

