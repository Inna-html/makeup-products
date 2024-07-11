import { MascaraAdd } from "./MascaraAdd";
import css from './mascara.module.css';


const Mascara = ({mascaras}) => {

            return (
                <div>
                    <div className={css.blockCenterContent}>
                        {mascaras.map(mascara => <MascaraAdd key={mascara.id} mascara={mascara}/>)}
                    </div>
                </div>
            )
        };
    
export { Mascara };

