import { FETCH_FOXES, UPDATE_FOXES } from '../actions';

const initialState = {
  foxes: {},
  isFetchingData: false
};



export const foxReducer = (state= initialState, action) => {
  switch(action.type){
    case FETCH_FOXES:
      return {
        ...state,
        isFetchingData: true
      };
      case UPDATE_FOXES:
        return {
          ...state,
          foxes: action.payload,
          isFetchingData: false
        };
    default:
      return state;
  }
};