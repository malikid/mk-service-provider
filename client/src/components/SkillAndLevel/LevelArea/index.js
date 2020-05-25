import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import map from 'lodash/map';

import {Container, LevelLabel, LevelNumber} from './styles';

@inject('store')
@observer
class LevelArea extends Component {
  render() {
    const {skillLabel, skillLevel, onChangeHandler} = this.props;
    const levelNumberElements = map([1, 2, 3, 4, 5], number => (
      <LevelNumber
        key={number}
        selected={skillLevel === number}
        onClick={() => onChangeHandler(skillLabel, number)}
      >
        {number}
      </LevelNumber>
    ));
    return (
      <Container>
        <LevelLabel>LEVEL</LevelLabel>
        {levelNumberElements}
      </Container>
    );
  }
}

export default LevelArea;
