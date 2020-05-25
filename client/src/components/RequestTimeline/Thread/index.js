import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import WhiteStub from 'Components/WhiteStub';

import {
  Thread,
  RequestBar,
  RequestDetail,
  RequestSkillRequirement,
  StartDate,
  EndDate,
  ButtonContainer,
  AcceptButton,
  DeclineButton
} from './styles';

@inject('store')
@observer
class RequestTimeline extends Component {
  render() {
    const {request, acceptHandler, declineHandler, isAvailable} = this.props;
    const {
      id,
      declined,
      selected,
      timelineRatio: {before, during, after},
      startDate,
      endDate,
      detail,
      skill,
      minLevel
    } = request;

    const available = isAvailable[id];

    const requestStatus = {
      unavailable: !available,
      declined,
      selected
    };
    const acceptOnClickHandler = !declined && available && {onClick: acceptHandler};
    const declineOnClickHandler = !selected && available && {onClick: declineHandler};

    return (
      <Thread>
        <WhiteStub flex={before}/>
        <RequestBar flex={during} {...requestStatus}>
          <StartDate>{startDate}</StartDate>
          <RequestDetail>{detail}</RequestDetail>
          <RequestSkillRequirement>{"Skill: " + skill}</RequestSkillRequirement>
          <RequestSkillRequirement>{"Minimal Level: "+ minLevel}</RequestSkillRequirement>
          <EndDate>{endDate}</EndDate>
          <ButtonContainer>
            <AcceptButton
              {...requestStatus}
              {...acceptOnClickHandler && acceptOnClickHandler}
            >
              ＋
            </AcceptButton>
            <DeclineButton
              {...requestStatus}
              {...declineOnClickHandler && declineOnClickHandler}
            >
              －
            </DeclineButton>
          </ButtonContainer>
        </RequestBar>
        <WhiteStub flex={after} />
      </Thread>
    );
  }
}

export default RequestTimeline;
