import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './forms/register.form';
import actions from '../register.actions';

const RegisterComponent = ({ fields, handleFormChange, submitForm }) => (
    <RegisterForm {...fields} onChange={handleFormChange} onSubmit={submitForm} />
);

const mapStateToProps = state => state.register;

export default connect(mapStateToProps, { ...actions })(RegisterComponent);
