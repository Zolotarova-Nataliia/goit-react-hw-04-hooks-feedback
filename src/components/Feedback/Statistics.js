import PropTypes from "prop-types";
import Section from "./Section";
import Notification from "./Notification";
import { List, ListItem, Icon } from "./Feedback.styled";

const Statistics = ({ options, total, positiveFeedback }) => {
  return (
    <Section title="Statistic">
      {total !== 0 ? (
        <List>
          {options.map((option) => (
            <ListItem key={option.key}>
              <Icon>{option.icon}</Icon>
              {option.label}: <span>{option.value}</span>
            </ListItem>
          ))}
          <ListItem>
            Total:
            <span>{total}</span>
          </ListItem>
          <ListItem>
            Positive feedback:
            <span>{positiveFeedback}%</span>
          </ListItem>
        </List>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
