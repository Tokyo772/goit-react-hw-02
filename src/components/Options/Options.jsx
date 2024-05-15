const Options = ({ onFeedback, totalFeedback, resetFeedback }) => {
  return (
    <ul>
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
        {totalFeedback !== 0 && <button onClick={resetFeedback}>Reset</button>}
      </li>
    </ul>
  );
};

export default Options;
