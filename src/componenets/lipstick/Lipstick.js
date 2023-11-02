import { useEffect, useState } from "react";

import { LipstickAdd } from "./LipstickAdd";
import { lipstickService } from "../../services";
import css from './lipstick.module.css';
import { HasError } from "../HasError/HasError";


const Lipstick = () => {
        
    const [lipsticks, setLipsticks] = useState([]);
    const [hasError, setHasError] = useState(false);
        
        useEffect(() => {
            try {
                lipstickService.getAll().then(({data}) => setLipsticks(data))
            } catch (error) {
                setTimeout((setHasError(true)), 5000);
            }
        }, [])
    
        if (hasError) return <HasError />
            
            return (
                <div>
                    <h1> Welcome to Lipstick category </h1>
                    <div className={css.navbar}>
                    <ul>
                        <li>Canadian</li>
                        <li>Natural</li>
                        <li>Gluten free</li>
                        <li>Non-gmo</li>
                        <li>Peanut free product</li>
                        <li>Vegan</li>
                        <li>Cruelty free</li>
                        <li>Organic</li>
                        <li>Purpicks</li>
                        <li>Certclean</li>
                        <li>Chemical free</li>
                        <li>Ewg verified</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                    </ul>
                </div>
                    <div className={css.blockCenterContent}>
                        {lipsticks.map(lipstick => <LipstickAdd key={lipstick.id} lipstick={lipstick}/>)}
                    </div>
                </div>
            )
        };

export { Lipstick };