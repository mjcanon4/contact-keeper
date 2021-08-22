import React, { useReducer } from "react";
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
        id: "1",
        name: "BB8",
        email: "bb8@email.com",
        phone: "999-999-9999",
      },
      {
        type: "professional",
        id: "2",
        name: "Darth Vader",
        email: "darthvader@email.com",
        phone: "333-333-3333",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTACT
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
    console.log(contact);
  };

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
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
