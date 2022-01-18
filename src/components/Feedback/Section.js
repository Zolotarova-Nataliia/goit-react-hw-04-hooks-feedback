import React from "react";
import PropTypes from "prop-types";
import { SectionStyled, Title } from "./Feedback.styled";
import { GiCoffeeBeans } from "react-icons/gi";

const Section = ({ title, children }) => (
  <SectionStyled>
    <Title>
      <GiCoffeeBeans />
      {title}
      <GiCoffeeBeans />
    </Title>

    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
