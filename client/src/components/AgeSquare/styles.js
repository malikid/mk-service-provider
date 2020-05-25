import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const AgeLabel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bolder;
  font-size: smaller;
`;

export const AgeInput = styled.input.attrs(({placeholder}) => ({
  placeholder
}))`
  width: 80%;
  background-color: transparent;
  border: 0;
  outline: none;
  resize: none;
  font-size: xxx-large;
`;
