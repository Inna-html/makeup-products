import { NailPolishAdd } from "./nailPolishAdd";
import css from './nailpolish.module.css';


const NailPolish = ({nailPolishs}) => {


        return (
            <div>
                    <div className={css.blockCenterContent}>
                        {nailPolishs.map(nailPolish => <NailPolishAdd key={nailPolish.id} nailPolish={nailPolish}/>)}
                    </div>
            </div>
    )
};
        
export { NailPolish };
