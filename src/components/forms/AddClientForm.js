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
            <h3>Add New Client Form</h3>  
            <fieldset>
                <legend>Contact Details</legend>
                <label htmlFor='first-name'>First Name</label>   
                <input id='first-name' name="first-name" type="text" placeholder="First Name" />

                <label htmlFor='last-name'>Last Name</label>   
                <input id='' name="last-name" type="text" placeholder="Last Name" />

                <label htmlFor='phone'>Phone</label>   
                <input id='phone' name="phone" type="text" placeholder="Phone Number" />

                <label htmlFor='email'>Email</label> 
                <input id='email' name="email" type="text" placeholder="Email" />

                <label htmlFor='address'>Address</label> 
                <textarea id='address' name="address" placeholder="Address"></textarea>

            </fieldset>

            <fieldset>
                <legend>Therapy Details</legend>
                <label htmlFor='wew-score'>WEW Score</label>   
                <input id='wew-score' name="wew-score" type="text" placeholder="WEW Score" />

                <label htmlFor='total-sessions'>Number of Sessions Assigned</label>   
                <input id='total-sessions' name="total-sessions" type="number" placeholder="Total Number of Sessions Assigned" />

                <label htmlFor='completed-sessions'>Number of Sessions Completed</label>   
                <input id='completed-sessions' name="completed-sessions" type="number" placeholder="Total Number of Sessions Completed" />

                <label htmlFor='case-closed'>Completed Therapy?</label>
                <span>
                <input className='case-closed' type="radio" name="radio" value='no' checked />No
                <input className='case-closed' type="radio" name="radio" value='yes' />Yes<br/>
                </span>

                <label htmlFor='hourly-rate'>Which Hourly Rate</label>   
                <select id='hourly-rate' name="hourly-rate">
                    <option value='full-rate'>Full Rate</option>
                    <option value='student-rate'>Student Discount</option>
                    <option value='concession'>Concession</option>
                </select>

                

                <label htmlFor='client-type'>Type of Client</label>   
                <select id='client-type' name="client-type">
                    <option value='private'>Private Practice</option>
                    <option value='broke-not-broken'>Broke Not Broken</option>
                    <option value='eap'>EAP</option>
                </select>

                <input id="add-client-submit" type="submit" value="Save Details"></input>
                
            </fieldset>

            </form>

        </div>
  )
}

export default AddClient;