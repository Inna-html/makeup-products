import { useEffect, useState } from "react";

import { lipLinerService } from "../../services";
import { LipLinerAdd } from "./LipLinerAdd";
import css from '../../layout/applayout.module.css';


const LipLiner = () => {
    
        const [lipliners, setLipliners] = useState([]);
    
        useEffect(() => {
            lipLinerService.getAll().then(({data}) => setLipliners(data))
        }, [])
        
        return (
            <div>
                <h1> Welcome to Lip liner category </h1>
                <div className={css.navbar}>
                    <ul>
                        <li>Natural</li>
                        <li>Vegan</li>
                        <li>Gluten free</li>
                        <li>Canadian</li>
                        <li>Purpicks</li>
                        <li>Ewg verified</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                        <li>Cruelty free</li>
                    </ul>
                </div>
                <div className={css.blockCenterContent}>{lipliners.map(lipliner => <LipLinerAdd key={lipliner} lipliner={lipliner}/>)}</div>
            </div>
        )
    };

export { LipLiner };
