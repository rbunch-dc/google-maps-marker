function initialize() {

	var queryString='userMapLocation';
	var lat;
	var lon;

	var hashes = window.location.href.slice(window.location.href.indexOf(queryString) + queryString.length + 1);
	var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+hashes;

	$.getJSON(url, function(data){
		lat = data.results[0].geometry.location.lat;
		lon = data.results[0].geometry.location.lon;
	})

	if(lat !== ""){
		var latlng = new google.maps.LatLng(lat, lon);		
	}else{
    	var latlng = new google.maps.LatLng(33.7550, -84.3900);
	}

    var myOptions = {
        zoom: 8,
        center: latlng,
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
            myOptions);
}

$(document).ready(function(){
	google.maps.event.addDomListener(window, 'load', initialize);	
});
