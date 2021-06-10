import cloudsImg from '../assets/weatherStatus/clouds.png'
import mistImg from '../assets/weatherStatus/mist.png'
import rainImg from '../assets/weatherStatus/rain.png'
import snowImg from '../assets/weatherStatus/snow.png'
import stormImg from '../assets/weatherStatus/storm.png'
import sunImg from '../assets/weatherStatus/sun.png'

let findImg = ''

const thunderstorm = [200,201,202,210,211,212,221,230,231,232];
const rain = [300,301,302,310,311,312,313,314,321,500,501,502,503,504,511,520,521,522,531];
const snow = [600,601,602,611,612,613,615,616,620,621,622];
const atmosphere = [701,711,721,731,741,751,761,762,771,781];
const clear = 800;
const clouds = [801,802,803,804];


// functie dat juiste achtergrond img toont: 
// weather API krijgt code binnen die vetreld wat voor weer het is, en toon ahv die code juiste image (zie codes bovenaan)
export default findImg = (id) => {
    if(thunderstorm.includes(id)){
        return stormImg;
    }else if(rain.includes(id)){
        return rainImg;
    }else if(snow.includes(id)){
        return snowImg;
    }else if(atmosphere.includes(id)){
        return mistImg;
    }else if(clear === id){
        return sunImg;
    }else if(clouds.includes(id)){
        return cloudsImg;
    }else{
        console.log('weather api didnt return anything')
    }
}