import React, { useState, useEffect } from "react";
import ClientItem from "./ClientItem";

const ClientsList = ({getClients, removeClient, updateClient}) => {

    const [clients, setClients] = useState([]);
    
    useEffect(()=>{
        getClients()
        .then((allClients)=>{
          setClients(allClients);
        })
      },[]);

    const clientsLayout = clients.map((client) =>{
        
        return <ClientItem 
        client={client} 
        key={client._id} 
        removeClient={removeClient} 
        updateClient={updateClient}    
        />
    });
    
    return (
        <>
            <h2>List of All Clients</h2>
            <ul>
            {clientsLayout}
            </ul>
        </>
    );

}

export default ClientsList;