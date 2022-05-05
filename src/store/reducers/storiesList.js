import {STORIES_LIST} from '../actions/actionTypes';

const initialState = {
  list: [],
  token: '',
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case STORIES_LIST: {
      return {
        ...state,
        list: state.token
          ? [...state.list, ...action.payload.stories]
          : action.payload.stories,
        token: action.payload.next_page_token,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}
