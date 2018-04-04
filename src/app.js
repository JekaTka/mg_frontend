import { Link } from 'react-router-dom';
import React from 'react';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import Main from './main';
const { Header, Sider, Content, Footer } = Layout;

const StyledContent = styled(Content)`
    background: #fff;
`;

export default () => (
  <Layout>
    <Header>
      <Row type="flex" justify="center">
        <Col span={8}>
          <Row type="flex" justify="center">
            <Link to='/'>Home</Link>
          </Row>
        </Col>
        <Col span={8}>
          <Row type="flex" justify="center">
            <Link to='/auth/login'>Sign In</Link>
          </Row>
        </Col>
        <Col span={8}>
          <Row type="flex" justify="center">
            <Link to='/auth/register'>Sign Up</Link>
          </Row>
        </Col>
      </Row>
    </Header>
    <Layout>
      <Sider>left sidebar</Sider>
      <StyledContent className="test">
        <Main />
      </StyledContent>
      <Sider>right sidebar</Sider>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
)
