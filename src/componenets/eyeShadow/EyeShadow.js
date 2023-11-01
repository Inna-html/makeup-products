import { useEffect, useState } from "react";

import { EyeShadowAdd } from "./EyeShadowAdd";
import { eyeShadowService } from "../../services";
import css from './eyeshadow.module.css';


const EyeShadow = () => {

        const [eyeShadows, setEyeShadows] = useState([]);
    
        useEffect(() => {
            try {
                eyeShadowService.getAll().then(({data}) => setEyeShadows(data))
            } catch (error) {
                setTimeout(alert('The data of eyeshadow is not loaded'), 5000)
            }
        }, [])
        
        return (
            <div>
                <h1> Welcome to Eyeshadow category </h1>
                <div className={css.navbar}>
                    <ul>
                        <li>Vegan</li>
                        <li>Canadian</li>
                        <li>Natural</li>
                        <li>Gluten free</li>
                        <li>Non-gmo</li>
                        <li>Purpicks</li>
                        <li>Certclean</li>
                        <li>Ewg verified</li>
                        <li>Organic</li>
                        <li>Usda organic</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                        <li>Ecocert</li>
                    </ul>
                </div>
                <div className={css.blockCenterContent}>
                    {eyeShadows.map(eyeShadow => <EyeShadowAdd key={eyeShadow.id} eyeShadow={eyeShadow}/>)}
                </div>
            </div>
        )
    };

export { EyeShadow };
