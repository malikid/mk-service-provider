import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {map, isEmpty} from 'lodash';

import Thread from './Thread';

import {
  Container,
  HeaderContainer,
  TimelineContainer,
  Now,
  Message,
  // TODO add the timeline at one of the sides or both
  // Timeline,
} from './styles';

@inject('store')
@observer
class RequestTimeline extends Component {
  render() {
    const {
      requests,
      requestsMessage,
      acceptRequest,
      declineReqeust,
      isAvailable,
      isFetchingRequests
    } = this.props.store.serviceProviderPage;

    const requestBarElements = map(requests, (request, index) => (
      <Thread
        key={index}
        request={request}
        isAvailable={isAvailable}
        acceptHandler={acceptRequest.bind(this, request)}
        declineHandler={declineReqeust.bind(this, request)}
      />
    ));

    if(isEmpty(requests)) {
      return (<Message>Please make sure you've done the skills.</Message>);
    }

    if(isFetchingRequests) {
      return (<Message>Getting requests... Please wait...</Message>);
    }

    return (
      <Container>
        <HeaderContainer>
          <Now>NOW</Now>
          <Message>{requestsMessage}</Message>
        </HeaderContainer>
        <TimelineContainer>
          {false && <Timeline />}
          {requestBarElements}
          {false && <Timeline />}
        </TimelineContainer>
      </Container>
    );
  }
}

export default RequestTimeline;
