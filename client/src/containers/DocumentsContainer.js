import React, { useState } from 'react';
import Uploader from "../components/Uploader";
import '../css/main.css'

const DocumentsContainer = () => {
    

    return (
        <>

            <div id="documents">
                <p>Here are the documents</p>

                <Uploader />

            </div>

        </>
    )
}

export default DocumentsContainer;