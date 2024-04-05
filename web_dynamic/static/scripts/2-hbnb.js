$(document).ready(function() {
  
  $(':input').click(function() {
    amenity_dict =  $(':input[type="checkbox"]:checked');
    let checkedCheckboxes = [];
    amenity_dict.each(function() {
      checkedCheckboxes.push($(this).attr('data-name'));
    })
    let resultString = "";
    resultString = checkedCheckboxes.join(', ');
    console.log(resultString);
    $('#amenity_list').text(resultString);
  })

  $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
    if (status === 'success') {
      $('div#api_status').addClass('available');
      console.log('api is available');
    }
    else {
      $('div#api_status').removeClass('available');
      console.log('api is unavailable');
    }
  }) 
}) 
