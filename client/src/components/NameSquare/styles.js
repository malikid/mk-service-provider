import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 2;
  width: 100%;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const NameLabel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bolder;
  font-size: smaller;
`;

export const NameInput = styled.textarea.attrs(({placeholder}) => ({
  placeholder
}))`
  width: 80%;
  background-color: transparent;
  border: 0;
  outline: none;
  resize: none;
  font-size: xxx-large;

  &::placeholder {
    vertical-align: middle;
  }
`;
