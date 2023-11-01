import { useEffect, useState } from "react";

import { eyeLinerService } from "../../services";
import { EyeBrowAdd } from "./EyeLinerAdd";
import css from './eyeliner.module.css';


const Eyeliner = () => {

    const [eyeLiners, setEyeLiners] = useState([]);

    useEffect(() => {
        try {
            eyeLinerService.getAll().then(({data}) => setEyeLiners(data))
        } catch (error) {
            setTimeout(alert('The data of eyeliner is not loaded'), 5000)
        }
    }, [])
    
    return (
        <div>
            <h1> Welcome to Eyeliner category </h1>
            <div className={css.navbar}>
            <ul>
                <li>Natural</li>
                <li>Vegan</li>
                <li>Canadian</li>
                <li>Gluten free</li>
                <li>Organic</li>
                <li>Purpicks</li>
                <li>Certclean</li>
                <li>Ewg verified</li>
                <li>Hypoallergenic</li>
                <li>No talc</li>
                <li>Ecocert</li>
            </ul>
            </div>
            <div className={css.blockCenterContent}>
                {eyeLiners.map(eyeLiner => <EyeBrowAdd key={eyeLiner.id} eyeLiner={eyeLiner}/>)}
            </div>
        </div>
    )
};

export { Eyeliner };

