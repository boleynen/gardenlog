import Geocode from "react-geocode";

let GeocodeFromLatLon = '';

Geocode.setApiKey("AIzaSyCulUiAQPwTtcagVE-fTb8OUXEHuNhGpFA");
Geocode.setLanguage("nl");
Geocode.setRegion("nl");

export default GeocodeFromLatLon = (lat, lon) =>{
  Geocode.fromLatLng(lat, lon).then(
      (response) => {
        let city, country;
        for (let i = 0; i < response.results[0].address_components.length; i++) {
          for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        
        let adress = city + ', ' + country
        return(adress)
      },
      (error) => {
        console.error(error);
      }
  );
}