$(document).ready(function(){

  renderInstitute();
  initInputs();


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

function renderInstitute(){
  var institute = ["Survey", "Universities", "State Departments"]; 

  var html = $('#institute-template').html();
  var templateFn = FilterJS.templateBuilder(html)
  var container = $('#institute_criteria');

  $.each(institute, function(i, c){
    container.append(templateFn({ name: c, value: c }))
  });
}

};

