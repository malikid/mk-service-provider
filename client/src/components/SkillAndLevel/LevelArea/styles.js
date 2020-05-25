import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 200px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const LevelLabel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: bolder;
  font-size: smaller;
`;

export const LevelNumber = styled.div`
  font-weight: bolder;
  font-size: ${({selected}) => selected ? 'xxx-large' : 'xx-large'};
  cursor: pointer;
`;
