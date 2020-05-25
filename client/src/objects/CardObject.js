import {CARD} from 'Config/enums';
import {observable, action, computed} from 'mobx';

export default class CardObject {
  number;
  @observable side;

  constructor({side, number}) {
    this.number = number || Math.floor(Math.random() * 100 + 1);
    this.side = side || CARD.NUMBER_SIDE;
  }

  @action
  flip = () => {
    if(this.side === CARD.BLANK_SIDE) {
      this.side = CARD.NUMBER_SIDE;
    } else {
      this.side = CARD.BLANK_SIDE;
    }
  }
};
