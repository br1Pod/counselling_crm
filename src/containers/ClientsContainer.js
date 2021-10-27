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
                <h3>Add New Client</h3>
                <AddClientForm />

            </div>

        </>
    )
}

export default ClientsContainer;