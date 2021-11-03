import React, { useState, useEffect } from 'react';
import AddClientForm from '../components/forms/AddClientForm'
import ClientsList from "../components/ClientsList";

import '../css/form.css'
import { updateClient } from '../components/forms/AddClientService';

const ClientsContainer = ({getClients}) => {

    const[clients, setClients] = useState([]);

    useEffect(()=>{
        getClients()
        .then((allClients)=>{
          setClients(allClients);
        })
      },[]);

    const addClient = (client) =>{
        const temp = clients.map(client => client);
        temp.push(client);
        setClients(client);
      }

      const removeClient = (id) => {
        const temp = clients.map(client => client);
        const indexToDel = temp.map(client => client._id).indexOf(id);
        console.log(indexToDel);
        temp.splice(indexToDel, 1);
        setClients(temp);
      }

    return (
        <>

            <div id="clients">
                <p>Here are the clients</p>

                <br />
                <AddClientForm addClient = {addClient}/>
                <br />

                <ClientsList clients={clients} removeClient={removeClient} updateClient={updateClient} />

            </div>

        </>
    )
}

export default ClientsContainer;