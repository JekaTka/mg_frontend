import { FORM_CHANGE, FORM_SUBMIT } from './register.types';

export const handleFormChange = (changedField) => ({
    type: FORM_CHANGE,
    field: changedField
});

export const submitForm = (fields) => {
    console.log('submitForm');
    console.log(fields);
};

export default {
    handleFormChange,
    submitForm,
};
