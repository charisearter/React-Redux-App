// ~~~~~~~ ACTION PAGE ~~~~~~~~~
import axios from 'axios'

export const FETCH_FOXES = 'FETCH_FOXES'; //api call
export const UPDATE_FOXES = 'UPDATE_FOXES'; //display
export const SET_ERROR = 'SET_ERROR'; //error

export const getFoxes = () => dispatch => {

    dispatch({ type: FETCH_FOXES });
    axios //normal axios call wasn't working because of CORS use https://cors-anywhere.herokuapp.com/<AXIOS URL>
    //instead according to Dustin and it worked
      .get('https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/')
      .then(res => {
        console.log(res);
        dispatch({  type: UPDATE_FOXES, payload: res.data });
      })
      .catch(err => 
        console.log('There was an error fetching the foxes data', err.message));
        dispatch({ type: SET_ERROR, payload:'There was an error fetching the foxes data'})
   
};