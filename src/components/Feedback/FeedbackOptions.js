import React from "react";
import Section from "./Section";
import { Button, ButtonWrap } from "./Feedback.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <ButtonWrap>
      {options.map((option, i) => (
        <Button
          type="button"
          key={option.key}
          onClick={() => onLeaveFeedback(option.key)}
        >
          {option.label}
        </Button>
      ))}
    </ButtonWrap>
  </Section>
);

export default FeedbackOptions;
