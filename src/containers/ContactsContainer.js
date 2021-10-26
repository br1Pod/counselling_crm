import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const ContactsContainer = () => {


    return (
        <>

            <Header/>
            <div id="contacts">
                <p>Here are the contacts</p>
            </div>

        </>
    )
}

export default ContactsContainer;