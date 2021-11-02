import React, { useState } from 'react';
import AddClientForm from '../components/forms/AddClientForm'
import '../css/form.css'

const ClientsContainer = () => {

    const[clients, setClients] = useState([]);

    const addClient = (client) =>{
        const temp = clients.map(s =>s);
        temp.push(client);
        setClients(temp);
      }

    return (
        <>

            <div id="clients">
                <p>Here are the clients</p>

                <br />
                <br />
                
                <AddClientForm addClient = {addClient}/>

            </div>

        </>
    )
}

export default ClientsContainer;