import React from 'react';
import { inject, observer } from 'mobx-react';

import Header from '../../frame/Header';
import Sider from '../../frame/Sider';

import routes from './routes';

import { AUTH_LABEL } from '../../constant/auth';

import './index.scss';

@inject('authStore', 'frameStore')
@observer
class Index extends React.Component {
  componentDidMount() {
    this.props.authStore.solve();
  }

  render() {
    console.debug('IndexPage render: ', this.props);
    const Content = routes.getContent(this.props.frameStore.active);
    return (
      <div className="page p-index">
        <Header />
        <div className="bottom">
          <Sider routes={routes} />
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
