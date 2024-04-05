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

    setInterval(function () {
    $.get('http://0.0.0.0:5001/api/v1/status/') 
    .done(function(data){
        $('div#api_status').addClass('available');
        console.log('api is available');
      })
    .fail(function(xhr, status, error) {
      $('div#api_status').removeClass('available');
      console.log('api is unavailable');
    })
  }, 30000) 

}) 
