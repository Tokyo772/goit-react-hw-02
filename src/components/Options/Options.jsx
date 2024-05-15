const Options = ({ onFeedback }) => {
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
        <button>Reset</button>
      </li>
    </ul>
  );
};

export default Options;
