import {
  SET_BEFORE_LIST_LOADER_VISIBLE,
  SET_LIST_LOADER_VISIBLE,
  SET_LOADER_VISIBLE,
} from '../actions/actionTypes';

const initialState = {
  visible: false,
  listLoaderVisible: false,
  beforeListRenderLoader: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_LOADER_VISIBLE: {
      return {
        ...state,
        visible: action.payload,
      };
    }
    case SET_LIST_LOADER_VISIBLE: {
      return {
        ...state,
        listLoaderVisible: action.payload,
      };
    }
    case SET_BEFORE_LIST_LOADER_VISIBLE: {
      return {
        ...state,
        beforeListRenderLoader: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
