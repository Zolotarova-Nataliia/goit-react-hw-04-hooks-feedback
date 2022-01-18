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
  color: #b6846b;
`;
export const Button = styled.button`
  width: 90px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 10px;
  background-color: #e3d6c8;
  color: #d9b597;
  margin-right: 15px;
  transition: transform 500ms ease, background-color 500ms, color 500ms;
  &:hover {
    color: #b6846b;
    background-color: #d9b597;
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
  color: #b6846b;
  transition: color 500ms;
`;
export const Icon = styled.span`
  margin-right: 5px;
`;
export const NotificationStyled = styled.p`
  color: #d9b597;
`;
