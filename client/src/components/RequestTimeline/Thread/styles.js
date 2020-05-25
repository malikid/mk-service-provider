import React from 'react';
import styled from 'styled-components';

export const Thread = styled.div`
  margin: 0 10px;
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  transition: width 1s;
  pointer-events: none;

  &:hover {
    width: 30%;
  }
`;

/* The actual content */
export const RequestBar = styled.div`
  flex: ${({flex}) => flex};
  padding: 20px 30px;
  background-color: tomato;
  position: relative;
  pointer-events: auto;
  display: flex;
  flex-direction: column;

  ${({unavailable, declined, selected}) => {
    if(selected) return 'background-color: yellow;';
    if(unavailable || declined) return 'opacity: 0.5';
  }}
`;

export const RequestDetail = styled.div`
  flex: 1;
  font-size: larger;
  font-weight: bolder;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RequestSkillRequirement = styled.div`
  margin-top: 15px;
  font-size: small;
  font-weight: 200;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
  padding: 0 -30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: large;
  opacity: 0.3;
  transition: opacity 0.35s;
`;

export const AcceptButton = styled(Button)`
  ${({selected, unavailable, declined}) => {
    if (unavailable) return;
    if (selected) return 'opacity: 1; cursor: pointer;';
    return !declined && `
      cursor: pointer;
      &:hover {
        opacity: 1;
      }`;
  }}
`;

export const DeclineButton = styled(Button)`
  ${({declined, unavailable, selected}) => {
    if (unavailable) return;
    if (declined) return 'opacity: 1; cursor: pointer;';
    return !selected && `
      cursor: pointer;
      &:hover {
        opacity: 1;
      }`;
  }}
`;

const BarDate = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: small;
  font-weight: bolder;
`;

export const StartDate = styled(BarDate)`
  top: -20px;
  border-bottom: 5px double springgreen;
  pointer-events: none;
`;

export const EndDate = styled(BarDate)`
  bottom: -20px;
  border-top: 5px double springgreen;
  pointer-events: none;
`;
