import React, { Fragment, useContext } from "react";
import { CCSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact!</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          : contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
