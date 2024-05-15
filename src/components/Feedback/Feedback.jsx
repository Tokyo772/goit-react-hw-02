const Feedback = ({ good, neutral, bad }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total:</li>
      <li>Positive:</li>
    </ul>
  );
};

export default Feedback;
