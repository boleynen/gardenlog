import React, {useState, useEffect} from 'react';
import './PlantDetailsStats.scss'

function PlantDetailsStats(props){

    const [title, setTitle] = useState(props.statsTitle)

    useEffect(() => {
        if(props.statsTitle === 'harvest'){
            setTitle('Klaar voor de oogst');
        }else if(props.statsTitle === 'plant'){
            setTitle('Beste tijd om te planten');
        }else if(props.statsTitle === 'sun'){
            setTitle('Zon tolerantie');
        }else if(props.statsTitle === 'water'){
            setTitle('Water vereisten');
        }
    }, [])


    return(
        <div className='plantDetailsStats'>
            <p>{title}</p>
            <h2>{props.statsValue}</h2>
        </div>
    )
}

export default PlantDetailsStats;