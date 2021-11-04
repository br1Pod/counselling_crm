import React, { useState, useEffect } from "react";
import { deleteClient, updateClient } from "./forms/AddClientService"
import EditClientForm from '../components/forms/EditClientForm'

const ClientItem = ({client, removeClient}) => {
    const [clients, setClients] = useState([]);

    const handleDelete = () => {
        deleteClient(client._id).then(()=>{
            removeClient(client._id);
        })
    }

    const handleChange = () => {
        updateClient(client._id).then((id)=>{
            updateClient(client._id)
        })
    }

    return (
        <>
        <li>
            <a href="" className="person-item, list-object">{client.first_name} {client.last_name}</a>
            <span className="person-manage">
            <button className="list-object" onClick={handleChange}>view</button>
            <button className="list-object" onClick={handleDelete}>x</button>
            </span>
            {/* <ul className="editable-form">
                <li><EditClientForm updateClient={updateClient} client={client} /></li>
            </ul> */}
        </li>       
        <hr></hr>
        </>
    )
}

export default ClientItem;