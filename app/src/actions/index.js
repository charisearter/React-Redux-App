import axios from 'axios'


export const FETCH_FOXES = 'FETCH_FOXES';

export const getFoxes = () => dispatch => {

    dispatch({ type: FETCH_FOXES });
    axios
      .get('https://randomfox.ca/floof')
      .then(res => {
        console.log(res);
        dispatch({  type: UPDATE_FOXES, payload: res.data });
      })
      .catch(err => console.log('There was an error fetching foxes', err));
   
};