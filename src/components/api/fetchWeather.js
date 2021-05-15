// import React from 'react'

// const apiKey = e0ec51e490d0691a2a24c61b2da3cf65;
// const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=nl&appid=${apiKey}`;

// export default function fetchWeather(){
//     const [apiData, setApiData] = useState(null);

//     useEffect(() => {
//         async function fetchMyApi(){
//             const res = await fetch(apiUrl)
//             if(!res.ok){
//                 const alert = `An error occured: ${res.status}`
//                 throw new Error(alert)
//             }
//             const apiData = await res.json()
//             // setApiData(weather)
//             console.log(apiData)
//             setApiData(apiData)
//         }
//         fetchMyApi()
//     }, [apiUrl]);

//     return apiData;
// }
