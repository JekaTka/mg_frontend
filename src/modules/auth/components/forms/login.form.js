import React from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

const SubmitButton = styled(Button)`
    display: block;
    width: 100%;
`;

const LoginForm = Form.create({

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      email: Form.createFormField({
        ...props.email,
        value: props.email.value,
      }),
      password: Form.createFormField({
        ...props.password,
        value: props.password.value,
      }),
    };
  },

  onValuesChange(_, values) {},
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;
  const submit = (e) => {
      e.preventDefault();
      validateFields((err, values) => {
          if (!err) props.onSubmit(values);
      });
  }

  return (
    <Form onSubmit={submit} className="login-form">
      <FormItem>
        {
            getFieldDecorator('email', {
                rules: [{ required: true, message: 'Email is required!' }],
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)
        }
      </FormItem>
      <FormItem>
          {
              getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
              })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)
          }
      </FormItem>
      <SubmitButton type="primary" htmlType="submit" className="login-form-button">Login</SubmitButton>
    </Form>
  );
});

export default LoginForm;
