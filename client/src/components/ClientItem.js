import React, { useState, useEffect } from "react";
import { deleteClient, updateClient } from "./forms/AddClientService"

const ClientItem = ({client, removeClient}) => {
    const [clients, setClients] = useState([]);

    console.log(`this is the ` + client);

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
            <em>Name: </em> {client.first_name} {client.last_name} | 
            <em>Edit: </em><button onClick={handleChange}>edit</button> | 
            <em>Delete: </em><button onClick={handleDelete}>x</button>
        </li>       
        <hr></hr>
        </>
    )
}

export default ClientItem;