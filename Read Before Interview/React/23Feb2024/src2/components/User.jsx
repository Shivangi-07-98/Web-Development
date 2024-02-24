import React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import userFetchMiddleWare from '../redux/reducers/user/userMiddleWare';

function User(props) {

    useEffect(function fn() {
        props.fetchUser();
    }, []);

  return (
    <>
    <h1>User</h1>
    {props.loading == true ? <div>Loading...</div>:
    <h2>{props.users.name}</h2>
    }
    </>
  )
}

const mapStateToProps = (store) => {
    return store.User;
}

const mapDispatchtoProps = (dispatch) => {
    return{
        fetchUser: () => {
            return dispatch(userFetchMiddleWare);
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(User);