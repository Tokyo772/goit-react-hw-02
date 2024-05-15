const Feedback = ({ good, neutral, bad, total }) => {
  const positiveFeedback =
    total === 0 ? 100 : 100 - Math.round((bad / total) * 100);
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
