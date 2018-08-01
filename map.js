
      function initMap() {
        // Styles a map in night mode.
        var tbilisi = {lat: 41.72351219364527, lng: 44.77367947474045};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.721699, lng: 44.773360},
          zoom: 12,
          styles: [
    {
        "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2D333C"
            }
        ]
    }
]
        });
         var marker = new google.maps.Marker({
          position: tbilisi,
          map: map ,
        });
      }