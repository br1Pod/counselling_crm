import React, { useState } from 'react';
import { updateClient } from "./AddClientService";



const EditClientForm = ({updateClient}) => {

    const [clientFormData, setClientFormData] = useState({})

    const onChange = (event) =>{
        clientFormData[event.target.id] = event.target.value;
        setClientFormData(clientFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        updateClient(clientFormData)
        .then((data)=>{
            updateClient(clientFormData);
        })
    }


    return (
    
        <form className='form' onSubmit={onSubmit} id="edit-client-form" method="put">
            <h3>Edit Client</h3>  
            <fieldset>
                <legend>Contact Details</legend>
                <label htmlFor='first_name'>First Name</label>   
                <input onChange={onChange} id='first_name' name="first_name" type="text" placeholder="first_name" />

                <label htmlFor='last_name'>Last Name</label>   
                <input onChange={onChange} id='last_name' name="last_name" type="text" placeholder="Last Name" />

                <label htmlFor='phone'>Phone</label>   
                <input onChange={onChange} id='phone' name="phone" type="text" placeholder="Phone Number" />

                <label htmlFor='email'>Email</label> 
                <input onChange={onChange} id='email' name="email" type="text" placeholder="Email" />

                <label htmlFor='address'>Address</label> 
                <textarea id='address' name="address" placeholder="Address"></textarea>

            </fieldset>

            <fieldset>
                <legend>Emergency Contact</legend>
                <label htmlFor='emergency_name'>Emergency Contact Name</label>   
                <input onChange={onChange} id='emergency_name' name="emergency_name" type="text" placeholder="Emergency Name" />

                <label htmlFor='emergency_phone'>Emergency Contact Phone</label>   
                <input onChange={onChange} id='emergency_phone' name="emergency_phone" type="text" placeholder="Emergency Phone Number" />

                <label htmlFor='emergency_aware'>Does this Contact know about Sessions?</label>
                <span>
                <input onChange={onChange} className='radio-fix' type="radio" value='no' defaultChecked />No
                <input onChange={onChange} className='radio-fix' type="radio" value='yes' />Yes<br/>
                </span>
            </fieldset>

            <fieldset>
                <legend>Therapy Details</legend>
                <label htmlFor='wew_score'>WEW Score</label>   
                <input onChange={onChange} id='wew_score' name="wew_score" type="text" placeholder="WEW Score" />

                <label htmlFor='total_sessions'>Number of Sessions Assigned</label>   
                <input onChange={onChange} id='total_sessions' name="total_sessions" type="number" placeholder="Total Number of Sessions Assigned" />

                <label htmlFor='completed_sessions'>Number of Sessions Completed</label>   
                <input onChange={onChange} id='completed_sessions' name="completed_sessions" type="number" placeholder="Total Number of Sessions Completed" />

                <label htmlFor='finished'>Completed Therapy?</label>
                <span>
                <input onChange={onChange}className='radio-fix' type="radio" value='no' defaultChecked />No
                <input onChange={onChange} className='radio-fix' type="radio" value='yes' />Yes<br/>
                </span>

                <label htmlFor='hourly_rate'>Which Hourly Rate</label>   
                <select onChange={onChange} id='hourly_rate' name="hourly_rate">
                    <option value='full_rate'>Full Rate</option>
                    <option value='student_rate'>Student Discount</option>
                    <option value='concession'>Concession</option>
                </select>

                <label htmlFor='client_type'>Type of Client</label>   
                <select onChange={onChange} id='client_type' name="client_type">
                    <option value='private'>Private Practice</option>
                    <option value='broke_not_broken'>Broke Not Broken</option>
                    <option value='eap'>EAP</option>
                </select>

                <input type="submit" id="edit-client-submit" value="Save Changes"/>
                
            </fieldset>
            </form>

    )
}

export default EditClientForm;