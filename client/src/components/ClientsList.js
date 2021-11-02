import ClientItem from "./ClientItem";

const ClientsList = ({clients, removeClient}) => {
    const clientList = clients.map((client) =>{
        return <ClientItem client={client} key={client._id} removeClient={removeClient} />
    });
    
    return (
        <>
            {clientList}
        </>
    );

}

export default ClientsList;