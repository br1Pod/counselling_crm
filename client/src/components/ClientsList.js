import React from "react";
import ClientItem from "./ClientItem";

const ClientsList = ({clients, removeClient, updateClient}) => {
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