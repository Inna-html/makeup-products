import { EyeShadowAdd } from "./EyeShadowAdd";
import css from './eyeshadow.module.css';


const EyeShadow = ({eyeShadows}) => {

        return (
            <div>
                <div className={css.blockCenterContent}>
                    {eyeShadows.map(eyeShadow => <EyeShadowAdd key={eyeShadow.id} eyeShadow={eyeShadow}/>)}
                </div>
            </div>
        )
    };

export { EyeShadow };
