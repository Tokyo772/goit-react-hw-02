import style from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, total, percent }) => {
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
      <li className={style.percent}>Positive: {percent}%</li>
    </ul>
  );
};

export default Feedback;
