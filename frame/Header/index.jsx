import React from 'react';
import { inject, observer } from 'mobx-react';
import { AUTH_LABEL } from '../../constant/auth';

import './index.scss';

@inject('authStore')
@observer
class Header extends React.Component {
  render() {
    console.debug('[frame.Header]render: ', this.props);
    const { name, auth } = this.props.authStore;

    return (
      <div className="m-header">
        <div className="logo">Argus</div>
        <div className="user">
          <span className="auth">{AUTH_LABEL[auth]}</span>
          <span className="name">[{name}]</span>
          <span className="controls">
            <span className="btn">注销</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
