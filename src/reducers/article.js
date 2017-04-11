'use strict';

export default (state = defaultState, aciton) => {
  switch (action.type) {
    case 'ARTICLE_PAGE_LOADED':
      return {
        ...state,
        article: action.payload[0].article,
        comments: action.payload[1].comments
      };
      break;
    case 'ARTICLE_PAGE_UNLOADED':
      return {};
  }
  return state;
}
case 'LOGIN':
 case 'REGISTER':
   return {
     ...state,
     redirectTo: action.error ? null : '/',
     token: action.error ? null : action.payload.user.token,
     currentUser: action.error ? null : action.payload.user
   };
 case 'DELETE_ARTICLE':
   return { ...state, redirectTo: '/' };
 }
};
