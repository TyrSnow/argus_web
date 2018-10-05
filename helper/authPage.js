import React from 'react';

import { AUTH_TYPE } from '../constant/auth';

/**
 * 返回一个允许指定权限用户访问的HOC
 * @param {AUTH_TYPE} auth 需要的权限级别
 */
export function authPageFactor(auth) {
  return (WrapperComponent) => {
    return class OutterComponent extends React.Component {
      render() {
        return (
          <WrapperComponent />
        );
      }
    }
  };
}

export const UserPage = authPageFactor(AUTH_TYPE.USER);
