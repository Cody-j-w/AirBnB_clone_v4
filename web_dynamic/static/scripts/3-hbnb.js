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

  $.ajax({
    type: 'POST',
    url: "http://0.0.0.0:5001/api/v1/places_search",
    data: JSON.stringify({}),
    contentType: "application/json",
    success: function(response) {
      let allPlaces = [];
      for (object in response) {
        allPlaces.push(response[object])
      }
      for (key in allPlaces) {
        let place = allPlaces[key]

        let $newArticle = document.createElement("article");

        //creating title_box and place name
        let $title_box = $("div", {class: 'title_box'});
        let $placeName = document.createElement("div");
        $placeName.append(place.name);

        //creating price_by_night
        let $price = $("div", {class: 'price_by_night'});
        $price.append(place.price_by_night);
        $placeName.append($price);

        // appending place name and title_box to newArticle
        $newArticle.append($placeName, $title_box);
        $('.places'$(document).ready(function() {
  
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
        
          $.ajax({
            type: 'POST',
            url: "http://0.0.0.0:5001/api/v1/places_search",
            data: JSON.stringify({}),
            contentType: "application/json",
            success: function(response) {
              let allPlaces = [];
              for (object in response) {
                allPlaces.push(response[object])
              }
              for (key in allPlaces) {
                let place = allPlaces[key]
        
                let $newArticle = document.createElement("article");
        
                //creating title_box and place name
                let $title_box = $("div", {class: 'title_box'});
                let $placeName = document.createElement("div");
                $placeName.append(place.name);
        
                //creating price_by_night
                let $price = $("div", {class: 'price_by_night'});
                $price.append(place.price_by_night);
                $placeName.append($price);
        
                // appending place name and title_box to newArticle
                $newArticle.append($placeName, $title_box);
                $('.places').append($newArticle);
              
        
              }
            }
          })
        }) 
        ).append($newArticle);
      

      }
    }
  })
}) 
