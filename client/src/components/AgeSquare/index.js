import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {Container, AgeLabel, AgeInput} from './styles';

@inject('store')
@observer
class AgeSquare extends Component {
  render() {
    const {age, setAge} = this.props.store.serviceProviderPage;
    return (
      <Container>
        {age && <AgeLabel>Age</AgeLabel>}
        <AgeInput placeholder={'Your Age'} onChange={setAge}/>
      </Container>
    );
  }
}

export default AgeSquare;
