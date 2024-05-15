import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "./App.css";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setResponse({
      ...response,
      [feedbackType]: response[feedbackType] + 1,
    });
  };
  const totalFeedback = response.good + response.neutral + response.bad;

  return (
    <>
      <Description></Description>
      <Options onFeedback={updateFeedback}></Options>
      {totalFeedback > 0 ? (
        <Feedback
          good={response.good}
          neutral={response.neutral}
          bad={response.bad}
        ></Feedback>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
