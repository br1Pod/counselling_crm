import React, { useState, useEffect } from "react";
import { deleteClient, updateClient } from "./forms/AddClientService"
import EditClientForm from '../components/forms/EditClientForm'
import Collapsible from 'react-collapsible';

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
            <div>
            <a href="" className="person-item, list-object">{client.first_name} {client.last_name}</a>
            <span className="person-manage">
            <button className="list-object" onClick={handleDelete}>x</button>
            </span>
            </div>

            <Collapsible trigger="expand" className="list-object">
                <div className="content"> 
                <form>
                <label>Case Note</label>
                <textarea>Add Case notes in here</textarea>
                </form>

                <p>Name: {client.first_name} {client.last_name} <span id="edit">edit</span></p>
                <p>Phone: {client.phone} <span id="edit">edit</span></p>
                <p>Email: {client.email} <span id="edit">edit</span></p>
                <p>Address: {client.address} <span id="edit">edit</span></p>
                <p>Emergency Contact: {client.emergency_name} <span id="edit">edit</span></p>
                <p>Emergency Tel: {client.emergency_phone} <span id="edit">edit</span></p>

                <p>Name: {client.wew_score} <span id="edit">edit</span></p>
                <p>Name: {client.total_sessions} <span id="edit">edit</span></p>
                <p>Name: {client.completed_sessions} <span id="edit">edit</span></p>
                <p>Name: {client.hourly_rate} <span id="edit">edit</span></p>
                <p>Name: {client.client_type} <span id="edit">edit</span></p>
                
                <p> <span id="edit">edit</span></p>
                </div>
            </Collapsible>
            
            

            


            
        </li>       
        <hr></hr>
        </>
    )
}

export default ClientItem;