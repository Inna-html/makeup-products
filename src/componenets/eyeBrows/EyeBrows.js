import { useEffect, useState } from "react";

import { eyeBrowService } from "../../services";
import { EyeBrowAdd } from "./EyeBrowsAdd";
import css from './eyeBrows.module.css';


const EyeBrows = () => {

    const [eyeBrows, setEyeBrows] = useState([]);

    useEffect(() => {
        try {
            eyeBrowService.getAll().then(({data}) => setEyeBrows(data))
        } catch (error) {
            setTimeout(alert('The data of eyebrows is not loaded'), 5000)
        }
    }, [])
    
    return (
        <div>
            <h1> Welcome to Eyebrows category </h1>
            <div className={css.navbar}>
            <ul>
                <li>Ewg verified</li>
                <li>Purpicks</li>
            </ul>
            </div>
            <div className={css.blockCenterContent}>
                {eyeBrows.map(eyeBrow => <EyeBrowAdd key={eyeBrow.id} eyeBrow={eyeBrow}/>)}
            </div>
        </div>
    )
};


export { EyeBrows };
