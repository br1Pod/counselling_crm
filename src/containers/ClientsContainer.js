import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const ClientsContainer = () => {


    return (
        <>

            <Header/>
            <div id="clients">
                <p>Here are the clients</p>
            </div>

        </>
    )
}

export default ClientsContainer;