import React from 'react';
import { Row, Col, Input, Icon } from 'antd';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    border: 1px solid grey;
    padding: 20px;
`;

const LoginContainer = styled(Row)`
    height: 100px;
`;

const LoginComponent = ({ emitEmpty, nickname, onChangeNickname }) => {
    const suffix = nickname ? <Icon type="close-circle" onClick={emitEmpty} /> : null;

    return (
        <LoginWrapper>
          <LoginContainer type="flex" align="middle" justify="center">
              <Col xs={6}>
                  <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={nickname}
                    onChange={onChangeNickname}
                  />
              </Col>
          </LoginContainer>
        </LoginWrapper>
    );
};

export default LoginComponent;

/*export default () => (
  <LoginWrapper>
    <LoginContainer type="flex" align="middle" justify="center">
        <Col xs={6}>
            <Input
              placeholder="Enter your username"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={suffix}
              value={userName}
              onChange={this.onChangeUserName}
              ref={node => this.userNameInput = node}
            />
        </Col>
    </LoginContainer>
  </LoginWrapper>
);*/
