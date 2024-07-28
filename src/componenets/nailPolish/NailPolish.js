import { NailPolishAdd } from "./nailPolishAdd";
import css from "./nailpolish.module.css";

const NailPolish = ({ nailPolishs }) => {
    return (
      
    <div className={css.blockCenterContent}>
      {nailPolishs.map((nailPolish) => (
        <NailPolishAdd key={nailPolish.id} nailPolish={nailPolish} />
      ))}
    </div>
        
  );
};

export { NailPolish };
