import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import Notification from "./Notification";
class Statistics extends Component {
  render() {
    const { options, total, positiveFeedback } = this.props;

    return (
      <Section title="Statistic">
        {total !== 0 ? (
          <ul>
            {options.map((option) => (
              <li key={option.key}>
                {option.label}: <span>{option.value}</span>
              </li>
            ))}
            <li>
              Total:
              <span>{total}</span>
            </li>
            <li>
              Positive feedback:
              <span>{positiveFeedback}%</span>
            </li>
          </ul>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
