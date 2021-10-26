import React from 'react';
import { withRouter } from 'react-router-dom';

import '../css/main.css'


const Header = () => {
    return (
        
        <header>
            <div id= "branding">
                <h1><a href = "/" title="Go to Dashboard">ConnectCounselling CRM</a></h1>
            </div>    
            <nav>
                <ul id="primary_nav">
                    <li><a href = "/" title="View Dashboard">Dashboard</a></li>
                    <li><a href = "/diary" title="View Diary">Diary</a></li>
                    <li><a href = "/clients" title="View Clients">Clients</a></li>
                    <li><a href = "/contacts" title="View Contacts">Contacts</a></li>
                    <li><a href = "/docs" title="View Documents">Documents</a></li>
                    <li><a href = "/accounts" title="View Accounts">Accounts</a></li>
                </ul>
            </nav>
            
        </header>
    )


}
      
            
            
export default Header;  