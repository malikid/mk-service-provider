import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 270px;
  background-color: lightblue;
  padding: 5px;
  overflow: scroll;
  transition: 3s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`;

export const ListItem = styled.div`
  margin: 10px 30px;
  height: 70px;
  background-color: royalblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ListItemText = styled.span`
  padding: 20px 60px;
  font-size: x-large;
  color: white;
`;