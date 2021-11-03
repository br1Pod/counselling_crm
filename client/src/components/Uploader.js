import React, { useState } from 'react';
import '../css/main.css'

const Uploader = () => {

    const [fileToUpload, setFileToUpload] = useState();


    return (
        <>
        <form className = "file_uploader">
            <input type="file" name="file" 
            accept=".txt, .md, .doc, .docx, .pdf, .xls, .xlsx, .csv, .png, .jpg, .jpeg, .gif" 
            onChange={onChange} />
            
            <div>
                <p>File: {fileToUpload.name}</p>
            </div>
            
            <div>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </form>
        </>
    )

};

export default Uploader;