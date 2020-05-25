import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: lightblue;
  ${({isDragActive}) => isDragActive && `
    opacity: 0.5;
  `}
  ${({isDragAccept}) => isDragAccept && `
    background-color: lightgreen;
  `}
  ${({isDragReject}) => isDragReject && `
    background-color: pink;
  `}
`;

export const DropZone = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  padding: 0 50px;
  color: grey;
  font-size: xx-large;
`;

export const ThumbsContainer = styled.div`
  height: 100%;
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  marginTop: 16;
`;

export const Thumb = styled.div`
  display: inline-flex;
  borderRadius: 2;
  border: 1px solid #eaeaea;
  marginBottom: 8;
  marginRight: 8;
  width: 100;
  height: 100;
  padding: 4;
  boxSizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  minWidth: 0;
  overflow: hidden;
`;

export const ThumbImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
