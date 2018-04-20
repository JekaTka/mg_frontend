import { Link } from 'react-router-dom';
import React from 'react';
import { Layout, Row, Col } from 'antd';
import styled from 'styled-components';
import Main from './main';
const { Header, Sider, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
    background: inherit;
`;

export default () => (
  <Layout>
    <StyledHeader>
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
    </StyledHeader>
    <Layout>
      <Content>
        <Main />
      </Content>
    </Layout>
    <Footer>footer</Footer>
  </Layout>
)
