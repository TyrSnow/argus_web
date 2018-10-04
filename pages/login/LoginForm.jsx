import * as React from 'react';
import {
  Form,
  Input,
  Button,
  Icon,
  Modal,
} from 'antd';

const FormItem = Form.Item;


class LoginForm extends React.Component {
  submit = () => {
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
          <Button
            onClick={this.submit}
            type="primary"
            className="login-form-button"
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
