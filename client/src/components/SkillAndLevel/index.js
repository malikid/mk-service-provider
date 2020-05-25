import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SkillArea from './SkillArea';
import LevelArea from './LevelArea';
import Selector from './Selector';
import {Container} from './styles';

@inject('store')
@observer
class SkillAndLevel extends Component {
  render() {
    const {
      skill,
      store: {
        serviceProviderPage: {
          setSkillName,
          setSkillLevel,
          builtinSkills
        }
      }
    } = this.props;
    return (
      <Container>
        <SkillArea
          skillLabel={skill.label}
          skillName={skill.name}
        />
        {skill.name ? (
          <LevelArea
            skillLabel={skill.label}
            skillLevel={skill.level}
            onChangeHandler={setSkillLevel}
          />) :
          (<Selector
            show={!skill.name}
            skillLabel={skill.label}
            skills={builtinSkills}
            onClickHandler={setSkillName}
          />)
        }
      </Container>
    );
  }
}

export default SkillAndLevel;
