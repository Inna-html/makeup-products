import { EyeBrowAdd } from "./EyeBrowsAdd";
import css from './eyeBrows.module.css';


const EyeBrows = ({eyeBrows}) => {

    
    return (
        <div>
            <div className={css.blockCenterContent}>
                {eyeBrows.map(eyeBrow => <EyeBrowAdd key={eyeBrow.id} eyeBrow={eyeBrow}/>)}
            </div>
        </div>
    )
};


export { EyeBrows };

