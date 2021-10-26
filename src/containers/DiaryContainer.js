import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.js';
import '../css/main.css'

const DiaryContainer = () => {


    return (
        <>

            <Header/>
            <div id="diary">
                <p>Here is the diary</p>
            </div>

        </>
    )
}

export default DiaryContainer;