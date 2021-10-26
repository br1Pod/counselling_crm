import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const AccountsContainer = () => {


    return (
        <>

            <Header/>
            <div id="accounts">
                <p>Here are the accounts</p>
            </div>

        </>
    )
}

export default AccountsContainer;  