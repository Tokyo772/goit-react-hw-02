import style from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback, resetFeedback }) => {
  return (
    <ul className={style.options}>
      <li>
        <button onClick={() => onFeedback("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onFeedback("bad")}>Bad</button>
      </li>
      <li>
        {totalFeedback !== 0 && (
          <button onClick={resetFeedback} className={style.reset}>
            Reset
          </button>
        )}
      </li>
    </ul>
  );
};

export default Options;
