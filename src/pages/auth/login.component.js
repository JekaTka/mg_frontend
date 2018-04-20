import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { LoginComponent } from '../../modules/auth';

const LoginLayout = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 40px;
`;

export default () => (
    <Row type="flex" justify="center">
        <Col span={8}>
            <LoginLayout>
                <LoginComponent />
            </LoginLayout>
        </Col>
    </Row>
);
