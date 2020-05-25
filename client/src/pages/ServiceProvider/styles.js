import React from 'react';
import styled from 'styled-components';
import {Button} from 'Styles/general';

export const PageContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftProfileContainer = styled.div`
  flex: 1;
  height: 500px;
`;

export const RightProfileContainer = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
 
export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
