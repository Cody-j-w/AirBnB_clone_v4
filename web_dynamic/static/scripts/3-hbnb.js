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
        //generate non-attribute strings from data
        if (place.max_guest != 1) {
          var guests = 'guests';
        } else {
          var guests = 'guest';
        }
        if (place.number_bathrooms != 1) {
          var baths = 'baths';
        } else {
          var baths = 'bath';
        }
        if (place.number_rooms != 1) {
          var rooms = 'rooms';
        } else {
          var rooms = 'room';
        }

        let $newArticle = document.createElement("article");
        //creating title_box and place name
        let $title_box = document.createElement("div");
        $title_box.classList.add("title_box");
        let $placeName = document.createElement("h2");
        $placeName.append(place.name);
        $title_box.append($placeName);
        //creating price_by_night
        let $price = document.createElement("h2");
        $price.classList.add("price_by_night");
        $price.append(`\$${place.price_by_night}`);
        $title_box.append($price);
        // appending place name and title_box to newArticle
        $newArticle.append($title_box);

        // creating information div
        let $information = document.createElement("div");
        $information.classList.add("information");

        // creating max_guest div 
        let $max_guest = document.createElement("div");
        $max_guest.classList.add("max_guest");
        $max_guest.append(`${place.max_guest} ${guests}`);
        

        // creating number_rooms and number_bathrooms
        let $number_rooms = document.createElement("div");
        $number_rooms.classList.add("number_rooms");
        $number_rooms.append(`${place.number_rooms} ${rooms}`);

        let $number_bathrooms = document.createElement("div");
        $number_bathrooms.classList.add("number_bathrooms");
        $number_bathrooms.append(`${place.number_bathrooms} ${baths}`);

        // appending the max_guest div to information
        $information.append($max_guest);

        // appending number_rooms and number_bathrooms to max_guest
        $max_guest.after($number_rooms);
        $number_rooms.after($number_bathrooms);

        //appending information to newArticle
        $newArticle.append($information);

        // creating user div
        // let user = document.createElement("div");
        // user.classList.add("user");
        // user.append(place.user.first_name);
        // user.append(place.user.last_name);

        //appending user div to newARticle
        // $newArticle.append($user);


        //creating description div
        let $description = document.createElement("div");
        $description.classList.add("description");
        $description.innerHTML = place.description;

        // appending description div to new Article
        $newArticle.append($description)

        // appending the completed newArticle to the end of the places section
        $('.places').append($newArticle);
      }
    }
  })
})
