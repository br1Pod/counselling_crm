import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";

const ContactsList = ({contacts, removeContact}) => {

    const contactList = contacts.map((contact) =>{
        return <ContactItem contact={contact} key={contact._id} removeContact={removeContact} />
    });

    return (
        <>
            <ul id="people">
                {contactList}
            </ul>
        </>
    );

}

export default ContactsList;