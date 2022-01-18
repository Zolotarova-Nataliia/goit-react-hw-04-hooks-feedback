import React, { Component } from "react";
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
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (key) => {
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback() {
    return options.reduce((total, x) => total + this.state[x.key], 0);
  }
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.ceil((this.state.good * 100) / total) : 0;
  };

  render() {
    const optionsWithValue = options.map((option) => ({
      ...option,
      value: this.state[option.key],
    }));
    return (
      <div className="App">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          options={optionsWithValue}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
