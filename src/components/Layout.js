import React from 'react';
import Header from './Header';
import '../css/layout.css'


const Layout = ({ children }) => {
    return (
        <div id='layout'>
            <Header/>
            <div id="main_body" className="cornered">
                <div id='content'>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Layout;