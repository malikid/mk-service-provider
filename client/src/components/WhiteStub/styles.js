import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  ${({width, height, flex}) => flex === undefined ? `width: ${width};
    height: ${height};` : `flex: ${flex};`
  }
`;
