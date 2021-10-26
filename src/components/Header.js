import React from 'react';
import { withRouter } from 'react-router-dom';

import '../css/main.css'


const Header = () => {
    return (
        <div id= "branding">
            <header>
                <h1><a href = "/">ConnectCounselling CRM</a></h1>
                <nav id="primary_nav">
                    <ul>
                        <li><a href = "/diary">Diary</a></li>
                        <li><a href = "/clients">Clients</a></li>
                        <li><a href = "/contacts">Contacts</a></li>
                        <li><a href = "/docs">Documents</a></li>
                        <li><a href = "/accounts">Accounts</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )


}
      
            
            
export default Header;  