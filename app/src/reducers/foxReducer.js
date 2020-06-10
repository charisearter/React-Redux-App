import { FETCH_FOXES } from '../actions';

const initialState = {
  foxes: {},
  isFetchingData: false
};


// export const getFoxes = () => {
//   return {


//   }
// };

export const foxReducer = (state= initialState, action) => {
  switch(action.type){
    case FETCH_FOXES:
      return {
        ...state,
        isFetchingData: true
      };
    default:
      return state;
  }
};