import React from 'react';
import { Tabs, Modal } from 'antd';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import * as authService from '../../service/auth';
import LoginForm from '../../components/LoginForm';
import RegistForm from '../../components/RegisterForm';

import './index.scss';

const TabPane = Tabs.TabPane;

@inject('authStore')
@observer
class LoginPage extends React.Component {
  handleSuccess = (resp) => {
    Router.push('/');
    this.props.authStore.update_auth(resp);
  }

  handleError = (err) => {
    Modal.error({
      title: err.message,
    });
  }

  onLoginSubmit = (fields) => {
    console.debug('login: ', fields);
    authService.login(fields.name, fields.password)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  onRegistSubmit = (fields) => {
    console.debug('regist: ', fields);
    authService.regist(fields.name, fields.password)
      .then(this.handleSuccess)
      .catch(this.handleError);
  }

  render() {
    console.debug('LoginPage render: ', this.props);
    return (
      <div className="p-login">
        <div className="logo">
          <div className="logo-icon">Argus</div>
        </div>
        <div className="m-formBox">
          <div className="borderBox">
            <Tabs>
              <TabPane key="login" tab="Login">
                <LoginForm onSubmit={this.onLoginSubmit} />
              </TabPane>
              <TabPane key="regist" tab="Regist">
                <RegistForm onSubmit={this.onRegistSubmit} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
