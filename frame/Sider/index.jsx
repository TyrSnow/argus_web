import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Menu,
} from 'antd';

import './index.scss';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

@inject('frameStore')
@observer
class Sider extends React.Component {
  renderMenuWithSub = ({key, label, subMenu}) => {
    return (
      <SubMenu key={key} title={label}>
        {
          subMenu.map(sub => {
            if (sub.subMenu) {
              return this.renderMenuWithSub(sub);
            }

            return this.renderMenu(sub);
          })
        }
      </SubMenu>
    );
  }

  renderMenu = ({key, label}) => {
    return (
      <MenuItem
        key={key}
        onClick={() => this.props.frameStore.set_active(key)}
      >
        {label}
      </MenuItem>
    );
  }

  /**
   * 计算哪些父级菜单需要展开
   */
  getOpenedKeys = (key) => {
    let keys = key.split('.');
    if (keys.length < 2) {
      return [];
    }
    let last_opened = keys[0];
    let opened = [last_opened];
    let i = 1;
    let len = keys.length - 1; // 最后一个不用管
    while(i < len) {
      last_opened = last_opened + '.' + keys[i];
      opened.push(last_opened);
      i += 1;
    }

    return opened;
  }

  render() {
    console.debug('[frame.Sider]render: ', this.props);
    const { routes, frameStore } = this.props;
    return (
      <div className="m-sider">
        <Menu
          mode="inline"
          defaultOpenKeys={this.getOpenedKeys(frameStore.active)}
          selectedKeys={[frameStore.active]}
        >
          {
            routes.map(route => {
              if (route.subMenu) {
                return this.renderMenuWithSub(route);
              }
  
              return this.renderMenu(route);
            })
          }
          {/* <MenuItem key={0}>工作台</MenuItem>
          <SubMenu key={1} title="股票管理">
            <MenuItem key={1.0}>沪深两市</MenuItem>
            <MenuItem key={1.1}>黑名单</MenuItem>
            <MenuItem key={1.2}>股票池</MenuItem>
          </SubMenu>
          <SubMenu key={2} title="代码管理">
            <MenuItem key={2.0}>评分子程序</MenuItem>
          </SubMenu>
          <SubMenu key={3} title="系统管理">
            <MenuItem key={3.0}>用户管理</MenuItem>
            <MenuItem key={3.1}>参数配置</MenuItem>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

export default Sider;
