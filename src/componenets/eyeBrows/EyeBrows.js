import { useEffect, useState } from "react";

import { eyeBrowService } from "../../services";
import { EyeBrowAdd } from "./EyeBrowsAdd";
import css from '../../layout/applayout.module.css'


const EyeBrows = () => {

    const [eyeBrows, setEyeBrows] = useState([]);

    useEffect(() => {
        eyeBrowService.getAll().then(({data}) => setEyeBrows(data))
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
            <div className={css.blockCenterContent}>{eyeBrows.map(eyeBrows => <EyeBrowAdd key={eyeBrows} eyeBrows={eyeBrows}/>)}</div>
        </div>
    )
};


export { EyeBrows };
