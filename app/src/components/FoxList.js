import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const FoxList = props => {
  return (
    <Fragment>
      {props.foxes.map(fox => (
        <div> <img src={fox.image} alt='fox or foxes'/> <p> {fox.link} </p> </div>
      ))}

    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    foxes: state.foxes
  };
};

export default connect(mapStateToProps, {})(FoxList);