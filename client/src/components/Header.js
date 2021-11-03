import React from 'react';
import { Link } from 'react-router-dom';

import '../css/main.css'


const Header = () => {
    return (
        
        <header>
            <div id= "branding">
                <h1 title="View Dashboard">
                    <Link to = "/"> ConnectCounselling CRM </Link>
                </h1>
            </div>    
            <nav>
                <ul id="primary_nav">
                     
                    {/* <li title="View Dashboard">
                        <Link to = "/">Dashboard</Link>
                    </li> */}
                    
                    <li title="View Diary">
                        <Link to = "/diary">Diary</Link>
                    </li>
                    
                    <li title="View Clients">
                        <Link to = "/clients">Clients</Link>
                    </li>        
                     
                    <li title="View Contacts">
                        <Link to = "/contacts">Contacts</Link>
                    </li>                    
                         
                    <li title="View Documents">
                        <Link to = "/docs">Documents</Link>
                    </li>                    
                        
                    {/* <li title="View Accounts">
                        <Link to = "/accounts">Accounts</Link>
                    </li> */}
                    
                </ul>
            </nav>
            
        </header>
    )


}
      
            
            
export default Header;  