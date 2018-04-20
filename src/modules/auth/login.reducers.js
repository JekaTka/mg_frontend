import { FORM_CHANGE } from './login.types';

const initialState = {
    fields: {
      email: {
          value: '',
      },
      password: {
          value: '',
      },
    },
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case FORM_CHANGE:
            const { field } = action;
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...field
                }
            };

        default:
            return state;
    }
}
