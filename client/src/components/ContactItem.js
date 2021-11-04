import React, { useState, useEffect } from "react";
import { deleteContact, updateContact } from "./forms/AddContactService"


const ContactItem = ({contact, removeContact}) => {
    const [contacts, setContacts] = useState([]);

    const handleDelete = () => {
        deleteContact(contact._id).then(()=>{
            removeContact(contact._id);
        })
    }

    const handleChange = () => {
        updateContact(contact._id).then((id)=>{
            updateContact(contact._id)
        })
    }

    return (
        <>
        <li>
            <em>Name: </em> {contact.first_name} {contact.last_name} | 
            <button onClick={handleChange}>view</button> | 
            <button onClick={handleDelete}>x</button>
        </li>       
        <hr></hr>
        </>
    )
}

export default ContactItem;