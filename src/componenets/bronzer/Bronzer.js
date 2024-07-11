import { BronzerAdd } from "./BronzerAdd";
import css from './bronzer.module.css';


const Bronzer = ({bronzers}) => {


    return (
        <div>
            <div className={css.blockCenterContent}>
                {bronzers.map(bronzer => <BronzerAdd key={bronzer.id} bronzer={bronzer}/>)}
            </div>
        </div>
    )
};


export { Bronzer };

