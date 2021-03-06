var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 48.856614, lng: 2.352222},
		zoom: 14,
		mapTypeId: 'hybrid',
		scrollwheel: false,
		disableDefaultUI: true,
		styles: [
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.rail",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
	});
	
//	Marker icons
	var image = 'img/marker.png';
	var imageHover = 'img/marker-hover.png';
	
//	Marker creations
    var markerOne = new google.maps.Marker({
    	position: {lat: 48.8626821, lng: 2.372197},
    	animation: google.maps.Animation.DROP,
    	zIndex:99999999,
    	map: map,
    	icon: image
    });
    var markerTwo = new google.maps.Marker({
    	position: {lat: 48.857205, lng: 2.334774},
    	animation: google.maps.Animation.DROP,
    	zIndex:99999999,
    	map: map,
    	icon: image
    });
    var markerThree = new google.maps.Marker({
    	position: {lat: 48.849016, lng: 2.352026},
    	animation: google.maps.Animation.DROP,
    	zIndex:99999999,
    	map: map,
    	icon: image
    });
    
//  Marker click to open infobox
    markerOne.addListener('click', function() {
	  $('.invisible-overlay').show();
	  $('.infobox1').show();
	  $('.infobox2').hide();
	  $('.infobox3').hide();
	});
	markerTwo.addListener('click', function() {
	  $('.invisible-overlay').show();
	  $('.infobox2').show();
	  $('.infobox1').hide();
	  $('.infobox3').hide();
	});
	markerThree.addListener('click', function() {
	  $('.invisible-overlay').show();
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

  Overlay = new google.maps.GroundOverlay(
    "img/map-overlay.png"
  );
  Overlay.setMap(map);
  Overlay.setOpacity(1);
  var legend = document.getElementById("legendimg");
  legend.style.opacity = 1;
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