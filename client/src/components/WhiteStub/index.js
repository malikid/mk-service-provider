import React, {Component} from 'react';

import {Container} from './styles';

class WhiteStub extends Component {
  render() {
    const {
      width = '100%',
      height = '100%',
      flex,
    } = this.props;

    return (
      <Container
        height={height}
        width={width}
        flex={flex}
      />
    );
  }
}

export default WhiteStub;
