// functie voor data vanuit weather api van engels naar NL te vertalen
let translateWeather = "";

export default translateWeather = (weatherEnglish) => {
    if(weatherEnglish === 'Thunderstorm'){
        return 'Onweer'
    }
    if(weatherEnglish === 'Drizzle'){
        return 'Motregen'
    }
    if(weatherEnglish === 'Rain'){
        return 'Regen'
    }
    if(weatherEnglish === 'Snow'){
        return 'Sneeuw'
    }
    if(weatherEnglish === 'Mist' 
    || weatherEnglish === 'Smoke'
    || weatherEnglish === 'Haze'
    || weatherEnglish === 'Dust'
    || weatherEnglish === 'Fog'
    || weatherEnglish === 'Sand'
    || weatherEnglish === 'Ash'
    || weatherEnglish === 'Tornado'
    || weatherEnglish === 'Squall'
    ){
        return 'Mist'
    }
    if(weatherEnglish === 'Clear'){
        return 'Zonnig'
    }
    if(weatherEnglish === 'Clouds'){
        return 'Bewolkt'
    }
}