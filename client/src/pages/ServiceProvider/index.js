import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';

import {
  PageContainer,
  ProfileContainer,
  LeftProfileContainer,
  RightProfileContainer,
  SkillsContainer
} from './styles';

import NameSquare from 'Components/NameSquare';
import AgeSquare from 'Components/AgeSquare';
import AvatarSquare from 'Components/AvatarSquare';
import WhiteStub from 'Components/WhiteStub';
import SkillAndLevel from 'Components/SkillAndLevel';
import RequestTimeline from 'Components/RequestTimeline';

@inject('store')
@observer
class ServiceProviderPage extends Component {
  componentDidMount(prevProps) {
    const {builtinSkills, fetchBuiltInSkills} = this.props.store.serviceProviderPage;
    if(isEmpty(builtinSkills)) {
      fetchBuiltInSkills();
    }
  }

  render() {
    const {
      skills
    } = this.props.store.serviceProviderPage;

    return (
      <PageContainer>
        <ProfileContainer>
          <LeftProfileContainer>
            <AvatarSquare />
          </LeftProfileContainer>
          <WhiteStub width={'30px'} />
          <RightProfileContainer>
            <NameSquare />
            <WhiteStub height={'30px'} />
            <AgeSquare />
          </RightProfileContainer>
        </ProfileContainer>
        <WhiteStub height={'50px'} />
        <SkillsContainer>
          <SkillAndLevel skill={skills[0]} />
          <WhiteStub height={'30px'} />
          <SkillAndLevel skill={skills[1]} />
          <WhiteStub height={'30px'} />
          <SkillAndLevel skill={skills[2]} />
        </SkillsContainer>
        <WhiteStub height={'50px'} />
        <RequestTimeline />
      </PageContainer>
    );
  }
}

export default ServiceProviderPage;
