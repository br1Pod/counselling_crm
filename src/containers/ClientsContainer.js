import React, { useState } from 'react';
import AddClientForm from '../components/forms/AddClientForm'
import '../css/form.css'

const ClientsContainer = () => {


    return (
        <>

            <div id="clients">
                <p>Here are the clients</p>

                <br />
                <br />
                
                <AddClientForm />

            </div>

        </>
    )
}

export default ClientsContainer;