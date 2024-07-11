import { EyeBrowAdd } from "./EyeLinerAdd";
import css from './eyeliner.module.css';


const Eyeliner = ({eyeLiners}) => {


    return (
        <div>
            <div className={css.blockCenterContent}>
                {eyeLiners.map(eyeLiner => <EyeBrowAdd key={eyeLiner.id} eyeLiner={eyeLiner}/>)}
            </div>
        </div>
    )
};

export { Eyeliner };
