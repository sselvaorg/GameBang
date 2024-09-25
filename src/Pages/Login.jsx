import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = ({ onSwitch }) => {
  const onFinish = (values) => {
    console.log('Login Success:', values);
  };

  return (
    <Card title="Login" style={{ width: 300 }}>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a href="/" style={{ float: 'right' }}>
            Forgot password?
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      <Button type="link" onClick={onSwitch}>
        Register here
      </Button>
    </Card>
  );
};

const RegisterForm = ({ onSwitch }) => {
  const onFinish = (values) => {
    console.log('Register Success:', values);
  };

  return (
    <Card title="Register" style={{ width: 300 }}>
      <Form
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
      <Button type="link" onClick={onSwitch}>
        Back to Login
      </Button>
    </Card>
  );
};

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      {isLogin ? <LoginForm onSwitch={switchForm} /> : <RegisterForm onSwitch={switchForm} />}
    </div>
  );
};

export default LoginForm;
