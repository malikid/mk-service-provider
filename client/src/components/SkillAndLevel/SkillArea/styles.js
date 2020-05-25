import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 35%;
  background-color: plum;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SkillLabel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bolder;
  font-size: smaller;
`;

export const SkillInput = styled.textarea.attrs(({placeholder}) => ({
  placeholder,
  readOnly: true
}))`
  width: 80%;
  background-color: transparent;
  border: 0;
  outline: none;
  resize: none;
  font-size: xx-large;

  &::placeholder {
    vertical-align: middle;
  }
`;
