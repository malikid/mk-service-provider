import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import isEmpty from 'lodash/isEmpty';

import {
  Container,
  DropZone,
  Text,
  ThumbsContainer,
  Thumb,
  ThumbInner,
  ThumbImg
} from './styles';

function AvatarSquare() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner>
        <ThumbImg src={file.preview} />
      </ThumbInner>
    </Thumb>
  ));

  return (
    <Container
      isDragActive={isDragActive}
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isEmpty(thumbs)?
        (<DropZone>
          {
            isDragActive ? (
              isDragReject ?
                <Text>This format is not supported!</Text> :
                <Text>Drop your image here ...</Text>
              ) :
              <Text>Drag 'n' drop your image here, or click to select an image!</Text>
          }
        </DropZone>) :
        (<ThumbsContainer>
          {thumbs}
        </ThumbsContainer>)
      }
    </Container>
  );
}

export default AvatarSquare;
