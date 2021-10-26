import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const DocumentsContainer = () => {


    return (
        <>

            <Header/>
            <div id="documents">
                <p>Here are the documents</p>
            </div>

        </>
    )
}

export default DocumentsContainer;