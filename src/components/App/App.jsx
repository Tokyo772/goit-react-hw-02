import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import style from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [response, setResponse] = useState(() => {
    const savedResponse = window.localStorage.getItem("user-response");
    if (savedResponse !== null) {
      return JSON.parse(savedResponse);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setResponse({
      ...response,
      [feedbackType]: response[feedbackType] + 1,
    });
  };
  const totalFeedback = response.good + response.neutral + response.bad;

  const resetFeedback = () => {
    setResponse({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("user-response", JSON.stringify(response));
  }, [response]);
  return (
    <div className={style.container}>
      <Description></Description>
      <Options
        onFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          good={response.good}
          neutral={response.neutral}
          bad={response.bad}
          total={totalFeedback}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
