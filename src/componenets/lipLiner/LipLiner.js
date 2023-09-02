import { useEffect, useState } from "react";

import { lipLinerService } from "../../services";
import { LipLinerAdd } from "./LipLinerAdd";
import css from '../../layout/applayout.module.css';


const LipLiner = () => {
    
        const [lipLiners, setLipLiners] = useState([]);
    
        useEffect(() => {
            lipLinerService.getAll().then(({data}) => setLipLiners(data))
        }, [])
        
        return (
            <div>
                <h1> Welcome to Lipliner category </h1>
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
                <div>{lipLiners.map(lipLiners => <LipLinerAdd key={lipLiners} lipLiners={lipLiners}/>)}</div>
            </div>
        )
    };

export { LipLiner };
