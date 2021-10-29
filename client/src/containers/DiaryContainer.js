import React, { useState } from 'react';
import EmbeddedCalendar from '../components/EmbeddedCalendar';
import '../css/main.css'

const DiaryContainer = () => {


    return (
        <>

            <div id="diary">

                <p>Here is the diary</p>

                <EmbeddedCalendar />

                <p>google calendar</p>

            </div>

        </>
    )
}

export default DiaryContainer;