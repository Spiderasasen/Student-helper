import "../styles/main.css"
import "../styles/upload.css"
import { useState } from "react";

function Upload() {

    //checking that the file was uploaded
    const [file, setFile] = useState(null);

    //when the user selects a file
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className="upload-container">

            {/* Title Section */}
            <div className="upload-header">
                <h1>Upload a Syllabus</h1>
                <p className="upload-subtitle">
                    Please upload your syllabus so we can extract the grading weights
                    and generate accurate predictions for your class performance.
                </p>
            </div>

            {/* Upload Area */}
            <div className="upload-area">

                <div className="upload-box">
                    <p className="upload-instructions">Choose your syllabus file</p>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        className="upload-input"
                        onChange={handleFileChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="upload-submit">
                    <button
                        className={`upload-button ${file ? "active" : ""}`}
                        disabled={!file}
                    >
                        Continue
                    </button>

                    {!file && (
                        <p className="upload-note">Button activates once a file is selected</p>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Upload;
