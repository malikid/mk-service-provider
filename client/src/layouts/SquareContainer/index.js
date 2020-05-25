import React, {Component} from 'react';

import {Container} from './styles';

class SquareContainer extends Component {
  render() {
    const {backgroundColor, children} = this.props;
    return (
      <Container backgroundColor={backgroundColor}>
        {children}
      </Container>
    );
  }
}

export default SquareContainer;
