import React, { useState } from 'react';


const AddClient = ({addClient}) => {

    const [clientFormData, setClientFormData] = useState({})

    const onChange = (event) =>{
        clientFormData[event.target.id] = event.target.value;
        setClientFormData(clientFormData);
    }

    const onSubmit = event => {
        event.preventDefault();
        
    }


    return (
        <div>
            
            <form className='form' onSubmit={onSubmit} id="add-client-form">
            <h3>Add New Client Form</h3>  
            <fieldset>
                <legend>Contact Details</legend>
                <label htmlFor='first-name'>First Name</label>   
                <input onChange={onChange} id='first-name' name="first-name" type="text" placeholder="First Name" />

                <label htmlFor='last-name'>Last Name</label>   
                <input onChange={onChange} id='last-name' name="last-name" type="text" placeholder="Last Name" />

                <label htmlFor='phone'>Phone</label>   
                <input onChange={onChange} id='phone' name="phone" type="text" placeholder="Phone Number" />

                <label htmlFor='email'>Email</label> 
                <input onChange={onChange} id='email' name="email" type="text" placeholder="Email" />

                <label htmlFor='address'>Address</label> 
                <textarea id='address' name="address" placeholder="Address"></textarea>

            </fieldset>

            <fieldset>
                <legend>Emergency Contact</legend>
                <label htmlFor='emergency-name'>Emergency Contact Name</label>   
                <input onChange={onChange} id='emergency-name' name="emergency-name" type="text" placeholder="Emergency Name" />

                <label htmlFor='emergency-phone'>Emergency Contact Phone</label>   
                <input onChange={onChange} id='emergency-phone' name="emergency-phone" type="text" placeholder="Emergency Phone Number" />

                <label htmlFor='emergency-aware'>Does this Contact know about Sessions?</label>
                <span>
                <input onChange={onChange} id='emergency-unaware' className='radio-fix' type="radio" name="emergency-unaware" value='no' defaultChecked />No
                <input onChange={onChange} id='emergency-aware' className='radio-fix' type="radio" name="emergency-aware" value='yes' />Yes<br/>
                </span>
            </fieldset>

            <fieldset>
                <legend>Therapy Details</legend>
                <label htmlFor='wew-score'>WEW Score</label>   
                <input onChange={onChange} id='wew-score' name="wew-score" type="text" placeholder="WEW Score" />

                <label htmlFor='total-sessions'>Number of Sessions Assigned</label>   
                <input onChange={onChange} id='total-sessions' name="total-sessions" type="number" placeholder="Total Number of Sessions Assigned" />

                <label htmlFor='completed-sessions'>Number of Sessions Completed</label>   
                <input onChange={onChange} id='completed-sessions' name="completed-sessions" type="number" placeholder="Total Number of Sessions Completed" />

                <label htmlFor='radio-fix'>Completed Therapy?</label>
                <span>
                <input onChange={onChange} id='sessions-incomplete' className='radio-fix' type="radio" name="sessions-incomplete" value='no' defaultChecked />No
                <input onChange={onChange} id='sessions-complete' className='radio-fix' type="radio" name="sessions-complete" value='yes' />Yes<br/>
                </span>

                <label htmlFor='hourly-rate'>Which Hourly Rate</label>   
                <select onChange={onChange} id='hourly-rate' name="hourly-rate">
                    <option value='full-rate'>Full Rate</option>
                    <option value='student-rate'>Student Discount</option>
                    <option value='concession'>Concession</option>
                </select>



                <label htmlFor='client-type'>Type of Client</label>   
                <select onChange={onChange} id='client-type' name="client-type">
                    <option value='private'>Private Practice</option>
                    <option value='broke-not-broken'>Broke Not Broken</option>
                    <option value='eap'>EAP</option>
                </select>

                <input type="submit" id="add-client-submit" value="Save Details"></input>
                
            </fieldset>

            </form>

        </div>
  )
}

export default AddClient;