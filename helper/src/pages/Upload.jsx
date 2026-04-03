import "../styles/main.css"
import "../styles/upload.css"

function Upload() {
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
                    />
                </div>

                {/* Submit Button */}
                <div className="upload-submit">
                    <button className="upload-button" disabled>
                        Continue
                    </button>
                    <p className="upload-note">Button activates once a file is selected</p>
                </div>

            </div>

        </div>
    )
}

export default Upload;
