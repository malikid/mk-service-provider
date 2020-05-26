import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Now = styled.div`
  font-size: xxx-large;
`;

export const Message = styled.div`
  height: 30px;
  font-size: large;
  color: orangered;
`;

export const TimelineContainer = styled.div`
  flex: 1;
  margin: 0 -50px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  position: relative;
`;

// TODO add the timeline at one of the sides or both
/* The actual timeline (the vertical ruler) */
// export const Timeline = styled.div`
//   height: 100%;
//   width: 50px;

//   &::after {
//     content: '';
//     width: 6px;
//     background-color: lightgrey;
//     top: 0;
//     bottom: 0;
//     margin-left: -3px;
//   }
// `;
