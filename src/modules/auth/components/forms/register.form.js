import React from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

const SubmitButton = styled(Button)`
    display: block;
    width: 100%;
`;

const RegisterForm = Form.create({

  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      nickname: Form.createFormField({
        ...props.nickname,
        value: props.nickname.value,
      }),
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
    <Form onSubmit={submit} className="register-form">
      <FormItem>
        {
            getFieldDecorator('nickname', {rules: [{ required: true, message: 'Nickname is required' }]})(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nickname" />)
        }
      </FormItem>
      <FormItem>
        {
            getFieldDecorator('email', {
                rules: [
                    {
                        required: true,
                        message: 'Email is required'
                    },
                    {
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid email'
                    }
                ]
            })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)
        }
      </FormItem>
      <FormItem>
          {
              getFieldDecorator('password', {rules: [{ required: true, message: 'Password is required' }]})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />)
          }
      </FormItem>
      <SubmitButton type="primary" htmlType="submit" className="register-form-button">Register</SubmitButton>
    </Form>
  );
});

export default RegisterForm;
