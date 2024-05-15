import style from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total }) => {
  const positiveFeedback =
    total === 0 ? 100 : 100 - Math.round((bad / total) * 100);
  return (
    <ul className={style.summary}>
      <li className={style.item}>
        Good: <span className={style.value}>{good}</span>
      </li>
      <li className={style.item}>
        Neutral: <span className={style.value}>{neutral}</span>
      </li>
      <li className={style.item}>
        Bad: <span className={style.value}>{bad}</span>
      </li>
      <li className={style.total}>Total: {total}</li>
      <li className={style.percent}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
