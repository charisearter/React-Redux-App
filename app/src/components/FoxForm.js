import React, { Fragment } from 'react'; //imported Fragment because I don't want empty brackets
import { connect } from 'react-redux'; // imported connet to connect
import { getFoxes } from '../actions' //import action from actions folder. action file called index.js 

const FoxForm = props => {

  const handleFetch = e => { //handles button click
    e.preventDefault();
    props.getFoxes();
  };

  return (
    <Fragment>
      <h2>Click the Floof! button to add cuteness to your day.</h2>
      {/* // if fetching data is true show the message, if not show the button */}
      {props.isFetchingData ? (
        <div className='loading'> ...fetching the floofiness...</div>
      ) : (
      <button onClick={handleFetch} className='btn'> Floof!</button>
      )}
      
    </Fragment>
  );
};



const mapStateToProps = state => {
  return { 
    isFetchingData: state.isFetchingData
  };
};

//if setting up ahead of time just do connect(null, {}) ... cannot be a space between {})(component name);
export default connect(mapStateToProps, {getFoxes})(FoxForm);
