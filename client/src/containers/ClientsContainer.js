import React, { useState, useEffect } from 'react';
import AddClientForm from '../components/forms/AddClientForm'
import ClientsList from "../components/ClientsList";
import { getClients } from "../components/forms/AddClientService";
import '../css/form.css'
import { updateClient } from '../components/forms/AddClientService';
import EditClientForm from '../components/forms/EditClientForm'

const ClientsContainer = ({getClients}) => {

    const[addVisible, setAddVisible] = useState(false);
    const[listVisible, setListVisible] = useState(false);
    const[clients, setClients] = useState([]);

    useEffect(()=>{
        getClients()
        .then((allClients)=>{
          setClients(allClients);
        })
      },[]);

      const addClient = (client) =>{
        const temp = clients.map(s =>s);
        temp.push(client);
        setClients(temp);
      }

      const removeClient = (id) => {
        const temp = clients.map(s =>s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        console.log(indexToDel);

        temp.splice(indexToDel, 1);
        setClients(temp);
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
            <div id="clients">

                <div id="client_option">
                <button onClick={selectView}>View Client Record</button>
                <button onClick={selectNew}>Add New Client</button>
                </div>

                <div>
                {listVisible ? <ClientsList clients={clients} removeClient={removeClient}  /> : null}
                {addVisible ? <AddClientForm addClient = {addClient}/> : null}
                </div>
                
            </div>
        </>
    )
}

export default ClientsContainer;