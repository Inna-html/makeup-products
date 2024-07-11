import { LipstickAdd } from "./LipstickAdd";
import css from "./lipstick.module.css";

const Lipstick = ({lipsticks}) => {
  return (
    <div>
      <div className={css.blockCenterContent}>
        {lipsticks.map((lipstick) => ( <LipstickAdd key={lipstick.id} lipstick={lipstick} />
        ))}
      </div>
    </div>
  );
};

export { Lipstick };
