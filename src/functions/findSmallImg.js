
import cloudsImgSm from '../assets/weatherStatus/small/sm-clouds.png'
import mistImgSm from '../assets/weatherStatus/small/sm-mist.png'
import rainImgSm from '../assets/weatherStatus/small/sm-rain.png'
import snowImgSm from '../assets/weatherStatus/small/sm-snow.png'
import stormImgSm from '../assets/weatherStatus/small/sm-storm.png'
import sunImgSm from '../assets/weatherStatus/small/sm-sun.png'

let findSmallImg = '';

const thunderstorm = [200,201,202,210,211,212,221,230,231,232];
const rain = [300,301,302,310,311,312,313,314,321,500,501,502,503,504,511,520,521,522,531];
const snow = [600,601,602,611,612,613,615,616,620,621,622];
const atmosphere = [701,711,721,731,741,751,761,762,771,781];
const clear = 800;
const clouds = [801,802,803,804];

// functie dat juiste icon img toont: 
export default findSmallImg = (id) => {
    if(thunderstorm.includes(id)){
        return stormImgSm;
    }else if(rain.includes(id)){
        return rainImgSm;
    }else if(snow.includes(id)){
        return snowImgSm;
    }else if(atmosphere.includes(id)){
        return mistImgSm;
    }else if(clear === id){
        return sunImgSm;
    }else if(clouds.includes(id)){
        return cloudsImgSm;
    }else{
        console.log('weather api didnt return anything')
    }
}