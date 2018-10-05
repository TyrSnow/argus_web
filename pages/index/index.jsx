import React from 'react';
import { inject, observer } from 'mobx-react';

import { AUTH_LABEL } from '../../constant/auth';

@inject('authStore')
@observer
class Index extends React.Component {
  componentDidMount() {
    this.props.authStore.solve();
  }

  render() {
    console.debug('IndexPage render: ', this.props);
    return (
      <div className="p-index">
        <p>当前登陆用户：{this.props.authStore.name}</p>
        <p>当前登陆身份：{AUTH_LABEL[this.props.authStore.auth]}</p>
      </div>
    );
  }
}

export default Index;
