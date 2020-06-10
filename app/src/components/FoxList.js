import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const FoxList = props => {
  return (
    <Fragment>
      
        <div> <img src={props.foxes.image} alt='fox or foxes'/> <p> {props.foxes.link} </p> </div>
     

    </Fragment>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    foxes: state.foxes
  };
};

export default connect(mapStateToProps, {})(FoxList);