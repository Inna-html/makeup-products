import { BlushAdd } from "./BlashAdd";
import css from './blush.module.css';


const Blush = ({ blushs }) => {
    
    return (
        <div>
        
            <div className={css.blockCenterContent}>
                {blushs.map(blush => <BlushAdd key={blush.id} blush={blush}/>)}
            </div> 

        </div> 
    ) 
};

export { Blush };

