import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
  } from "../types";

  export default (state, action) => {
    switch(action.type) {
      case REGISTER_SUCCESS: 
      return (...state, action.payload)
  
      default return state;
    }
  }