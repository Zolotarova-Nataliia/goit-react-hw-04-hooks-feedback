import React, { useEffect, useState } from "react";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import { IoIosHeart, IoIosHeartHalf, IoIosHeartDislike } from "react-icons/io";
import "./App.css";
const options = [
  {
    label: "Good",
    key: "good",
    icon: <IoIosHeart />,
  },
  { label: "Neutral", key: "neutral", icon: <IoIosHeartHalf /> },
  { label: "Bad", key: "bad", icon: <IoIosHeartDislike /> },
];
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);

  const onLeaveFeedback = (key) => {
    switch (key) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        alert("There is no feedback");
    }
  };

  useEffect(() => {
    setTotalFeedback(good + bad + neutral);
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    const total = totalFeedback;
    return total > 0 ? Math.ceil((good * 100) / total) : 0;
  };
  const optionsWithValue = options.map((option) => ({
    ...option,
    value: option.key === "good" ? good : option.key === "bad" ? bad : neutral,
  }));
  return (
    <div className="App">
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        options={optionsWithValue}
        total={totalFeedback}
        positiveFeedback={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}
