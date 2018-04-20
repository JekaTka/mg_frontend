import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './forms/login.form';
import actions from '../login.actions';

const LoginComponent = ({ fields, handleFormChange, submitForm }) => (
    <LoginForm {...fields} onChange={handleFormChange} onSubmit={submitForm} />
);

const mapStateToProps = state => state.login;

export default connect(mapStateToProps, { ...actions })(LoginComponent);
