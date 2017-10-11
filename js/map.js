var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 48.856614, lng: 2.352222},
		zoom: 14,
		mapTypeId: 'hybrid',
		scrollwheel: false,
		styles: []
	});
	
//	Marker icons
	var image = 'img/marker.png';
	var imageHover = 'img/marker-hover.png';
	
//	Marker creations
    var markerOne = new google.maps.Marker({
    	position: {lat: 48.8626821, lng: 2.372197},
    	animation: google.maps.Animation.DROP,
    	map: map,
    	icon: image
    });
    var markerTwo = new google.maps.Marker({
    	position: {lat: 48.857205, lng: 2.334774},
    	animation: google.maps.Animation.DROP,
    	map: map,
    	icon: image
    });
    var markerThree = new google.maps.Marker({
    	position: {lat: 48.849016, lng: 2.352026},
    	animation: google.maps.Animation.DROP,
    	map: map,
    	icon: image
    });
    
//  Marker click to open infobox
    markerOne.addListener('click', function() {
	  $('.infobox1').show();
	  $('.infobox2').hide();
	  $('.infobox3').hide();
	});
	markerTwo.addListener('click', function() {
	  $('.infobox2').show();
	  $('.infobox1').hide();
	  $('.infobox3').hide();
	});
	markerThree.addListener('click', function() {
	  $('.infobox3').show();
	  $('.infobox1').hide();
	  $('.infobox2').hide();
	});
    
//  Marker Hovers
	google.maps.event.addListener(markerOne, 'mouseover', function() {
	    markerOne.setIcon(imageHover);
	});
	google.maps.event.addListener(markerOne, 'mouseout', function() {
	    markerOne.setIcon(image);
	});
	google.maps.event.addListener(markerTwo, 'mouseover', function() {
	    markerTwo.setIcon(imageHover);
	});
	google.maps.event.addListener(markerTwo, 'mouseout', function() {
	    markerTwo.setIcon(image);
	});
	google.maps.event.addListener(markerThree, 'mouseover', function() {
	    markerThree.setIcon(imageHover);
	});
	google.maps.event.addListener(markerThree, 'mouseout', function() {
	    markerThree.setIcon(image);
	});
}

// Marker Animation
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// Click to close infobox
$(".close-icon a").click(function() {
		$('.infobox').hide();	 
});