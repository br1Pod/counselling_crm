import React, { useState } from 'react';


const AddClient = ({addClient}) => {

    const [clientFormData, setClientFormData] = useState({})

    const onChange = (e) =>{
        clientFormData[e.target.id] = e.target.value;
        setClientFormData(clientFormData);
    }

    const onSubmit = event => {
        event.preventDefault()
    }


    return (
        <div>

            <form className='form' onSubmit={onSubmit} id="add-client-form">  
            <fieldset>
                <label htmlFor='first-name'>First Name</label>   
                <input name="first-name" type="text" placeholder="First Name" />

                <label htmlFor='last-name'>Last Name</label>   
                <input name="last-name" type="text" placeholder="Last Name" />

                <label htmlFor='phone'>Phone</label>   
                <input name="phone" type="text" placeholder="Phone Number" />

                <label htmlFor='email'>Email</label> 
                <input name="email" type="text" placeholder="Email" />

                <label htmlFor='address'>Address</label> 
                <textarea name="address" placeholder="Address"></textarea>

            </fieldset>

            <fieldset>

                <label htmlFor='first-name'>First Name</label>   
                <input name="first-name" type="text" placeholder="First Name" />

                <input id="namesubmit" type="submit" value="Save"></input>
                
            </fieldset>

            </form>

        </div>
  )
}

export default AddClient;