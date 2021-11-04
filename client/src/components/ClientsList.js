import React, { useState, useEffect } from "react";
import ClientItem from "./ClientItem";

const ClientsList = ({clients, removeClient}) => {

    const clientList = clients.map((client) =>{
        return <ClientItem client={client} key={client._id} removeClient={removeClient} />
    });

    return (
        <>
            <ul id="people">
                {clientList}
            </ul>
        </>
    );

}

export default ClientsList;