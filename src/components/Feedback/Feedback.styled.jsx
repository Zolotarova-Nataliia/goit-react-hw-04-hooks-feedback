import styled from "styled-components";

export const SectionStyled = styled.section`
  text-align: center;
  padding: 10px 0;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #654321;
`;
export const Button = styled.button`
  width: 90px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  background-color: #8b6245;
  color: #d9b597;
  margin-right: 15px;
  color: #8b6245;
  background-color: #d9b597;
  cursor: pointer;
  transition: transform 500ms ease, background-color 500ms, color 500ms;
  &:hover {
    background-color: #8b6245;
    color: #d9b597;
    transform: scale(1.1);
  }
`;
export const ButtonWrap = styled.div`
  margin-right: -15px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  color: #8b6245;
  transition: color 500ms;
`;
export const Icon = styled.span`
  margin-right: 5px;
`;
export const NotificationStyled = styled.p`
  color: #8b6245;
`;
