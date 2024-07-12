import { LipLinerAdd } from "./LipLinerAdd";
import css from './lipliner.module.css';


const LipLiner = ({lipliners}) => {
    

        return (
            <div>
                <div className={css.blockCenterContent}>
                    {lipliners.map(lipliner => <LipLinerAdd key={lipliner.id} lipliner={lipliner}/>)}
                </div>
            </div>
        )
    };

export { LipLiner };
