import Geocode from "react-geocode";

let GeocodeFromAdress = '';

Geocode.setApiKey("AIzaSyCulUiAQPwTtcagVE-fTb8OUXEHuNhGpFA");
Geocode.setLanguage("nl");
Geocode.setRegion("nl");

export default GeocodeFromAdress = (adress) =>{
  Geocode.fromLatLng(adress).then(
    (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        let latLng = [lat, lng]
        return latLng
      },
      (error) => {
        console.error(error);
      }
  );
}