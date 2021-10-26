import React from 'react';
import Header from './Header';
import '../css/layout.css'


const Layout = ({ children }) => {
    return (
        <div id='layout'>

            <div id='content'>
                {children}
            </div>
        </div>
    )
};

export default Layout;