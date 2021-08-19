import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        _id: "611b09d9574b451db0f32355",
        name: "BB8",
        email: "bb8@email.com",
        phone: "999-999-9999",
        user: "611327a20d6cfe829f2e5c2a",
        date: "2021-08-17T00:59:05.177Z",
        __v: 0,
      },
      {
        type: "professional",
        _id: "611328130d6cfe829f2e5c2f",
        name: "Darth Vader",
        email: "darthvader@email.com",
        phone: "333-333-3333",
        user: "611327a20d6cfe829f2e5c2a",
        date: "2021-08-11T01:29:55.413Z",
        __v: 0,
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTACT

  // DELETE CONTACT

  // SET CURRENT CONTACT

  // CLEAR CURRENT CONTACT

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR FILTER

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
