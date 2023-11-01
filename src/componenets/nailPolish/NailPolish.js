import { useEffect, useState } from "react";

import { nailPolishService } from "../../services";
import { NailPolishAdd } from "./nailPolishAdd";
import css from './nailpolish.module.css';


const NailPolish = () => {

    const [nailPolishs, setNailPolishs] = useState([]);
                
        useEffect(() => {
            try {
                nailPolishService.getAll().then(({data}) => setNailPolishs(data))
            } catch (error) {
                setTimeout(alert('The data of nail polish is not loaded'), 5000)
            }
        }, [])
                    
        return (
            <div>
                <h1> Welcome to Nail polish category </h1>
                    <div className={css.navbar}>
                        <ul>
                            <li>Vegan</li>
                            <li>Canadian</li>
                            <li>Natural</li>
                            <li>Gluten free</li>
                            <li>Fair trade</li>
                            <li>Sugar free</li>
                            <li>Non-gmo</li>
                            <li>Dairy free</li>
                        </ul>
                    </div>
                    <div className={css.blockCenterContent}>
                        {nailPolishs.map(nailPolish => <NailPolishAdd key={nailPolish.id} nailPolish={nailPolish}/>)}
                    </div>
            </div>
    )
};
        
export { NailPolish };
