import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import map from 'lodash/map';

import {Container, ListItem, ListItemText} from './styles';

@inject('store')
@observer
class SkillAndLevel extends Component {
  render() {
    const {skillLabel, show, skills, onClickHandler} = this.props;

    const itemElements = map(skills, (skill, index) => (
      <ListItem key={index} onClick={() => {onClickHandler(skillLabel, skill)}}>
        <ListItemText>{skill}</ListItemText>
      </ListItem>
    ));

    return (
      <CSSTransition in={show} timeout={3000} unmountOnExit mountOnEnter>
        {(state) => (
          <Container state={state}>
            {itemElements}
          </Container>
        )}
      </CSSTransition>
    );
  }
}

export default SkillAndLevel;
