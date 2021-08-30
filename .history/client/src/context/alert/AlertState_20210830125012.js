import React, { useReducer } from "react";
import uuid from "uuid";
import AlertContext from "./authContext";
import alertReducer from "./authReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {};

  // Remove Alert

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
