import { useEffect, useState } from "react";

import { MascaraAdd } from "./MascaraAdd";
import { mascaraService } from "../../services";
import css from './mascara.module.css';


const Mascara = () => {

            const [mascaras, setMascaras] = useState([]);
            
            useEffect(() => {
                mascaraService.getAll().then(({data}) => setMascaras(data))
            }, [])
                
            return (
                <div>
                    <h1> Welcome to Mascara category </h1>
                    <div className={css.navbar}>
                    <ul>
                        <li>Natural</li>
                        <li>Gluten free</li>
                        <li>Vegan</li>
                        <li>Canadian</li>
                        <li>Organic</li>
                        <li>Purpicks</li>
                        <li>Ewg verified</li>
                        <li>Hypoallergenic</li>
                        <li>No talc</li>
                        <li>Ecocert</li>
                        <li>Usda organic</li>
                        <li>Certclean</li>
                    </ul>
                </div>
                    <div className={css.blockCenterContent}>{mascaras.map(mascaras => <MascaraAdd key={mascaras} mascaras={mascaras}/>)}</div>
                </div>
            )
        };
    
export { Mascara };

