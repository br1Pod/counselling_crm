import React, { useState } from 'react';
import '../css/main.css'

const Uploader = () => {

    const [fileToUpload, setFileToUpload] = useState();

    const onChange = (event) => {
		setFileToUpload(event.target.files[0]);
	};

    const onSubmit = (event) => {
        event.preventDefault();
		const formData = new FormData();
		formData.append('File', fileToUpload);

		fetch(
			'http://localhost:3000/assets/docs/uploads/',
			{
				method: 'POST',
				body: formData,
			}
		)
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });

	};

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