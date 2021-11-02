import { deleteClient } from "./forms/AddClientService"

const ClientItem = ({client, removeClient}) => {

    console.log(client);
    const handleDelete = () => {
        deleteClient(client._id).then(()=>{
            removeClient(client._id);
        })
    }
    return (
        <>
            <h1>Name: {client.first_name} {client.last_name}</h1>
            <button onClick={handleDelete}>x</button>
            
            <hr></hr>
        </>
    )
}

export default ClientItem;