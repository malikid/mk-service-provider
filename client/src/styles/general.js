import React from 'react';
import styled from 'styled-components';

export const Button = styled.div`
  margin: 0 10px;
  min-width: 100px;
  border-radius: 5px;
  padding: 10px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  ${({disabled}) => {
    if(disabled) {
      return `
        background-color: lightgrey;
        cursor: default;`;
    }
    return `
      cursor: pointer;

      &:hover {
        background-color: grey;
      }

      &:active {
        background-color: red;
      }`;
    }
  }
`;
