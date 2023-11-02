import { useEffect, useState } from "react";

import { eyeBrowService } from "../../services";
import { EyeBrowAdd } from "./EyeBrowsAdd";
import css from './eyeBrows.module.css';
import { HasError } from "../HasError/HasError";

const EyeBrows = () => {

    const [eyeBrows, setEyeBrows] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            eyeBrowService.getAll().then(({data}) => setEyeBrows(data))
        } catch (error) {
            setTimeout((setHasError(true)), 5000);
        }
    }, [])

    if (hasError) return <HasError />
    
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
