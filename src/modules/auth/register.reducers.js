import { FORM_CHANGE } from './register.types';

const initialState = {
    fields: {
      nickname: {
        value: '',
      },
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
