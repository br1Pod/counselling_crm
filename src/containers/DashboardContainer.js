import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const DashboardContainer = () => {


    return (
        <>

            <Header/>
            <div id="dashboard">
                <p>Here is the dashboard</p>
            </div>

        </>
    )
}

export default DashboardContainer;