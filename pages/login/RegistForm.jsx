import * as React from 'react';
import {
  Form,
  Input,
  Button,
  Icon,
} from 'antd';

const FormItem = Form.Item;

class RegistForm extends React.Component {
  handleRegist = () => {
    this.props.form.validateFields((err, fields) => {
      if (err) {
        return;
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('confirm', {
            rules: [{ required: true, message: 'Confirm your Password!' }],
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
