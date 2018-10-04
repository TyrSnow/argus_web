import { Tabs } from 'antd';

import LoginForm from './LoginForm';
import RegistForm from './RegistForm';

import './index.scss';

const TabPane = Tabs.TabPane;

export default () => (
  <div className="p-login">
    <div className="logo">
      <div className="logo-icon">Argus</div>
    </div>
    <div className="m-formBox">
      <div className="borderBox">
        <Tabs>
          <TabPane key="login" tab="Login">
            <LoginForm />
          </TabPane>
          <TabPane key="regist" tab="Regist">
            <RegistForm />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
)
