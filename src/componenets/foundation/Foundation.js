import { FoundationAdd } from "./FoundationAdd";
import css from './foundation.module.css';


const Foundation = ({foundations}) => {

        return (
            <div>
                <div className={css.blockCenterContent}>
                    {foundations.map(foundation => <FoundationAdd key={foundation.id} foundation={foundation}/>)}
                </div>
            </div>
        )
    };

export { Foundation };

