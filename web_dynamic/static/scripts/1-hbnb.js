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
}) 
