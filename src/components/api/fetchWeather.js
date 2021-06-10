let lat = 51.24;
let lon = 5.11; 

let fetchWeather = "";

const apiKey = 'e0ec51e490d0691a2a24c61b2da3cf65';
const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=nl&appid=${apiKey}`;

export default fetchWeather = async (query) => {
    let res = await fetch(apiUrl)

    if(!res.ok){
        const alert = `An error occured: ${res.status}`
        throw new Error(alert)
    }

    const apiData = await res.json()

    console.log(apiData)

    return apiData
}
