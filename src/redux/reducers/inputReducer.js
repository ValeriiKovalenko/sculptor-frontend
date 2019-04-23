const initialState = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const inputs = (state = initialState, action) => {
  switch (action.type) {
    case `${action.name}`:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

export default inputs;
