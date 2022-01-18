import React from "react";
import PropTypes from "prop-types";
import { NotificationStyled } from "./Feedback.styled";

const Notification = ({ message }) => (
  <NotificationStyled>{message}</NotificationStyled>
);

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
