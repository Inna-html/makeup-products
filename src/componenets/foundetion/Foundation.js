import { useEffect, useState } from "react";

import { foundationService } from "../../services";
import { FoundationAdd } from "./FoundationAdd";
import css from '../../layout/applayout.module.css';


const Foundation = () => {

        const [foundations, setFoundations] = useState([]);
    
        useEffect(() => {
            foundationService.getAll().then(({data}) => setFoundations(data))
        }, [])
        
        return (
            <div>
                <h1> Welcome to Foundation category </h1>
                <div className={css.navbar}>
                    <ul>
                        <li>Vegan</li>
                        <li>Canadian</li>
                        <li>Natural</li>
                        <li>Gluten free</li>
                        <li>Purpicks</li>
                        <li>Certclean</li>
                        <li>Ewg verified</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                        <li>Water free</li>
                        <li>Cruelty free</li>
                        <li>Alcohol free</li>
                        <li>Oil free</li>
                        <li>Silicone free</li>
                    </ul>
                </div>
                <div className={css.blockCenterContent}>{foundations.map(foundations => <FoundationAdd key={foundations} foundations={foundations}/>)}</div>
            </div>
        )
    };

export { Foundation };


