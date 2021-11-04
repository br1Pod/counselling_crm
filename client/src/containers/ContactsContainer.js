import React, { useState, useEffect } from 'react';
import AddContactForm from '../components/forms/AddContactForm'
import ContactsList from "../components/ContactsList";
import { getContacts } from "../components/forms/AddContactService.js";
import '../css/form.css'
import { updateContact } from '../components/forms/AddContactService.js';


const ContactsContainer = ({getContacts}) => {

    const[addVisible, setAddVisible] = useState(false);
    const[listVisible, setListVisible] = useState(false);
    const[contacts, setContacts] = useState([]);

    useEffect(()=>{
        getContacts()
        .then((allContacts)=>{
          setContacts(allContacts);
        })
      },[]);

      const addContact = (contact) =>{
        const temp = contacts.map(s =>s);
        temp.push(contact);
        setContacts(temp);
      }

      const removeContact = (id) => {
        const temp = contacts.map(s =>s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);

        temp.splice(indexToDel, 1);
        setContacts(temp);
      }
        
      const selectView = () => {
        setAddVisible(false);
        setListVisible(true);
      }

      const selectNew = () => {
        setAddVisible(true);
        setListVisible(false);
      }
 
    return (
        <>
            <div id="contacts">

                <div id="contact_option">
                <button onClick={selectView}>View Contact Record</button>
                <button onClick={selectNew}>Add New Contact</button>
                </div>

                <div>
                {listVisible ? <ContactsList contacts={contacts} removeContact={removeContact}  /> : null}
                {addVisible ? <AddContactForm addContact = {addContact}/> : null}
                </div>
                
            </div>
        </>
    )
}

export default ContactsContainer;