import { useEffect, useState } from "react";

import { LipstickAdd } from "./LipstickAdd";
import { lipstickService } from "../../services";
import css from '../../layout/applayout.module.css';


const Lipstick = () => {
        
            const [lipsticks, setLipsticks] = useState([]);
        
            useEffect(() => {
                lipstickService.getAll().then(({data}) => setLipsticks(data))
            }, [])
            
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
                    <div>{lipsticks.map(lipsticks => <LipstickAdd key={lipsticks} lipsticks={lipsticks}/>)}</div>
                </div>
            )
        };

export { Lipstick };