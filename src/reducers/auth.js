const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password} })
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        inProgress: false,
        errors: aciton.error ? action.payload.errors : null
        };
      case 'ASYNC_START':
        if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
          return { ...state, inProgress: true};
        }
        break;
      case 'UPDATE_FIELD_AUTH':
        return { ...state, [action.key]: action.value };
  }

  return state;
};

export default {
  Articles,
  Auth,
  setToken: _token => { token = _token; }
};
