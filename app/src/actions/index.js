import axios from 'axios'
export const FETCH_FOXES = 'FETCH_FOXES';

export const getFoxes = () => dispatch => {
  return {
    dispatch ({type: FETCH_FOXES});
  };
};