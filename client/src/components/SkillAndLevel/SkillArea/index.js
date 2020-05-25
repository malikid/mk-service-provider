import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {Container, SkillLabel, SkillInput} from './styles';

@inject('store')
@observer
class SkillArea extends Component {
  render() {
    const {skillLabel, skillName} = this.props;
    return (
      <Container>
        {skillName && <SkillLabel>{`Skill ${skillLabel}`}</SkillLabel>}
        <SkillInput
          placeholder={`Skill ${skillLabel}`}
          value={skillName}
        />
      </Container>
    );
  }
}

export default SkillArea;
