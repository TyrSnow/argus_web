import { observable, action } from 'mobx';

class FrameStore {
  @observable active = '1.0';

  @action set_active = (active_key) => {
    this.active = active_key;
  }
}

export default new FrameStore();
