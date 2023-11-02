import { useEffect, useState } from "react";

import { lipLinerService } from "../../services";
import { LipLinerAdd } from "./LipLinerAdd";
import css from './lipliner.module.css';
import { HasError } from "../HasError/HasError";

const LipLiner = () => {
    
    const [lipliners, setLipliners] = useState([]);
    const [hasError, setHasError] = useState(false);

        useEffect(() => {
            try {
                lipLinerService.getAll().then(({data}) => setLipliners(data))
            } catch (error) {
                setTimeout((setHasError(true)), 5000);
            }
        }, [])
    
        if (hasError) return <HasError />
        
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
                <div className={css.blockCenterContent}>
                    {lipliners.map(lipliner => <LipLinerAdd key={lipliner.id} lipliner={lipliner}/>)}
                </div>
            </div>
        )
    };

export { LipLiner };
