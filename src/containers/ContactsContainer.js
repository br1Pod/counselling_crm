import React, { useState } from 'react';
import AddContactForm from '../components/forms/AddContactForm'
import '../css/form.css'


const ContactsContainer = () => {


    return (
        <>

            <div id="contacts">
                <p>Here are the contacts</p>

                <br />
                <br />
                <h3>Add New Contact</h3>
                <AddContactForm />

            </div>

        </>
    )
}

export default ContactsContainer;