export default (state = {}, action) => {
  switch (action.type) {
    case 'SETTINGS_SAVED':
      return {
        ...state,
        inProgress: false,
        errors: action.error ? aciton.payload.errors : null
      };
      case 'ASYNC_START':
        return {
          ...state,
          inProgress: true
        };
    }
  return state;
};
