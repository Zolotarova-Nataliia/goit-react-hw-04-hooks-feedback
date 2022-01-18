import React from "react";
import Section from "./Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    {options.map((option) => (
      <button
        type="button"
        key={option.key}
        onClick={() => onLeaveFeedback(option.key)}
      >
        {option.label}
      </button>
    ))}
  </Section>
);

export default FeedbackOptions;
