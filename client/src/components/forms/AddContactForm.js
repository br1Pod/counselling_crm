import React, { useState } from 'react';


const AddContact = ({addContact}) => {

    const [contactFormData, setContactFormData] = useState({})

    const onChange = (e) =>{
        contactFormData[e.target.id] = e.target.value;
        setContactFormData(contactFormData);
    }

    const onSubmit = event => {
        event.preventDefault()
    }


    return (
        <div>

            <form className='form' onSubmit={onSubmit} id="add-contact-form">  
                <h3>Add New Contact</h3>
                <fieldset>
                    <legend>Add New Contact</legend>
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

                    <input id="add-contact-submit" type="submit" value="Save"></input>
                </fieldset>
            </form>

        </div>
  )
}

export default AddContact;