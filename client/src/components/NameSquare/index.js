import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {Container, NameLabel, NameInput} from './styles';

@inject('store')
@observer
class NameSquare extends Component {
  render() {
    const {name, setName} = this.props.store.serviceProviderPage;
    return (
      <Container>
        {name && <NameLabel>NAME</NameLabel>}
        <NameInput placeholder={'Your Name'} onChange={setName}/>
      </Container>
    );
  }
}

export default NameSquare;
