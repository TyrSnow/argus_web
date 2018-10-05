import { observable, action } from 'mobx';
import { AUTH_TYPE } from '../constant/auth';
import * as authService from '../service/auth';

console.debug('AuthStore init.');
/**
 * 维护当前的登陆状态
 */
class AuthStore {
  @observable loading = false;
  @observable error = undefined;
  @observable token = undefined;

  @observable name = 'Guest';
  @observable auth = AUTH_TYPE.GUEST;
  @observable user = {
    name: 'Guest',
    email: '',
    phone: '',
    auth: AUTH_TYPE.GUEST,
  };

  @action set_token = (token) => {
    this.token = token;
  }

  @action update_auth = (resp) => {
    this.name = resp.data.data.name;
    this.auth = resp.data.data.auth;
    this.token = resp.data.data.token;
  }

  /**
   * 解析当前登陆状态
   */
  @action solve = () => {
    this.loading = true;
    authService.solve_auth(this.token)
      .then(this.update_auth)
      .catch(action((err) => {
        this.error = err;
      }))
      .finally(action(() => { this.loading = false; }));
  }
}

export default new AuthStore();
