import * as React from 'react';
import {
  Form,
  Input,
  Button,
  Icon,
} from 'antd';

import * as authService from '../../service/auth';
import { passwordValidator } from '../../helper/validator';
import throttleFactor from '../../tools/throttleFactor';

const FormItem = Form.Item;

class RegistForm extends React.Component {
  handleRegist = () => {
    this.props.form.validateFields((err, fields) => {
      if (err) {
        return;
      }
      this.props.onSubmit(fields);
    });
  }

  _checkIfNameValide = throttleFactor(300)

  checkIfNameValide = (rule, value, callback, fields) => {
    if (!value) {
      callback('请输入您的用户名');
      return;
    }
    this._checkIfNameValide(() => {
      authService.validateName(value).then((res) => {
        callback();
      }).catch(e => {
        callback(e.message);
      });
    }, [], this);
  }

  checkIfPasswordValide = (rule, value, callback, fields) => {
    let tip = passwordValidator(value)
    if (tip) {
      callback(tip);
      return;
    }
    callback();
    return;
  }

  checkIfPasswordConfirmValide = (rule, value, callback, fields) => {
    if (fields.password !== fields.confirm) {
      callback('两次输入的密码不一致');
      return;
    }

    callback();
    return;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ validator: this.checkIfNameValide }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ validator: this.checkIfPasswordValide }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{ validator: this.checkIfPasswordConfirmValide }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            onClick={this.handleRegist}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Regist
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(RegistForm);
