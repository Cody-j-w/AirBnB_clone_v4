$(document).ready(function() {
  
  $(':input').click(function() {
    amenity_dict =  $(':input[type="checkbox"]:checked');
    let checkedCheckboxes = [];
    amenity_dict.each(function() {
      checkedCheckboxes.push($(this).attr('data-name'));
    })
    let resultString = "";
    resultString = " ".concat(...checkedCheckboxes);
    // for (string in Object.values(checkedCheckboxes)) {
    //   console.log(typeof string === "string")
    //   console.log(string);
    //   resultString = [resultString, string].join(' ');
    // }
    console.log(resultString);
    
  })
  

}) 
